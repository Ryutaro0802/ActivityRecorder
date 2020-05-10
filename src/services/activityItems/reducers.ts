import { Reducer } from "redux";
import { ActivityItemAction, ActivityItemActionType } from "./actions";
import { ActivityItem } from "./models";

export interface ActivityItemState {
  activityItems: ActivityItem[];
}

export const initialState = {
  activityItems: [],
};

const activityItemReducer: Reducer<ActivityItemState, ActivityItemAction> = (
  state: ActivityItemState = initialState,
  action: ActivityItemAction
): ActivityItemState => {
  switch (action.type) {
    case ActivityItemActionType.ADD: {
      return {
        ...state,
        activityItems: [...state.activityItems, action.item],
      };
    }
    case ActivityItemActionType.REMOVE: {
      const removedItems = state.activityItems.filter(
        (item) => item.id !== action.item.id
      );
      return {
        ...state,
        activityItems: removedItems,
      };
    }
    case ActivityItemActionType.EDIT: {
      const editedItems = state.activityItems.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      return {
        ...state,
        activityItems: editedItems,
      };
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;

      return state;
    }
  }
};

export default activityItemReducer;
