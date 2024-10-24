import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleLoginAction,
  handleLogoutAction,
} from "../redux/UserReducer/actions";
import { handleChangeThemeAction } from "@/redux/ThemeReducer/actions";
import { handleAddToCartAction } from "@/redux/Cart/actions";
import { useRouter } from "next/router";
import axios from "axios";

const Redux: React.FC = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();
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

  const handleGetProducts = async () => {
    try {
      const url = "https://api.escuelajs.co/api/v1/products";
      const response = await axios.get(url);
      const { data } = response;
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = ({ product }: { product: any }) => {
    dispatch(handleAddToCartAction(product));
    alert("Product added to cart!");
  };

  const handleRouteToCart = () => {
    router.push("/cart");
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <div className={` ${theme?.theme ? "" : "bg-black text-white"}`}>
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

      {/* Products */}
      <div className="mt-4 bg-gray-50 pt-5">
        <button
          className="text-[12px] border px-4 py-1 rounded-lg mt-2 flex justify-center items-center mx-auto"
          onClick={handleRouteToCart}
        >
          CART
        </button>
        <div className="grid grid-cols-4 gap-y-5 mt-4">
          {products?.map((item: any) => {
            return (
              <div key={item?.title}>
                <img
                  src={item?.images[0]}
                  alt={item?.name}
                  className="w-[200px]"
                />
                <h1>{item.title}</h1>
                <p>${item.price}</p>
                <button
                  className="text-[12px] border w-fit !mx-auto px-4 py-1 rounded-lg mt-2"
                  onClick={() => handleAddToCart({ product: item })}
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Redux;
