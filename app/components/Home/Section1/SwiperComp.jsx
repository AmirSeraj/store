"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const SwiperComp = ({ section1Swiper }) => {
  return (
    // <div className="col-span-7 h-full">
    <Swiper
      pagination={true}
      // effect={'fade'}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, EffectFade]}
      className="h-full bg-[url('/bgg.jpg')] bg-no-repeat w-full bg-cover"
    >
      {section1Swiper.map((item, index) => (
        <SwiperSlide
          className="w-full h-full !grid grid-cols-2 gap-4 place-content-center p-4"
          key={index}
        >
          <div className="h-full flex justify-center items-center">
            <Image
              src={item.img}
              width={381}
              height={341}
              objectFit="contain"
              alt={'img' + index}
            />
          </div>
          <div className="flex flex-col justify-center items-center h-full gap-5">
            <h1 className="font-bold text-black text-xl">{item.title}</h1>
            <p className="text-black text-sm">{item.desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    // </div>
  );
};

export default SwiperComp;
