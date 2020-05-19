import { combineReducers } from "redux";

import activityItemReducer from "./activityItems/reducers";
import tagReducer from "./tag/reducers";

const rootReducer = combineReducers({
  activityItem: activityItemReducer,
  tag: tagReducer,
});

export default rootReducer;
