import { HOME_ACTION_TYPE } from "./action";

const initialState = {
  exampleData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case HOME_ACTION_TYPE.LOAD_DATA: {
      return {
        ...state
      };
    }

    case HOME_ACTION_TYPE.LOAD_DATA_SUCCESSFULLY: {
      return {
        ...state,
        exampleData: action.data
      };
    }

    default:
      return state;
  }
}
