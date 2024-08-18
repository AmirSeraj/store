import { Button } from "@nextui-org/button";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Menu from "./Menu";
import { HiLogin } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderBottom = () => {
    return (
        <div className='flex items-center justify-between py-3 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%]'>
            <div className="sm:hidden block cursor-pointer">
                <AiOutlineMenu size={24} />
            </div>
            <div className='sm:flex hidden items-center gap-2.5'>
                <div className='flex items-center'>
                    <div className="rounded-full bg-foreground text-background">
                        <svg fill="none" height={24} viewBox="0 0 32 32" width={24}>
                            <path
                                clipRule="evenodd"
                                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                                fill="currentColor"
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>
                    <span className="mr-2 text-small font-medium">تن تک</span>
                </div>
                <div className="w-[330px] p-2 rounded-full shadow-xl drop-shadow-lg bg-gray-300 lg:flex hidden items-center">
                    <IoSearchOutline color="#c0c0c0" size={28} />
                    <input
                        className="w-full h-full pr-5 bg-transparent outline-none text-[0.8rem] text-black"
                        placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"
                    />
                </div>
            </div>
            <Menu />
            <div className="flex items-center gap-1">
                <Button color="warning" radius="full" className="text-xs xl:block hidden">
                    <Link href="https://t.me/TenTechStore" className="text-xs" dir="ltr">
                        پشتیبانی
                    </Link>
                </Button>
                <Link href={'/login'} className="text-xs xl:hidden block">
                    <HiLogin size={32} />
                </Link>
                <Button radius="full" variant='light' className="text-xs xl:block hidden">
                    ورود به حساب کاربری
                </Button>
                <Button color="primary" radius="full" className="text-xs flex items-center justify-center gap-1">
                    <MdOutlineAddShoppingCart size={16} />
                    سبد خرید
                </Button>
            </div>
        </div>
    )
}

export default HeaderBottom
