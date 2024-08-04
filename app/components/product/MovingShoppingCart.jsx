"use client";
import React, { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

const MovingShoppingCart = ({ product }) => {
  function PriceFunc({ className }) {
    return (
      <div className={`flex flex-col gap-1 justify-center ${className}`}>
        <div className="flex gap-1 items-center">
          <BsInfoCircle color="#888" size={12} />
          <p className="text-xs text-[#777] line-through">
            {Number(product.price).toLocaleString()} تومان
          </p>
        </div>
        <p className="text-md text-blue-600">
          {Number(product.price).toLocaleString()} تومان
        </p>
      </div>
    );
  }
  function IphoneFunc({ className }) {
    return (
      <div
        className={`w-[180px] h-full flex flex-col gap-1 items-center justify-center ${className}`}
      >
        <h1 className="text-black font-bold text-xl text-end mb-1">
          iPhone 14
        </h1>
        <div className="flex items-center justify-end gap-2">
          <span className="text-slate-800 text-sm">Fair</span>
          <span className="w-[1px] h-5 bg-slate-800" />
          <span className="text-slate-800 text-sm">128 GB</span>
          <span className="w-[1px] h-5 bg-slate-800" />
          <span className="text-slate-800 text-sm">Blue</span>
        </div>
      </div>
    );
  }
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const showPoint = 100; // The scroll position to show the div
      const hidePoint = 850; // The scroll position to hide the div

      if (scrollPosition >= showPoint && scrollPosition < hidePoint) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showDiv && (
        <div className="fixed lg:top-[95px] top-[143px] bg-white w-full h-[130px] border-b border-slate-300 z-50 shadow-xl xl:px-[15%] lg:px-[10%] sm:px-[8%] px-[3%] flex md:flex-row flex-col items-center justify-between">
          <div className="flex md:flex-row flex-col items-center justify-center sm:gap-4 gap-2 h-full md:w-1/2 w-full">
            <div className="items-center justify-center flex bg-blue-700 hover:bg-blue-500 py-2 rounded-full cursor-pointer mt-2 md:w-[300px] w-full">
              تکمیل خرید
            </div>
            <PriceFunc className={"md:flex hidden"} />
            <div className="md:hidden flex justify-between w-full items-center">
              <PriceFunc />
              <IphoneFunc />
            </div>
          </div>
          <IphoneFunc className={"md:flex hidden"} />
        </div>
      )}
    </>
  );
};

export default MovingShoppingCart;
