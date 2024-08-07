import CardComp from "@/app/components/CardComp";
import Model from "@/app/components/search/Model";
import PriceRange from "@/app/components/search/PriceRange";
import Storage from "@/app/components/search/Storage";
import { Pagination } from "@nextui-org/pagination";
import { IoFilterSharp } from "react-icons/io5";

const Search = ({ params }) => {
  const { searchParam } = params;
  const similarProducts = [
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone1.avif",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone2.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone3.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone4.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone5.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone2.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone3.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone4.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone2.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone5.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone4.webp",
      colors: ["red", "blue", "gray"],
    },
  ];
  return (
    <div className="2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%] grid grid-cols-12 pt-3 pb-6">
      <div className="lg:col-span-2 order-1 lg:flex hidden flex-col gap-2">
        <h1 className="text-black text-xl">فیلتر</h1>
        <Model />
        <Storage />
        <PriceRange />
      </div>
      <div className="flex flex-col gap-2 lg:col-span-10 col-span-12 lg:order-1 order-2">
        
        <div className="lg:hidden flex justify-evenly items-center border-2 border-slate-600 w-32 py-2 rounded-lg cursor-pointer">
          <p className="text-xl">فیلتر</p>
          <IoFilterSharp />
        </div>

        <div className=" gap-3 flex flex-wrap justify-center">
          {similarProducts?.map((item, i) => (
            <CardComp
              key={i}
              title={item.title}
              desc={item.desc}
              rate={item.rate}
              price={item.price}
              img={item.img}
              colors={item.colors}
              className={"sm:w-[240px] w-auto !h-[410px] !p-3 !gap-1.5"}
            />
          ))}
        </div>
        {/* pagination */}
        <div className="w-full flex justify-center mt-4" dir="ltr">
          <Pagination
            showControls
            total={10}
            initialPage={1}
            color="primary"
            variant="bordered"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
