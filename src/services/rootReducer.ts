import { combineReducers } from "redux";

import activityItemReducer, {
  ActivityItemState,
} from "./activityItems/reducers";
import tagReducer, { TagState } from "./tag/reducers";

export interface AppState {
  activityItem: ActivityItemState;
  tag: TagState;
}

const rootReducer = combineReducers({
  activityItem: activityItemReducer,
  tag: tagReducer,
});

export default rootReducer;
