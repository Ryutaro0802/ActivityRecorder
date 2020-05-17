import React, { FC } from "react";
import dayjs from "dayjs";
import { View, StyleSheet } from "react-native";
import ItemCard from "../Card/ItemCard";
import FirstHeader from "../Heading/FirstHeader";
import { ActivityItem } from "../../services/activityItems/models";
interface ActivityItemListProps {
  activityItems: ActivityItem[];
}

const ActivityItemList: FC<ActivityItemListProps> = ({
  activityItems = [],
}) => {
  return (
    <>
      {activityItems.map((activityItem, index, array) => {
        const dateTitle = () => {
          const prevItem = array[index - 1];
          const currentUpdatedAt = dayjs(activityItem.updatedAt).format(
            "YYYY-MM-DD"
          );
          if (!prevItem) {
            return currentUpdatedAt;
          }
          const prevUpdatedAt = dayjs(prevItem.updatedAt).format("YYYY-MM-DD");
          if (currentUpdatedAt === prevUpdatedAt) {
            return null;
          }
          return dayjs(activityItem.updatedAt).format("YYYY-MM-DD");
        };
        return (
          <View key={activityItem.id}>
            {dateTitle() && (
              <View style={styles.heading}>
                <FirstHeader title={dateTitle()} />
              </View>
            )}
            <ItemCard title={activityItem.title} body={activityItem.body} />
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default ActivityItemList;
