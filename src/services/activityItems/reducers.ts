import { Reducer } from "redux";
import { ActivityItemAction, ActivityItemActionType } from "./actions";
import { ActivityItem } from "./models";

export interface ActivityItemState {
  activityItems: ActivityItem[];
  isLoading: boolean;
  error?: string | null;
}

export const initialState = {
  activityItems: [],
  isLoading: false,
};

const activityItemReducer: Reducer<ActivityItemState, ActivityItemAction> = (
  state: ActivityItemState = initialState,
  action: ActivityItemAction
): ActivityItemState => {
  switch (action.type) {
    case ActivityItemActionType.GET_START: {
      return {
        ...state,
        activityItems: [],
        isLoading: true,
      };
    }
    case ActivityItemActionType.GET_SUCCEED: {
      return {
        ...state,
        activityItems: action.payload.result.items,
        isLoading: false,
      };
    }
    case ActivityItemActionType.GET_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }
    // case ActivityItemActionType.ADD: {
    //   return {
    //     ...state,
    //     activityItems: [...state.activityItems, action.item],
    //   };
    // }
    // case ActivityItemActionType.REMOVE: {
    //   const removedItems = state.activityItems.filter(
    //     (item) => item.id !== action.item.id
    //   );
    //   return {
    //     ...state,
    //     activityItems: removedItems,
    //   };
    // }
    // case ActivityItemActionType.EDIT: {
    //   const editedItems = state.activityItems.map((item) => {
    //     if (item.id === action.item.id) {
    //       return action.item;
    //     }
    //     return item;
    //   });
    //   return {
    //     ...state,
    //     activityItems: editedItems,
    //   };
    // }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;

      return state;
    }
  }
};

export default activityItemReducer;
