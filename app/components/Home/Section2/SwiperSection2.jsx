"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const data = [
    {
        img: '/product/img_23.png',
        price: 34568987,
        discount: 1358965,
        title: 'گوشی موبایل اپل مدل iPhone 12 ZA/A دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو',
        relatedImgs: [
            '/product/img_23.png',
            '/product/img_23.png',
            '/product/img_23.png',
        ]
    },
    {
        img: '/product/img_23.png',
        price: 34568987,
        discount: 1358965,
        title: 'گوشی موبایل اپل مدل iPhone 12 ZA/A دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو',
        relatedImgs: [
            '/product/img_23.png',
            '/product/img_23.png',
            '/product/img_23.png',
        ]
    },
    {
        img: '/product/img_23.png',
        price: 34568987,
        discount: 1358965,
        title: 'گوشی موبایل اپل مدل iPhone 12 ZA/A دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو',
        relatedImgs: [
            '/product/img_23.png',
            '/product/img_23.png',
            '/product/img_23.png',
        ]
    },
    {
        img: '/product/img_23.png',
        price: 34568987,
        discount: 1358965,
        title: 'گوشی موبایل اپل مدل iPhone 12 ZA/A دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو',
        relatedImgs: [
            '/product/img_23.png',
            '/product/img_23.png',
            '/product/img_23.png',
        ]
    },
    {
        img: '/product/img_23.png',
        price: 34568987,
        discount: 1358965,
        title: 'گوشی موبایل اپل مدل iPhone 12 ZA/A دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو',
        relatedImgs: [
            '/product/img_23.png',
            '/product/img_23.png',
            '/product/img_23.png',
        ]
    },
]

const SwiperSection2 = () => {
    return (
        <div className="flex flex-col h-[calc(100%-73px)] w-full overflow-hidden gap-2 items-center">
            <Swiper
                pagination={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={1500}
                loop={true}
                disableOnInteraction={true}
                modules={[Autoplay, Navigation]}
                className="h-full w-full"
                centeredSlides={true}
                navigation={{
                    nextEl: ".next",
                    prevEl: ".prev",
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide
                        className="w-full h-full !flex flex-col gap-4 py-4 px-2"
                        key={index}
                    >
                        <div className="w-full flex gap-2 items-center">
                            {
                                item.relatedImgs.map((image, index) => (
                                    <div key={index} className="w-20 h-20 rounded-full flex justify-center items-center bg-gray-400/50">
                                        <Image className="w-[50px] h-[50px]" src={image} width={50} height={50} alt={item.title} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1 items-center">
                                <p className="text-xl text-blue-500 font-bold">{Number(item.price).toLocaleString()}</p>
                                <p className="text-sm text-blue-500">تومان</p>
                            </div>
                            <div className="flex gap-1 items-center line-through">
                                <p className="text-base text-gray-500 font-bold">{Number(item.price).toLocaleString()}</p>
                                <p className="text-xs text-gray-500">تومان</p>
                            </div>
                        </div>
                        <h1 className="text-sm text-black">{item.title}</h1>
                        <div className="flex justify-center items-center max-h-[260px]">
                            <img src={item.img} alt={'img' + index} className="max-h-[250px]" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='mt-auto w-full h-[60px] flex justify-center py-3 items-center relative lg:right-3 right-0'>
                <div className='w-full h-[2px] bg-slate-400 absolute top-0 left-0' />
                <div className='bg-transparent w-full h-full flex justify-center items-center cursor-pointer next'>پیشنهاد بعدی</div>
                <div className='bg-slate-400 w-1 h-full' />
                <div className='bg-transparent w-full h-full flex justify-center items-center cursor-pointer prev'>پیشنهاد قبلی</div>
            </div>
        </div>

    )
}

export default SwiperSection2
