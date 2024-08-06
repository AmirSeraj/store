import CardComp from "@/app/components/CardComp";
import Model from "@/app/components/search/Model";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/pagination";

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
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: " گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنامم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone2.webp",
      colors: ["red", "blue", "gray"],
    },
  ];
  return (
    <div className="2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%] grid grid-cols-12 pt-3 pb-6">
      <div className="lg:col-span-2 col-span-12 order-1 flex flex-col gap-2">
        <h1 className="text-black text-xl">فیلتر</h1>
        <Model />
      </div>
      <div className="lg:col-span-10 col-span-12 lg:order-1 order-2 gap-3 flex flex-wrap justify-center">
        {similarProducts?.map((item, i) => (
          <CardComp
            key={i}
            title={item.title}
            desc={item.desc}
            rate={item.rate}
            price={item.price}
            img={item.img}
            colors={item.colors}
            className={'sm:w-[240px] w-auto !h-[410px] !p-3 !gap-1.5'}
          />
        ))}

        {/* pagination */}
        <div dir="ltr">
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
