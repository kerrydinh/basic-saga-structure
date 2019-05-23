import { CALLBACK_ACTION_TYPE } from "./action";

const initialState = {
  isAuthenticated: false,
  authToken: {
      profile: {}
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CALLBACK_ACTION_TYPE.SET_AUTH_USER: {
        return {
            ...state,
            authToken: action.authToken,
            isAuthenticated: true
        };
    }

    case CALLBACK_ACTION_TYPE.REMOVE_AUTH_USER: {
      return initialState;
    }

    default:
      return state;
  }
}