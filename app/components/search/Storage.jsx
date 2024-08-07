import React from "react";
import SeeMoreLess from "./SeeMoreLess";
import CheckboxComp from "./CheckboxComp";

const filters = [
  "32 GB",
  "64 GB",
  "128 GB",
  "256 GB",
  "512 GB",
  "1 T",
];

const Storage = () => {
  return (
    <div className="flex flex-col gap-1 mt-4">
      <p className="font-semibold text-sm">حافظه</p>
      <SeeMoreLess filters={filters} className={'bg-white'}>
        {filters.map((item, index) => (
          <CheckboxComp key={index} title={item} name={item} />
        ))}
      </SeeMoreLess>
    </div>
  );
};

export default Storage;
