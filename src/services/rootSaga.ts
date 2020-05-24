import { all, fork } from "redux-saga/effects";

import { watchGetItems, watchAddItem } from "./activityItems/saga";
import { watchGetTags } from "./tag/saga";

export default function* rootSaga() {
  yield all([fork(watchGetItems), fork(watchAddItem), fork(watchGetTags)]);
}
