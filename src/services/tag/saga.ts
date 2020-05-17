import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { Tag } from "./models";

import { TagActionType, getTags } from "./actions";
import { getTagsFactory } from "./api";

function* runGetTags() {
  const getItemsFactory = getTagsFactory();
  const storageItem: Tag[] | null = yield call(getItemsFactory);
  const tags = storageItem || [];
  yield put(getTags.succeed({ tags }));
}

export function* watchGetTags() {
  yield takeLatest(TagActionType.GET_START, runGetTags);
}

export default function* rootSaga() {
  yield all([fork(watchGetTags)]);
}
