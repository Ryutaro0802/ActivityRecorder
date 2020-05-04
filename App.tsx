import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import ItemCard from './src/components/Card/ItemCard'
import NewActivityForm from './src/components/Form/NewActivityItemForm'
import { ActivityItem } from './src/types'

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

  const registerItem = (newItem: ActivityItem) => {
    console.log('newItem', newItem)
  }

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
        <NewActivityForm registerItem={registerItem} />
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