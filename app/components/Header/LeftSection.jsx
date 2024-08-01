import Link from "next/link";
import ShoppingCart from "./ShoppingCart";

const LeftSection = () => {  
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="rounded-md border border-slate-500 shadow-lg px-1 py-1.5 flex items-center justify-center w-[160px] h-9">
        <div className="w-[40%] h-full flex justify-center items-center">
          <Link href={"/login"}>ورود</Link>
        </div>
        <div className="w-[1px] h-full bg-gray-600" />
        <div className="h-full flex justify-center items-center w-[60%]">
          <Link href={"/signup"}>ثبتنام</Link>
        </div>
      </div>
      <ShoppingCart />
    </div>
  );
};

export default LeftSection;
