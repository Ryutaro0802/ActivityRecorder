import React, { FC, useState } from "react";
import { Form, Item, Label, Input, Textarea, Button, Text } from "native-base";
import { View, StyleSheet } from "react-native";
import dayjs from "dayjs";
import { ActivityItem } from "../../services/activityItems/models";

interface NewActivityItemFormProps {
  activityItems: ActivityItem[];
  add: (item: ActivityItem) => void;
}

const NewActivityItemForm: FC<NewActivityItemFormProps> = ({
  activityItems = [],
  add = () => {},
}) => {
  const [title, setTitle] = useState("");
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [body, setBody] = useState("");
  const changeTitle = (title: string) => {
    setTitle(title);
  };
  const changeBody = (body: string) => {
    setBody(body);
  };
  const changeHour = (hour: number) => {
    setHour(hour);
  };
  const changeMinutes = (minutes: number) => {
    setHour(minutes);
  };
  const clearForm = () => {
    setTitle("");
    setBody("");
    setHour(0);
    setMinutes(0);
  };
  const createNewItem = () => {
    const newItem: ActivityItem = {
      id: "id",
      title,
      body,
      hour,
      minutes,
      updatedAt: dayjs().toDate(),
      createdAt: dayjs().toDate(),
    };
    clearForm();
    console.log("add", add);
    add(newItem);
    console.log(activityItems);
  };

  return (
    <>
      <Form>
        <Item inlineLabel>
          <Label>Title</Label>
          <Input value={title} onChangeText={(title) => changeTitle(title)} />
        </Item>

        <View style={styles.timeTextBoxes}>
          <View style={styles.timeTextBox}>
            <Item inlineLabel>
              <Label>Hour</Label>
              <Input
                value={hour.toString()}
                onChangeText={(hour) => changeHour(Number(hour))}
              />
            </Item>
          </View>
          <View style={styles.timeTextBox}>
            <Item inlineLabel>
              <Label>Minutes</Label>
              <Input
                value={minutes.toString()}
                onChangeText={(minutes) => changeMinutes(Number(minutes))}
              />
            </Item>
          </View>
        </View>
        <View style={styles.textAreaContainer}>
          <Textarea
            value={body}
            rowSpan={5}
            underline
            bordered
            placeholder="Memo"
            onChangeText={(body) => changeBody(body)}
          />
        </View>
        <Button block transparent onPress={createNewItem}>
          <Text>登録</Text>
        </Button>
      </Form>
    </>
  );
};

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
    flexDirection: "row",
  },
  timeTextBox: {
    flex: 1,
  },
});

export default NewActivityItemForm;
