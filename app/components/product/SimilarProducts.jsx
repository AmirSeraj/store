"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";

const SimilarProducts = ({features, title}) => {
  return (
    <div className="flex flex-col gap-3 w-full p-2 xl:px-[15%] lg:px-[10%] sm:px-[8%] px-[3%]">
      <h1 className="text-black text-xl pr-4">{title}</h1>
      <Swiper
        // slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1200}
        modules={[Autoplay]}
        spaceBetween={10}
        className="w-full !pt-1 !py-3 gap-2 flex items-center"
        grabCursor={true}
        // centeredSlides={true}
        // slidesPerView={'auto'}
      >
        {features.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-[270px] h-[90%] flex flex-col items-center gap-2 px-3 py-2 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl shadow-gray-500  group overflow-hidden "
          >
            <div className="w-full flex flex-col items-center">
              <Image
                src={item.img}
                objectPosition="center"
                objectFit="contain"
                width={250}
                height={240}
              />
              <div className="w-full p-1 flex justify-center gap-1 mt-1">
                {item?.colors.map((color, i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full block"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <p className="flex flex-wrap text-xs font-bold pr-2 pt-2">
                {item.title}
            </p>
            <p className="flex-wrap text-xs pr-3 pt-2 h-[40px] overflow-hidden">{item.desc}{' .....'}</p>

            <div className="flex justify-between items-center py-2 px-3">
                <div className="flex items-center gap-1">
                    <p className="font-bold text-xl">
                        {Number(item.price).toLocaleString()}
                    </p>
                    <p className="text-lg">تومان</p>
                </div>
                <div className="flex gap-1 justify-center items-center">
                    <span className="text-black text-xs mt-1">4.5</span>
                    <MdStarRate size={18} color="#c9c91d" />
                </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarProducts;
