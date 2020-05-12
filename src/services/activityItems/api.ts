import { AsyncStorage } from "react-native";
import { ActivityItem } from "./models";
import { StorageKeys } from "../../constants";

const storageKey = StorageKeys.ACTIVITY_ITEM;

export const getActivityItemsFactory = () => {
  const getActivityItems = async () => {
    const items = await AsyncStorage.getItem(storageKey);
    console.log(JSON.parse(items));
    const activityItems: ActivityItem[] = JSON.parse(items);
    return activityItems;
  };
  return getActivityItems;
};

export const addActivityItemFactory = () => {
  const addActivityItem = async (item: ActivityItem) => {
    const stringObject = JSON.stringify(item);
    try {
      await AsyncStorage.setItem(storageKey, stringObject);
    } catch (e) {
      console.error(e);
    }
  };
  return addActivityItem;
};
