import { AsyncStorage } from "react-native";
import { ActivityItem } from "./models";
import { StorageKeys } from "../../constants";

const storageKey = StorageKeys.ACTIVITY_ITEM;

export const getActivityItemsFactory = () => {
  const getActivityItems = async () => {
    // AsyncStorage.clear();
    const items = await AsyncStorage.getItem(storageKey);
    const activityItems: ActivityItem[] = JSON.parse(items);
    return activityItems;
  };
  return getActivityItems;
};

export const addActivityItemFactory = () => {
  const addActivityItem = async (item: ActivityItem) => {
    const activityItems: ActivityItem[] =
      JSON.parse(await AsyncStorage.getItem(storageKey)) || [];
    console.log(activityItems);
    const addedActivityItems = JSON.stringify([item, ...activityItems]);
    try {
      await AsyncStorage.setItem(storageKey, addedActivityItems);
    } catch (e) {
      console.error(e);
    }
  };
  return addActivityItem;
};
