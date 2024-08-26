import { getSlider } from "@/app/apis/Home/getSectionOne";
import SwiperComp from "./SwiperComp";
import { Suspense } from "react";
import Skeleton from "./Skeleton";

const Section1 = async () => {
  const slider = await getSlider();
  const data = [
    "10 پیشنهاد اول",
    "پیشنهادات اول",
    "کامپیوتر & لپتاب",
    "TV & Audio",
    "گدجت",
  ];

  const section1Swiper = [
    {
      title: "محصولی که مدت ها اننتظارش را می کشیدید",
      desc: "یک توصیف کوتاه از این محصول. یک توصیف کوتاه از این محصول.",
      img: "/product/slider.png",
    },
    {
      title: "محصولی که مدت ها اننتظارش را می کشیدید",
      desc: "یک توصیف کوتاه از این محصول. یک توصیف کوتاه از این محصول. یک توصیف کوتاه از این محصول.",
      img: "/product/img2.avif",
    },
    {
      title: "محصولی که مدت ها اننتظارش را می کشیدید",
      desc: "یک توصیف کوتاه از این محصول. یک توصیف کوتاه از این محصول. یک توصیف کوتاه از این محصول. یک توصیف کوتاه از این محصول.",
      img: "/product/img5.avif",
    },
  ];

  return (
    <div className="w-full h-[500px] bg-white 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%]">
      <Suspense fallback={<Skeleton />}>
        <SwiperComp section1Swiper={section1Swiper} />
      </Suspense>
      {/* <Skeleton /> */}
    </div>
  );
};

export default Section1;
