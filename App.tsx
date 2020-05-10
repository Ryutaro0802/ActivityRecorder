import React, { useState } from "react";
import { AppLoading } from "expo";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import * as Font from "expo-font";
// import { Ionicons } from '@expo/vector-icons'
import ActivityItemForm from "./src/containers/ActivityItemForm";
import ActivityItemList from "./src/containers/ActivityItemList";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import activityItemReducer, {
  initialState,
} from "./src/services/activityItems/reducers";

const store = createStore(activityItemReducer, initialState);

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
      <Container style={styles.container}>
        <Content>
          <ActivityItemForm />
        </Content>

        <Content>
          <ActivityItemList />
        </Content>
      </Container>
    </Provider>
  );
}

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
