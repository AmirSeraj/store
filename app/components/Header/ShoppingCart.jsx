"use client";
import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const ShoppingCart = () => {
  const [basket, setBasket] = useState(false);
  return (
    <Link
      onMouseEnter={() => setBasket(true)}
      onMouseLeave={() => setBasket(false)}
      className={`h-9 w-9 border relative border-slate-300 rounded-md flex justify-center items-center cursor-pointer`}
      href={'/cart'}
    >
      <span className="absolute -top-2 -right-2 border rounded-full text-black bg-blue-500 w-5 h-5 text-[0.7rem] flex justify-center items-center">3</span>
      <FiShoppingCart />
      <span
        className={`absolute -bottom-9 text-[0.68rem] w-24 border flex justify-center items-center rounded-lg p-1 z-50 ${!basket && "hidden"
          }`}
      >
        سبد خرید (3){" "}
      </span>
    </Link>
  );
};

export default ShoppingCart;
