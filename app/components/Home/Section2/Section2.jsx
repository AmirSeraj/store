import React from "react";
import RightSection from "./RightSection";
import SwiperSection2 from "./SwiperSection2";
import { getCards } from "@/app/apis/Home/getSection2Cards";
import { getSliderInfo } from "@/app/apis/Home/getSection2SliderInfo";
import SkeletonRight from "./SkeletonRight";
import SkeletonLeft from "./SkeletonLeft";

const Section2 = async () => {
  const cardsI = await getCards();
  const sliderInfo = await getSliderInfo();
  const cards = [
    {
      img: "/product/img1.webp",
      title: "گوشی سامسونگ مدل Arbitaj",
      price: 1894687,
      discount: 40000,
    },
    {
      img: "/product/img1.webp",
      title: "گوشی سامسونگ مدل Arbitaj",
      price: 1894687,
      discount: 40000,
    },
    {
      img: "/product/img1.webp",
      title: "گوشی سامسونگ مدل Arbitaj",
      price: 1894687,
      discount: 40000,
    },
    {
      img: "/product/img1.webp",
      title: "گوشی سامسونگ مدل Arbitaj",
      price: 1894687,
      discount: 40000,
    },
    {
      img: "/product/img1.webp",
      title: "گوشی سامسونگ مدل Arbitaj",
      price: 1894687,
      discount: 40000,
    },
    {
      img: "/product/img1.webp",
      title: "گوشی سامسونگ مدل Arbitaj",
      price: 1894687,
      discount: 40000,
    },
  ];

  const data = [
    {
      img: "/product/img_23.png",
      price: 34568987,
      discount: 1358965,
      title:
        "گوشی موبایل اپل مدل iPhone 12 ZA/A دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو",
      relatedImgs: [
        "/product/img_23.png",
        "/product/img_23.png",
        "/product/img_23.png",
      ],
    },
    {
      img: "/product/img_23.png",
      price: 34568987,
      discount: 1358965,
      title:
        "گوشی موبایل اپل مدل iPhone 12 ZA/A دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو",
      relatedImgs: [
        "/product/img_23.png",
        "/product/img_23.png",
        "/product/img_23.png",
      ],
    },
    {
      img: "/product/img_23.png",
      price: 34568987,
      discount: 1358965,
      title:
        "گوشی موبایل اپل مدل iPhone 12 ZA/A دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو",
      relatedImgs: [
        "/product/img_23.png",
        "/product/img_23.png",
        "/product/img_23.png",
      ],
    },
    {
      img: "/product/img_23.png",
      price: 34568987,
      discount: 1358965,
      title:
        "گوشی موبایل اپل مدل iPhone 12 ZA/A دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو",
      relatedImgs: [
        "/product/img_23.png",
        "/product/img_23.png",
        "/product/img_23.png",
      ],
    },
    {
      img: "/product/img_23.png",
      price: 34568987,
      discount: 1358965,
      title:
        "گوشی موبایل اپل مدل iPhone 12 ZA/A دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو",
      relatedImgs: [
        "/product/img_23.png",
        "/product/img_23.png",
        "/product/img_23.png",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-12 w-full bg-white gap-2 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%] overflow-hidden place-items-center">
      <div className="grid lg:col-span-8 col-span-12 pl-5 py-4 lg:order-1 order-2">
        {/* <SkeletonRight /> */}
        <RightSection cards={cards} />
      </div>
      <div className="grid lg:col-span-4 col-span-12 lg:-skew-x-3 border-r-2 border-slate-400 lg:order-2 order-1 relative h-[70vh]">
        <div className="w-full absolute h-[73px] top-0 left-0 bg-black" />
        <div className="lg:skew-x-3 bg-transparent w-full h-full flex flex-col border-l-2 border-slate-400 overflow-hidden">
          <div className="w-full bg-black h-[73px] flex justify-start items-center pr-3 z-50">
            <h2 class="title_text text-white">
              <strong>پیشنهادات</strong> هفته
            </h2>
          </div>
          {/* <SkeletonLeft /> */}
          <SwiperSection2 data={data} />
          <div className="mt-auto bg-slate-400 lg:w-[96%] w-full h-[2px] absolute left-0 bottom-0" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
