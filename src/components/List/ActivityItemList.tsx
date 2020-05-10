import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import ItemCard from "../Card/ItemCard";
import { ActivityItem } from "../../services/activityItems/models";

interface ActivityItemListProps {
  activityItems: ActivityItem[];
}

const ActivityItemList: FC<ActivityItemListProps> = ({
  activityItems = [],
}) => {
  return (
    <>
      {activityItems.map((activityItem) => {
        return (
          <ItemCard
            key={activityItem.id}
            title={activityItem.title}
            body={activityItem.body}
          />
        );
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
