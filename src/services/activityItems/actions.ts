import { AxiosError } from "axios";
import { ActivityItem } from "../../services/activityItems/models";

export enum ActivityItemActionType {
  ADD_START = "ActivityItemAddStart",
  ADD_SUCCEED = "ActivityItemAddSucceed",
  ADD_FAIL = "ActivityItemAddFail",
  EDIT = "ActivityItemEdit",
  REMOVE = "ActivityItemDelete",
  GET_START = "ActivityItemGetStart",
  GET_SUCCEED = "ActivityItemGetSucceed",
  GET_FAIL = "ActivityItemGetFail",
}

// export interface ActivityItemAction {
//   type: ActivityItemActionType;
//   item?: ActivityItem;
// }

export interface GetActivityItemsResult {
  items: ActivityItem[];
}

export interface AddActivityItem {
  item: ActivityItem;
}

export const getItems = {
  start: () => ({
    type: ActivityItemActionType.GET_START as typeof ActivityItemActionType.GET_START,
  }),
  succeed: (result: GetActivityItemsResult) => ({
    type: ActivityItemActionType.GET_SUCCEED as typeof ActivityItemActionType.GET_SUCCEED,
    payload: { result },
  }),
  fail: (error: AxiosError) => ({
    type: ActivityItemActionType.GET_FAIL as typeof ActivityItemActionType.GET_FAIL,
    payload: { error },
    error: true,
  }),
};

export const addItems = {
  start: (addItem: AddActivityItem) => ({
    type: ActivityItemActionType.ADD_START as typeof ActivityItemActionType.ADD_START,
    payload: { addItem },
  }),
  succeed: (addItem: AddActivityItem) => ({
    type: ActivityItemActionType.ADD_SUCCEED as typeof ActivityItemActionType.ADD_SUCCEED,
    payload: { addItem },
  }),
  fail: (error: any) => ({
    type: ActivityItemActionType.ADD_FAIL as typeof ActivityItemActionType.ADD_FAIL,
    error: true,
  }),
};

// export const add = (item: ActivityItem): ActivityItemAction => ({
//   item,
//   type: ActivityItemActionType.ADD,
// });

// export const edit = (item: ActivityItem): ActivityItemAction => ({
//   item,
//   type: ActivityItemActionType.EDIT,
// });

// export const remove = (item: ActivityItem): ActivityItemAction => ({
//   item,
//   type: ActivityItemActionType.REMOVE,
// });

export type ActivityItemAction =
  | ReturnType<typeof getItems.start>
  | ReturnType<typeof getItems.succeed>
  | ReturnType<typeof getItems.fail>
  | ReturnType<typeof addItems.start>
  | ReturnType<typeof addItems.succeed>
  | ReturnType<typeof addItems.fail>;
