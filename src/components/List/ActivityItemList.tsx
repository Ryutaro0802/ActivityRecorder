import React, { FC, useState } from "react";
import { Form, Item, Label, Input, Textarea, Button, Text } from "native-base";
import { View, StyleSheet } from "react-native";
import dayjs from "dayjs";
import ItemCard from "../Card/ItemCard";
import { ActivityItem } from "../../services/activityItems/models";

interface NewActivityItemFormProps {
  activityItems: ActivityItem[];
}

const ActivityItemList: FC<NewActivityItemFormProps> = ({
  activityItems = [],
}) => {
  return (
    <>
      {activityItems.map((activityItem) => {
        <ItemCard
          key={activityItem.id}
          title={activityItem.title}
          body={activityItem.body}
        />;
      })}
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 30,
//     paddingBottom: 30,
//   },
//   textAreaContainer: {
//     paddingLeft: 10,
//     paddingRight: 10,
//   },
//   timeTextBoxes: {
//     flexDirection: "row",
//   },
//   timeTextBox: {
//     flex: 1,
//   },
// });

export default ActivityItemList;
