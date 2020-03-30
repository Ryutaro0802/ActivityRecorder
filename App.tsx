import React from 'react';
import { AppLoading } from 'expo';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Textarea, Label, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <Container style={styles.container}>
      <Content>
        <Form>
          <Item inlineLabel>
            <Label>Title</Label>
            <Input />
          </Item>
          <Item inlineLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          {/* <Textarea rowSpan={5} bordered placeholder="Textarea" /> */}
        </Form>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
  }
})