import React, { FC, useState } from "react";
import {
  Content,
  Form,
  Item,
  Label,
  Input,
  Textarea,
  Button,
  Text,
  DatePicker,
  ListItem,
  CheckBox,
  Body,
} from "native-base";
import { View, StyleSheet } from "react-native";
import dayjs from "dayjs";
import { ActivityItem } from "../../services/activityItems/models";
import { Tag } from "../../services/tag/models";
import { v4 as uuidv4 } from "uuid";

interface NewActivityItemFormProps {
  addActivityItem: (item: ActivityItem) => void;
  tags: Tag[];
}

const NewActivityItemForm: FC<NewActivityItemFormProps> = ({
  addActivityItem = () => {},
  tags = [],
}) => {
  const [title, setTitle] = useState("");
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [body, setBody] = useState("");
  const [chosenDate, setDate] = useState(new Date());
  // const [selectTags, setTags] = useState([]);

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
      id: uuidv4(),
      title,
      body,
      hour,
      minutes,
      updatedAt: chosenDate,
      createdAt: chosenDate,
    };
    clearForm();
    addActivityItem(newItem);
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

        <View>
          <Content>
            {tags.map((tag) => (
              <ListItem key={tag.id}>
                <CheckBox checked={false} />
                <Body>
                  <Text>{tag.name}</Text>
                </Body>
              </ListItem>
            ))}
          </Content>
          <Item>
            <Input placeholder="Add Label" />
          </Item>
        </View>

        <DatePicker
          defaultDate={new Date()}
          locale={"ja"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"slide"}
          androidMode={"default"}
          placeHolderText={dayjs().format("YYYY-MM-DD")}
          textStyle={{ color: "green" }}
          placeHolderTextStyle={{ color: "#d3d3d3" }}
          onDateChange={setDate}
          disabled={false}
        />

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
