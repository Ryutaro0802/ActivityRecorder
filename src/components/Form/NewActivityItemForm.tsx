import React, { FC, useState } from 'react'
import { Form, Item, Label, Input, Textarea, Button, Text } from 'native-base'
import { View, StyleSheet } from 'react-native'
import dayjs from 'dayjs'
import { ActivityItem } from '../../types'

interface NewActivityItemFormProps {
    registerItem: (newItem: ActivityItem) => void
    add: (item: ActivityItem) => void
}

const NewActivityItemForm: FC<NewActivityItemFormProps> = ({
    add = () => {}
 }) => {
    const [title, setTitle] = useState('')
    const [hour, setHour] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [memo, setMemo] = useState('')
    const changeTitle = (title: string) => {
        setTitle(title)
    }
    const changeMemo = (memo: string) => {
        setMemo(memo)
    }
    const changeHour = (hour: number) => {
        setHour(hour)
    }
    const changeMinutes = (minutes: number) => {
        setHour(minutes)
    }
    const clearForm = () => {
        setTitle('')
        setMemo('')
        setHour(0)
        setMinutes(0)
    }
    const createNewItem = () => {
        const newItem: ActivityItem = {
            id: 'id',
            title,
            hour,
            minutes,
            memo,
            updatedAt: dayjs().toDate(),
            createdAt: dayjs().toDate(),
        }
        clearForm()
        add(newItem)
    }

    return (
        <>
            <Form>
                <Item inlineLabel>
                    <Label>Title</Label>
                    <Input
                        value={title}
                        onChangeText={title => changeTitle(title)}
                    />
                </Item>
                <View style={styles.timeTextBoxes}>
                    <View style={styles.timeTextBox}>
                        <Item inlineLabel>
                            <Label>Hour</Label>
                            <Input
                                value={hour.toString()}
                                onChangeText={hour => changeHour(Number(hour))}
                            />
                        </Item>
                    </View>
                    <View style={styles.timeTextBox}>
                        <Item inlineLabel>
                            <Label>Minutes</Label>
                            <Input
                                value={minutes.toString()}
                                onChangeText={minutes => changeMinutes(Number(minutes))}
                            />
                        </Item>
                    </View>
                </View>
                <View style={styles.textAreaContainer}>
                    <Textarea
                        value={memo}
                        rowSpan={5}
                        underline
                        bordered
                        placeholder="Memo"
                        onChangeText={memo => changeMemo(memo)}
                    />
                </View>
                <Button block transparent onPress={createNewItem}>
                    <Text>登録</Text>
                </Button>
            </Form>
        </>
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
    timeTextBoxes: {
        flexDirection: 'row',
    },
    timeTextBox: {
        flex: 1
    },
})

export default NewActivityItemForm