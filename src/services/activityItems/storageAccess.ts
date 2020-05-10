import { AsyncStorage } from "react-native";
import { ActivityItem } from "./models";
import { StorageKeys } from "../../constants";

const storageKey = StorageKeys.ACTIVITY_ITEM;

export const getActivityItemsFactory = () => {
  const getActivityItems = async () => {
    const items = await AsyncStorage.getItem(storageKey);
    const activityItems: ActivityItem[] = JSON.parse(items);
    return activityItems;
  };
  return getActivityItems;
};
