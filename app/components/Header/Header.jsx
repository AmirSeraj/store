import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  return (
    <div className="w-full sticky top-0 left-0 z-[40000] shadow-2xl drop-shadow-xl bg-white">
      {/* <header className="w-full bg-white py-5 justify-between items-center lg:flex hidden 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%]">
        <div className="flex justify-center items-center gap-4">
          <Link href={'/'} className="flex justify-center items-center gap-2">
            <Image width={35} height={35} src={"/brand.svg"} />
            <p className="text-black text-lg">تکنولایف</p>
          </Link>
          <div className="xl:w-[600px] w-[500px] h-[55px] py-2 px-10 rounded-lg shadow-xl drop-shadow-lg bg-gray-300 flex items-center">
            <IoSearchOutline color="#c0c0c0" size={28} />
            <input
              className="w-full h-full pr-5 bg-transparent outline-none text-sm text-[#c0c0c0]"
              placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"
            />
          </div>
        </div>
        <LeftSection />
      </header>
      <HeaderMobileView /> */}

      <div className="flex flex-col py-1">
        <HeaderTop />
        <div className="w-full h-[1px] bg-slate-200" />
        <HeaderBottom />
      </div>
    </div>
  );
};

export default Header;
