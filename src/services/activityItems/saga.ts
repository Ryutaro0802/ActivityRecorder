import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { ActivityItem } from "./models";

import { ActivityItemActionType } from "./actions";
import { getItems } from "./actions";
import { getActivityItemsFactory } from "./storageAccess";

function* runGetItems() {
  const storageAccessFactory = getActivityItemsFactory();
  const storageItem: ActivityItem[] | null = yield call(storageAccessFactory);
  const items: ActivityItem[] = storageItem || [];
  yield put(getItems.succeed({ items }));
}

export function* watchGetItems() {
  yield takeLatest(ActivityItemActionType.GET_START, runGetItems);
}

export default function* rootSaga() {
  yield all([fork(watchGetItems)]);
}
