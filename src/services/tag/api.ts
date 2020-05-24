import { AsyncStorage } from "react-native";
import { Tag } from "./models";
import { StorageKeys } from "../../constants";

const storageKey = StorageKeys.TAG;

export const getTagsFactory = () => {
  const getTags = async () => {
    const stringItems = await AsyncStorage.getItem(storageKey);
    const tags: Tag[] = JSON.parse(stringItems) || [];
    return tags;
  };
  return getTags;
};
