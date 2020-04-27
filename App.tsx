import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import ItemCard from './components/Card/ItemCard'
import NewActivityForm from './components/Form/NewActivityItemForm'

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const [items, setItems] = useState([
    {
      title: 'ピアノの練習',
      body: '基礎練習をした',
      time: 200000,
      createdAt: '',
      updatedAt: ''
    }
  ])

  const loadAssets = async () => {
    await Font.loadAsync({
      Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
    })
  }

  // const press = () => {
  //   setItems([...items, {
  //     title: 'hoge',
  //     body: 'fuga',
  //     time: 20,
  //     createdAt: '',
  //     updatedAt: ''
  //   }])
  // }

  const cards = items.map((item, index) =>
    <ItemCard key={index} title={item.title} body={item.body} />
  )

  if (!isReady) {
    return <AppLoading
      startAsync={loadAssets}
      onFinish={() => setIsReady(true)}
    />
  }
  return (
    <Container style={styles.container}>
      <Content>
        <NewActivityForm />
      </Content>

      <Content>
        {cards}
      </Content>
    </Container>
  )
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
})