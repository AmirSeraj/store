import { AiOutlineMenu } from "react-icons/ai";
import SwiperComp from "./SwiperComp";
import Image from "next/image";

const Section1 = () => {
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
    <div className="grid grid-cols-12 gap-3 w-full h-[500px] bg-white 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%]">
      <div className="flex flex-col col-span-3 gap-2 w-full h-full bg-white">
        <div className="flex gap-3 items-center bg-[#0063d1] py-4 px-3">
          <AiOutlineMenu size={24} />
          <span>داشبورد</span>
        </div>
        <ul className="flex flex-col gap-1 px-1">
          {data.map((item, i) => (
            <li
              className="px-3 py-1.5 border-b border-slate-200 text-xs"
              key={i}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <SwiperComp section1Swiper={section1Swiper} />
    </div>
  );
};

export default Section1;
