"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import CardComp from "../CardComp";

const SimilarProducts = ({ features, title, nextClass, prevClass }) => {
  return (
    <div className="flex relative flex-col gap-3 w-full p-2 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%]">
      <h1 className="text-black text-xl pr-4">{title}</h1>
      <div className="flex items-center gap-2 pr-4">
        <div
          className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full bg-black ${nextClass}`}
        >
          <IoIosArrowForward size={20} color="#fff" />
        </div>
        <div
          className={`prev flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full bg-black ${prevClass}`}
        >
          <IoIosArrowBack size={20} color="#fff" />
        </div>
      </div>
      {/* <div className="next absolute top-0 bottom-0 m-auto bg-gray-300 -right-0 cursor-pointer z-[5000] w-8 h-8 border rounded-full flex justify-center items-center">
        <GrFormNext size={24} color="blue" />
      </div> */}
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
        navigation={{
          nextEl: `.${nextClass}`,
          prevEl: `.${prevClass}`,
        }}
        speed={1200}
        modules={[Autoplay, Navigation]}
        spaceBetween={10}
        className="w-full !pt-1 !py-3 gap-2 flex items-center relative"
        grabCursor={true}
        centeredSlides={false}
        // slidesPerView={'auto'}
      >
        {features.map((item, index) => (
          <SwiperSlide>
            <CardComp
              img={item.img}
              colors={item?.colors}
              title={item?.title}
              desc={item.desc}
              price={Number(item.price).toLocaleString()}
              rate={item.rate}
              key={index}
            />
          </SwiperSlide>
          // <SwiperSlide
          //   key={index}
          //   className="w-[270px] h-[90%] flex flex-col items-center gap-2 px-3 py-2 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl shadow-gray-500  group overflow-hidden"
          // >
          //   <div className="w-full flex flex-col items-center">
          //     <Image
          //       src={item.img}
          //       objectPosition="center"
          //       objectFit="contain"
          //       width={250}
          //       height={240}
          //     />
          //     <div className="w-full p-1 flex justify-center gap-1 mt-1">
          //       {item?.colors.map((color, i) => (
          //         <span
          //           key={i}
          //           className="w-4 h-4 rounded-full block"
          //           style={{ backgroundColor: color }}
          //         />
          //       ))}
          //     </div>
          //   </div>
          //   <p className="flex flex-wrap text-xs font-bold pr-2 pt-2">
          //     {item.title}
          //   </p>
          //   <p className="flex-wrap text-xs pr-3 pt-2 h-[40px] overflow-hidden">
          //     {item.desc}
          //     {" ....."}
          //   </p>

          //   <div className="flex justify-between items-center py-2 px-3">
          //     <div className="flex items-center gap-1">
          //       <p className="font-bold text-xl">
          //         {Number(item.price).toLocaleString()}
          //       </p>
          //       <p className="text-lg">تومان</p>
          //     </div>
          //     <div className="flex gap-1 justify-center items-center">
          //       <span className="text-black text-xs mt-1">4.5</span>
          //       <MdStarRate size={18} color="#c9c91d" />
          //     </div>
          //   </div>
          // </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarProducts;
