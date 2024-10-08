"use client";
import { Button } from "@nextui-org/button";
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
  const [showDiv, setShowDiv] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hidePoint = 850; // The scroll position to hide the div
      if (scrollPosition >= hidePoint) {
        setShowDiv(false);
      } else {
        setShowDiv(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* {showDiv && ( */}
        <div className={`bg-white w-full h-[130px] sticky top-[135px] left-0 border-b border-slate-300 z-50 shadow-xl 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%] flex md:flex-row flex-col items-center justify-between`}>
          <div className="flex md:flex-row flex-col items-center lg:gap-4 gap-2 h-full md:w-1/2 w-full">
            {/* <div className="items-center justify-center flex bg-blue-700 hover:bg-blue-500 py-2 rounded-full cursor-pointer mt-2 md:w-[300px] w-full">
              اضافه شدن به سبد خرید
            </div> */}
            <Button color="primary" variant="shadow" size="lg" className="w-[400px] lg:mt-0 mt-2">
              اضافه شدن به سبد خرید
            </Button>
            <PriceFunc className={"md:flex hidden"} />
            <div className="md:hidden flex justify-between w-full items-center">
              <PriceFunc />
              <IphoneFunc />
            </div>
          </div>
          <IphoneFunc className={"md:flex hidden"} />
        </div>
      {/* )} */}
    </>
  );
};

export default MovingShoppingCart;
