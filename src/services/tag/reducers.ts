import { Reducer } from "redux";
import { TagAction, TagActionType } from "./actions";
import { Tag } from "./models";

export interface TagState {
  tags: Tag[];
  isLoading: boolean;
  error?: string | null;
}

export const initialState = {
  tags: [],
  isLoading: false,
};

const tagReducer: Reducer<TagState, TagAction> = (
  state: TagState = initialState,
  action: TagAction
): TagState => {
  switch (action.type) {
    case TagActionType.GET_START: {
      return {
        ...state,
        tags: [],
        isLoading: true,
      };
    }
    case TagActionType.GET_SUCCEED: {
      return {
        ...state,
        tags: action.payload.result.tags,
        isLoading: false,
      };
    }
    case TagActionType.GET_FAIL: {
      return {
        ...state,
        tags: [],
        isLoading: false,
      };
    }
  }
};

export default tagReducer;
