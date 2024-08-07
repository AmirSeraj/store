import Image from "next/image";
import { MdStarRate } from "react-icons/md";

const CardComp = ({ img, colors, desc, price, rate, title, className }) => {
  return (
    <div
      className={`w-[270px] h-[440px] flex flex-col items-center gap-2 px-3 py-2 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl shadow-gray-500  group overflow-hidden ${className}`}
    >
      <div className="w-full flex flex-col items-center">
        <Image
          src={img}
          objectPosition="center"
          objectFit="contain"
          width={250}
          height={240}
        />
        <div className="w-full p-1 flex justify-center gap-1 mt-1">
          {colors.map((color, i) => (
            <span
              key={i}
              className="w-4 h-4 rounded-full block"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      <p className="flex flex-wrap text-xs font-bold pr-2 pt-2">{title}</p>
      <p className="flex-wrap text-xs pr-3 h-[40px] overflow-hidden">
        {desc}
        {" ....."}
      </p>

      <div className="flex justify-between items-center py-2 px-1 w-full">
        <div className="flex items-center gap-1">
          <p className="font-bold text-xl">{Number(price).toLocaleString()}</p>
          <p className="text-lg">تومان</p>
        </div>
        <div className="flex gap-1 justify-center items-center">
          <span className="text-black text-xs mt-1">{rate}</span>
          <MdStarRate size={18} color="#c9c91d" />
        </div>
      </div>
    </div>
  );
};

export default CardComp;
