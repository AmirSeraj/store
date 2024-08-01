"use client";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const ShoppingCart = () => {
  const [basket, setBasket] = useState(false);
  return (
    <div
      onMouseEnter={() => setBasket(true)}
      onMouseLeave={() => setBasket(false)}
      className={`h-9 w-9 border relative border-slate-300 rounded-md flex justify-center items-center cursor-pointer`}
    >
      <FiShoppingCart />
      <span
        className={`absolute -bottom-9 text-[0.68rem] w-24 border flex justify-center items-center rounded-lg p-1 z-50 ${
          !basket && "hidden"
        }`}
      >
        سبد خرید (خالی){" "}
      </span>
    </div>
  );
};

export default ShoppingCart;
