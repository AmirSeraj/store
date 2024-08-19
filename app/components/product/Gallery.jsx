"use client";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Gallery = ({ productImages }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation={{
      //   nextEl: ".next",
      //   prevEl: ".prev",
      // }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => setSwiperInstance(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-full h-[600px] relative"
    >
      {productImages.map((img, index) => (
        <SwiperSlide
          key={index}
          className="w-full !flex justify-center items-center"
        >
          <Image alt={'img' + index} src={img} width={550} height={550} />
        </SwiperSlide>
      ))}
      <div>
        <button
          onClick={() => swiperInstance && swiperInstance.slidePrev()}
          className="absolute top-0 right-0 cursor-pointer z-50 border rounded-full p-1 shadow-lg drop-shadow-xl bg-[#eee]"
        >
          <FiArrowRight />
        </button>
        <button
          onClick={() => swiperInstance && swiperInstance.slideNext()}
          className="absolute top-0 right-10 cursor-pointer z-50 border rounded-full p-1 shadow-lg drop-shadow-xl bg-[#eee]"
        >
          <FiArrowLeft />
        </button>
      </div>
    </Swiper>
  );
};

export default Gallery;
