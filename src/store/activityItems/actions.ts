import { ActivityItem } from "../../types";

export enum ActivityItemActionType {
  ADD = "ActivityItemAdd",
  EDIT = "ActivityItemEdit",
  REMOVE = "ActivityItemDelete",
}

export interface ActivityItemAction {
  type: ActivityItemActionType;
  item?: ActivityItem;
}

export const add = (item: ActivityItem): ActivityItemAction => ({
  item,
  type: ActivityItemActionType.ADD,
});

export const edit = (item: ActivityItem): ActivityItemAction => ({
  item,
  type: ActivityItemActionType.EDIT,
});

export const remove = (item: ActivityItem): ActivityItemAction => ({
  item,
  type: ActivityItemActionType.REMOVE,
});
