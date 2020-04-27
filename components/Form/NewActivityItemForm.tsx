import React, { FC } from 'react'
import { Form, Item, Label, Input, Textarea, Button, Text } from 'native-base'
import { View, StyleSheet } from 'react-native'
import dayjs from 'dayjs'

const press = () => {
    console.log('pressed')
}

const NewActivityItemForm: FC = ({ }) => (
    <>
        <Form>
            <Item inlineLabel>
                <Label>Title</Label>
                <Input />
            </Item>
            <Item inlineLabel>
                <Label>Time</Label>
                <Input />
            </Item>
            <View style={styles.textAreaContainer}>
                <Textarea rowSpan={5} underline bordered placeholder="Memo" />
            </View>

            <Button onPress={press}>
                <Text>Click Me!</Text>
            </Button>
        </Form>
    </>
)

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

export default NewActivityItemForm