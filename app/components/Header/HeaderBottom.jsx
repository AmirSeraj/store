'use client'
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Menu from "./Menu";
import { HiLogin } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { useState, useRef, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import ArmComp from "./ArmComp";
import SearchComp from "./SearchComp";
import MenuMobile from "./MenuMobile";
import CustomBtn from "./CustomBtn";
import { FaTelegramPlane } from "react-icons/fa";

const HeaderBottom = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [expandSearch, setExpandSearch] = useState(false);
    const searchRef = useRef(null);

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setExpandSearch(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='flex items-center justify-between py-3 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%]'>

            <div className="items-center gap-1 sm:hidden flex">
                <div onClick={() => setOpenSidebar(true)} className="cursor-pointer">
                    <AiOutlineMenu size={24} />
                </div>
                <div ref={searchRef}>
                    <SearchComp className={`${expandSearch ? 'w-[250px]' : 'w-[100px]'} flex items-center !px-2 h-[38px]`} size={25} className2={'pr-1 !text-[0.7rem]'} handleClick={() => setExpandSearch(!expandSearch)} />
                </div>
            </div>

            {/* mobile view sidebar */}
            <div className={`fixed w-[300px] h-[100dvh] top-0 right-0 bg-gray-100/95 sm:p-8 p-4 flex flex-col gap-3 z-50 ${!openSidebar && 'hidden'}`}>
                <div className="flex items-center justify-start gap-3 mb-5">
                    <div className="cursor-pointer" onClick={() => setOpenSidebar(false)}>
                        <IoClose size={20} />
                    </div>
                    <ArmComp size={28} className={'text-xl'} />
                </div>
                <MenuMobile />
                <div className="mt-auto p-4 flex flex-col gap-3">
                    <CustomBtn color={'warning'} title={'پشتیبانی'} href={'https://t.me/TenTechStore'} className={'text-xs w-full'} icon={<FaTelegramPlane color="#4242ff" size={18} />} />
                    <CustomBtn title={'ورود به حساب کاربری'} variant={'light'} className={'text-xs text-black'} href={'/signin'} />
                </div>
            </div>
            {/* mobile view sidebar */}

            <div className='sm:flex hidden items-center gap-2.5'>
                <ArmComp size={24} />
                <SearchComp className={'w-[300px] lg:flex hidden items-center shadow-xl drop-shadow-lg'} size={28} className2={'pr-5'} />
            </div>
            <Menu />
            <div className="flex items-center gap-1">
                <CustomBtn color={'warning'} variant={'shadow'} title={'پشتیبانی'} href={'https://t.me/TenTechStore'} icon={<FaTelegramPlane color="#4242ff" size={18} />} className={'text-xs xl:block hidden'} />
                <CustomBtn color={'primary'} variant={'shadow'} title={'ورود'} href={'/signin'} className={`xl:hidden ${expandSearch && 'hidden'}`} icon={<HiLogin size={20} />} />
                <CustomBtn title={'ورود به حساب کاربری'} variant={'light'} className={'text-xs text-black xl:block hidden'} href={'/signin'} />
                <CustomBtn title={'سبد خرید'} variant={'shadow'} color={'primary'} className={`text-xs text-white ${expandSearch && 'hidden'}`} href={'/'} icon={<MdOutlineAddShoppingCart size={16} />} />
            </div>
        </div>
    )
}

export default HeaderBottom
