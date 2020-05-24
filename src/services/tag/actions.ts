import { Tag } from "./models";

export enum TagActionType {
  ADD_START = "TagAddStart",
  ADD_SUCCEED = "TagAddSucceed",
  ADD_FAIL = "TagAddFail",
  EDIT_START = "TagEditStart",
  EDIT_SUCCEED = "TagEditSucceed",
  EDIT_FAIL = "TagEditFail",
  REMOVE_START = "TagDeleteStart",
  REMOVE_SUCCEED = "TagDeleteSucceed",
  REMOVE_FAIL = "TagDeleteFail",
  GET_START = "TagGetStart",
  GET_SUCCEED = "TagGetSucceed",
  GET_FAIL = "TagGetFail",
}

export interface GetTagResult {
  tags: Tag[];
}

export const getTags = {
  start: () => {
    console.log("start");
    return {
      type: TagActionType.GET_START as typeof TagActionType.GET_START,
    };
  },
  succeed: (result: GetTagResult) => ({
    type: TagActionType.GET_SUCCEED as typeof TagActionType.GET_SUCCEED,
    payload: { result },
  }),
  fail: (error: any) => ({
    type: TagActionType.GET_FAIL as typeof TagActionType.GET_FAIL,
    payload: { error },
    error: true,
  }),
};

export type TagAction =
  | ReturnType<typeof getTags.start>
  | ReturnType<typeof getTags.succeed>
  | ReturnType<typeof getTags.fail>;
