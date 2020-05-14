import "react-native-gesture-handler";
import React, { useState } from "react";
import { AppLoading } from "expo";
import { StyleSheet, View, Text } from "react-native";
import { Container, Content } from "native-base";
import * as Font from "expo-font";
// import { Ionicons } from '@expo/vector-icons'
import ActivityItemForm from "./src/containers/ActivityItemForm";
import ActivityItemList from "./src/containers/ActivityItemList";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListScreen from "./src/components/Screen/ListScreen";

import activityItemReducer from "./src/services/activityItems/reducers";
import rootSaga from "./src/services/activityItems/saga";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(activityItemReducer, applyMiddleware(sagaMiddleWare));
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

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
    // <Provider store={store}>
    //   <Container style={styles.container}>
    //     <Content>
    //       <ActivityItemForm />
    //     </Content>

    //     <Content>
    //       <ActivityItemList />
    //     </Content>
    //   </Container>
    // </Provider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

sagaMiddleWare.run(rootSaga);

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  textAreaContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
