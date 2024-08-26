import React from "react";
import ImageSvg from "../../loading/ImageSvg";
import Line from "../../loading/line";

const Skeleton = () => {
  return (
    <div className="w-full bg-gray-200 rounded-lg h-full animate-pulse flex gap-1 items-center justify-around">
      <div className="w-64 h-64 bg-gray-300 rounded-lg flex justify-center items-center">
        <ImageSvg />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center">
        <Line num={4} width={'w-[70%]'} />
      </div>
    </div>
  );
};

export default Skeleton;
