'use client'
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Menu from "./Menu";
import { HiLogin } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import ArmComp from "./ArmComp";
import SearchComp from "./SearchComp";
import MenuMobile from "./MenuMobile";
import CustomBtn from "./CustomBtn";

const HeaderBottom = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <div className='flex items-center justify-between py-3 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%]'>
            <div onClick={() => setOpenSidebar(true)} className="sm:hidden block cursor-pointer">
                <AiOutlineMenu size={24} />
            </div>

            <div className={`fixed w-[300px] min-h-screen top-0 right-0 bg-gray-100/95 sm:p-8 p-4 flex flex-col gap-3 ${!openSidebar && 'hidden'}`}>
                <div className="flex items-center justify-between mb-5">
                    <div className="cursor-pointer" onClick={() => setOpenSidebar(false)}>
                        <IoClose size={20} />
                    </div>
                    <ArmComp size={28} className={'text-xl'} />
                </div>
                <SearchComp className={'w-[250px] flex items-center'} size={20} className2={'pr-2'} />
                <MenuMobile />
                <div className="mt-auto p-4 flex flex-col gap-3">
                    <CustomBtn color={'warning'} title={'پشتیبانی'} href={'https://t.me/TenTechStore'} className={'text-xs w-full'} />
                    <CustomBtn title={'ورود به حساب کاربری'} variant={'light'} className={'text-xs text-black'} href={'/login'} />
                </div>
            </div>

            <div className='sm:flex hidden items-center gap-2.5'>
                <ArmComp size={24} />
                <SearchComp className={'w-[330px] lg:flex hidden items-center'} size={28} className2={'pr-5'} />
                {/* <div className="w-[330px] p-2 rounded-full shadow-xl drop-shadow-lg bg-gray-300 lg:flex hidden items-center">
                    <IoSearchOutline color="#c0c0c0" size={28} />
                    <input
                        className="w-full h-full pr-5 bg-transparent outline-none text-[0.8rem] text-black"
                        placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"
                    />
                </div> */}
            </div>
            <Menu />
            <div className="flex items-center gap-1">
                <CustomBtn color={'warning'} title={'پشتیبانی'} href={'https://t.me/TenTechStore'} className={'text-xs xl:block hidden'} />
                {/* <Button color="warning" radius="full" className="text-xs xl:block hidden">
                    <Link href="https://t.me/TenTechStore" className="text-xs" dir="ltr">
                        پشتیبانی
                    </Link>
                </Button> */}
                <Link href={'/login'} className="text-xs xl:hidden block">
                    <HiLogin size={32} />
                </Link>
                <CustomBtn title={'ورود به حساب کاربری'} variant={'light'} className={'text-xs text-black xl:block hidden'} href={'/login'} />
                {/* <Button radius="full" variant='light' className="text-xs xl:block hidden">
                    ورود به حساب کاربری
                </Button> */}
                <Button color="primary" radius="full" className="text-xs flex items-center justify-center gap-1">
                    <MdOutlineAddShoppingCart size={16} />
                    سبد خرید
                </Button>
            </div>
        </div>
    )
}

export default HeaderBottom
