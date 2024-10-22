import { LOGIN, LOGOUT } from "./actionType";

export const handleLoginAction = (userInfo: any) => ({
  type: LOGIN,
  payload: userInfo,
});

export const handleLogoutAction = () => ({
  type: LOGOUT,
});
