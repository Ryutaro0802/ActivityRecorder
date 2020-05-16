import "react-native-gesture-handler";
import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
// import { Ionicons } from '@expo/vector-icons'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListScreen from "./src/components/Screen/ListScreen";
import FormScreen from "./src/components/Screen/FormScreen";

import activityItemReducer from "./src/services/activityItems/reducers";
import rootSaga from "./src/services/activityItems/saga";
import { NavigationContainer } from "@react-navigation/native";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(activityItemReducer, applyMiddleware(sagaMiddleWare));
const Tab = createBottomTabNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    await Font.loadAsync({
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
    });
  };

  if (!isReady) {
    return (
      <AppLoading startAsync={loadAssets} onFinish={() => setIsReady(true)} />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="List" component={ListScreen} />
          <Tab.Screen name="Form" component={FormScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

sagaMiddleWare.run(rootSaga);
