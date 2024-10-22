// src/components/Home.tsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleLoginAction,
  handleLogoutAction,
} from "../redux/UserReducer/actions";
import { handleChangeThemeAction } from "@/redux/ThemeReducer/actions";

const Redux: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const theme = useSelector((state: any) => state.theme);

  const handleLogin = () => {
    const userInfo = {
      name: "John Doe",
      email: "johndoe@example.com",
    };
    dispatch(handleLoginAction(userInfo));
  };

  const handleLogout = () => {
    dispatch(handleLogoutAction());
  };

  const handleChangeTheme = () => {
    dispatch(handleChangeThemeAction(false));
  };

  return (
    <div
      className={`flex justify-center items-center mx-auto h-screen ${
        theme?.theme ? "" : "bg-black text-white"
      }`}
    >
      <div>
        <h1>Redux Persist Example</h1>
        {user.isLoggedIn ? (
          <div>
            <p>Welcome, {user.userInfo?.name}!</p>
            <p>Email: {user.userInfo?.email}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <p>You are not logged in.</p>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}

        <button
          className="border text-[12px] px-4 py-1 rounded-lg mt-3"
          onClick={handleChangeTheme}
        >
          {theme?.theme ? "Change Theme To Dark" : "Change Theme To Light"}
        </button>
      </div>
    </div>
  );
};

export default Redux;
