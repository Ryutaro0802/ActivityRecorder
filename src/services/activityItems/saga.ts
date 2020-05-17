import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { ActivityItem } from "./models";

import { ActivityItemActionType, getItems, addItem } from "./actions";
import { getActivityItemsFactory, addActivityItemFactory } from "./api";

function* runGetItems() {
  const getItemsFactory = getActivityItemsFactory();
  const storageItem: ActivityItem[] | null = yield call(getItemsFactory);
  const items: ActivityItem[] = storageItem || [];
  yield put(getItems.succeed({ items }));
}

export function* watchGetItems() {
  yield takeLatest(ActivityItemActionType.GET_START, runGetItems);
}

function* runAddItem(action: ReturnType<typeof addItem.start>) {
  const api = addActivityItemFactory();
  const { additionalItem } = action.payload;
  const item: ActivityItem = additionalItem;
  yield call(api, item);
}

export function* watchAddItem() {
  yield takeLatest(ActivityItemActionType.ADD_START, runAddItem);
}

export default function* rootSaga() {
  yield all([fork(watchGetItems), fork(watchAddItem)]);
}
