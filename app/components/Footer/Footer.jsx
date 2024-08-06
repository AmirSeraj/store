import React from 'react';
import { ImLinkedin } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { SiAparat } from "react-icons/si";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white p-4'>
            <div className='grid grid-cols-4 grid-rows-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center mt-6'>
                <div className='text-center'>
                    <h3 className="text-neutral-100 font-serif text-lg items-center">تماس با ما</h3>
                    <div className="flex flex-col mt-4">
                        <a className="text-gray-400 mb-4" href="tel:123456789">شماره تماس : 123-456-789</a>
                        <a className="text-gray-400 mb-4" href="fax:987654321">فکس : 987-654-321</a>
                        <a className="text-gray-400 mb-4" href="https://www.example.com/address">آدرس : Example Street, City</a>
                    </div>
                </div>
                <div className='text-center'>
                    <h3 className="text-neutral-100 font-serif text-lg items-center">راهنمای خرید</h3>
                    <div className="flex flex-col mt-4 text-center">
                        <a className="text-gray-400 mb-4" href="/faq">سوالات پرتکرار</a>
                        <a className="text-gray-400 mb-4" href="/return-policy">نحوه عودت کالا</a>
                        <a className="text-gray-400 mb-4" href="/terms">شرایط استفاده</a>
                        <a className="text-gray-400 mb-4" href="/privacy">حریم خصوصی</a>
                        <a className="text-gray-400 mb-4" href="/feedback">انتقادات و پیشنهادات</a>
                    </div>
                </div>
                <div className='text-center'>
                    <h3 className="text-neutral-100 font-serif text-lg items-center">خدمات مشتریان</h3>
                    <div className="flex flex-col mt-4">
                        <a className="text-gray-400 mb-4" href="/order-guide">نحوه ثبت سفارشات</a>
                        <a className="text-gray-400 mb-4" href="/shipping">رویه ارسال سفارشات</a>
                        <a className="text-gray-400 mb-4" href="/payment-methods">شیوه های پرداخت</a>
                    </div>
                </div>
                <div className='text-center items-center'>
                    <h3 className="text-neutral-100 font-serif text-lg ">همراه ما باشید</h3>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.linkedin.com" aria-label="LinkedIn">
                            <ImLinkedin className='w-5 h-5 text-gray-400 hover:text-white' />
                        </a>
                        <a href="https://www.twitter.com" aria-label="Twitter">
                            <FaTwitter className='w-5 h-5 text-gray-400 hover:text-white' />
                        </a>
                        <a href="https://www.instagram.com" aria-label="Instagram">
                            <CiInstagram className='w-5 h-5 text-gray-400 hover:text-white' />
                        </a>
                        <a href="https://www.aparat.com" aria-label="Aparat">
                            <SiAparat className='w-5 h-5 text-gray-400 hover:text-white' />
                        </a>
                    </div>
                    <div className="flex mt-20 gap-4 text-center">
                        <a href="https://www.example.com/kasbokar" aria-label="Kasbokar">
                            <Image className="object-contain" src='/kasbokar.png' width={70} height={50} alt="Kasbokar" />
                        </a>
                        <a href="https://www.example.com/rezi" aria-label="Rezi">
                            <Image className="object-contain" src='/rezi.png' width={70} height={50} alt="Rezi" />
                        </a>
                        <a href="https://www.example.com/81" aria-label="81">
                            <Image className="object-contain" src='/81.png' width={70} height={50} alt="81" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
