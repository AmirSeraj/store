import { IoSearchOutline } from "react-icons/io5";

const SearchComp = ({ className, size, className2, handleClick }) => {
    return (
        <div onClick={handleClick} className={` p-2 rounded-full bg-gray-300 items-center ${className}`}>
            <IoSearchOutline color="#c0c0c0" size={size} />
            <input
                className={`w-full h-full bg-transparent outline-none text-[0.8rem] text-black ${className2}`}
                placeholder="محصول، برند یا دسته مورد نظرتان را جستجو کنید"
            />
        </div>
    )
}

export default SearchComp
