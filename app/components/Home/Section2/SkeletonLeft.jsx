import React from "react";
import ImageSvg from "../../loading/ImageSvg";
import Line from "../../loading/line";

const SkeletonLeft = () => {
  const RoundedCard = () => {
    return (
      <div className="w-20 h-20 rounded-full bg-gray-300 animate-pulse flex justify-center items-center">
        <ImageSvg className="!w-10 !h-10" />
      </div>
    );
  };
  return (
    <div className="w-[380px] flex flex-col gap-4 p-4 bg-white animate-pulse items-center">
      <div className="flex items-center gap-2 p-2">
        <RoundedCard />
        <RoundedCard />
        <RoundedCard />
      </div>
      <Line num={4} width={'w-[80%] !mb-1 mr-4'} />
      <div className="w-48 h-40 bg-gray-300 rounded-lg flex justify-center items-center">
        <ImageSvg />
      </div>
    </div>
  );
};

export default SkeletonLeft;
