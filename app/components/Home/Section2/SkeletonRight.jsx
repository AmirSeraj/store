import React from "react";
import ImageSvg from "../../loading/ImageSvg";
import Line from "../../loading/line";

const SkeletonRight = () => {
  const Card = () => {
    return (
      <div className="w-[250px] p-5 h-[300px] bg-white shadow-lg drop-shadow-lg justify-center flex animate-pulse flex-col gap-3 rounded-lg">
        <div className="w-[200px] h-[140px] flex justify-center items-center bg-gray-300 rounded-lg">
          <ImageSvg />
        </div>
        <div className="w-full flex flex-col gap-1">
          <Line num={3} width={'w-[90%]'} />
        </div>
      </div>
    );
  };
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  );
};

export default SkeletonRight;
