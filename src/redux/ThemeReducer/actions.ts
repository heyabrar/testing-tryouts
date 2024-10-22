import { CHANGE_THEME } from "./actionsTypes";

export const handleChangeThemeAction = (payload: boolean) => ({
  type: CHANGE_THEME,
  payload: payload,
});
