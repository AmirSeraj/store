import Image from "next/image";
import { HiLogin } from "react-icons/hi";
import { IoMenuOutline, IoSearchOutline } from "react-icons/io5";
import ShoppingCart from "./ShoppingCart";

const HeaderMobileView = () => {
  return (
    <header className="w-full bg-white py-5 px-3 flex flex-col gap-3 lg:hidden">
      <div className="flex justify-between items-center">
        <IoMenuOutline size={28} />
        <div className="flex justify-center items-center gap-2">
          <Image width={35} height={35} src={"/brand.svg"} />
          <p className="text-black text-lg">تکنولایف</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <ShoppingCart />
          <HiLogin size={28} />
        </div>
      </div>
        <div className="w-full h-[55px] py-2 px-10 rounded-lg shadow-xl drop-shadow-lg bg-gray-300 flex items-center">
          <IoSearchOutline color="#c0c0c0" size={28} />
          <input
            className="w-full h-full pr-5 bg-transparent outline-none text-sm text-[#c0c0c0]"
            placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"
          />
        </div>
      {/* </div> */}
    </header>
  );
};

export default HeaderMobileView;
