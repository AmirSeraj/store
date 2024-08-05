"use client";
import { Toman } from "../Icons";
import { FiCheck } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";

const ProductDescription = ({ product }) => {
  const Card = ({ title, active, price, handleClick }) => {
    return (
      <button
        onClick={handleClick}
        className={`flex flex-col px-3 py-4 justify-center items-center gap-2 bg-slate-200 rounded-lg shadow-lg cursor-pointer w-[130px] ${
          active && "bg-blue-400 border-2 border-blue-700"
        }`}
      >
        <p className={`${active && "text-blue-700"} text-[0.8rem]`} dir="ltr">
          {title}
        </p>
        {active ? (
          <FiCheck color="blue" />
        ) : (
          <p className="text-xs">{price} تومان</p>
        )}
      </button>
    );
  };
  return (
    <div className="lg:col-span-6 col-span-12 flex flex-col md:p-4 p-2">
      <h1 className="text-black md:text-2xl sm:text-lg text-sm font-bold">
        {product.title}
      </h1>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-1 items-center justify-center">
            <p className="text-black font-bold md:text-xl text-lg">
              {(
                Number(product.price) -
                (Number(product.price) * Number(product.discount)) / 100
              ).toLocaleString()}
            </p>
            <p className="text-gray-500 font-bold md:text-sm text-[0.8rem] line-through">
              {Number(product.price).toLocaleString()}
            </p>
          </div>
          <Toman />
        </div>

        <div className="flex flex-col gap-1 max-w-lg">
          <button className="flex flex-col border border-slate-500 px-3 py-1.5 gap-2 rounded-lg">
            <div className="w-full flex justify-between items-center">
              <p>آیفون 13</p>
              <p className="text-sm">
                از &nbsp;
                {Number(product.price).toLocaleString()}
              </p>
            </div>
            <p className="text-sm text-slate-600">تک محصوله</p>
          </button>
          <button className="flex flex-col border border-slate-500 px-3 py-1.5 gap-2 rounded-lg">
            <div className="w-full flex justify-between items-center">
              <p>آیفون 13</p>
              <p className="text-sm">
                از &nbsp;
                {Number(product.price).toLocaleString()}
              </p>
            </div>
            <p className="text-sm text-slate-600">بهمراه هدفون و وسایل جانبی</p>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <p>باطری</p>
          <div className="flex gap-2 items-center">
            <Card
              title={"استاندارد و جدید"}
              active={true}
              price={Number(640000).toLocaleString()}
            />
            <Card
              title={"کار کرده"}
              active={false}
              price={Number(320000).toLocaleString()}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p>ظرفیت</p>
          <div className="flex gap-2 items-center">
            <Card
              title={"64 GB"}
              active={true}
              price={Number(120000).toLocaleString()}
            />
            <Card
              title={"128 GB"}
              active={false}
              price={Number(320000).toLocaleString()}
            />
            <Card
              title={"256 GB"}
              active={false}
              price={Number(680000).toLocaleString()}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>رنگ: آبی</p>
          <div className="flex gap-2 items-center">
            {product.colors.map((color, index) => (
              <div key={index} className="flex flex-col gap-2">
                <span
                  className={
                    "w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                  }
                  style={{ backgroundColor: color.color }}
                ></span>
                <span className="text-[0.5rem] text-center">
                  {Number(10000).toLocaleString()}+
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-lg h-[1px] bg-slate-300" />

        <div className="flex flex-col gap-1 sm:p-4 p-2.5 max-w-2xl">
          <p className="text-blue-500 text-xs">{product.leftInStock}</p>
          <div className="flex items-center justify-between max-w-2xl">
            <div className="flex flex-col gap-1 justify-center">
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
            <div className="flex items-center gap-2">
              <span className="text-slate-800 text-sm">Fair</span>
              <span className="w-[1px] h-5 bg-slate-800" />
              <span className="text-slate-800 text-sm">128 GB</span>
              <span className="w-[1px] h-5 bg-slate-800" />
              <span className="text-slate-800 text-sm">Blue</span>
            </div>
          </div>
          <div className="w-full items-center justify-center flex bg-blue-700 hover:bg-blue-500 py-2 rounded-full cursor-pointer mt-2">تکمیل خرید</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
