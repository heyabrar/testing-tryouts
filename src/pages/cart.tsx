import React from "react";
import { handleRemoveFromCartAction } from "@/redux/Cart/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartData = useSelector((state: any) => state.cart?.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = ({ id }: any) => {
    dispatch(handleRemoveFromCartAction({ id }));
  };

  return (
    <div>
      {cartData?.length === 0 ? (
        <h1 className="text-center mt-5">Your cart is empty</h1>
      ) : (
        <div className="grid grid-cols-4 gap-y-5 mt-4">
          {cartData?.map((item: any) => {
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
                  onClick={() => handleRemoveFromCart({ id: item?.id })}
                >
                  Remove from cart
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CartPage;
