import { LOGIN, LOGOUT } from "./actionType";

const initialUserState = {
  isLoggedIn: false,
  userInfo: null,
};

const useReducer = (state = initialUserState, action: any): any => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.payload,
      };
    }

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userInfo: null,
      };

    default:
      return state;
  }
};

export default useReducer;
