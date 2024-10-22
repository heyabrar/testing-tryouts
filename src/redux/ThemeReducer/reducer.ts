import { CHANGE_THEME } from "./actionsTypes";

const initialThemeState = {
  theme: true,
};

const useThemeReducer = (state = initialThemeState, action: any): any => {
  switch (action.type) {
    case CHANGE_THEME: {
      return {
        ...state,
        theme: !state?.theme,
      };
    }
    default:
      return state;
  }
};

export default useThemeReducer;
