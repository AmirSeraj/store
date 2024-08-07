import React from "react";
import SeeMoreLess from "./SeeMoreLess";
import CheckboxComp from "./CheckboxComp";

const Model = ({filters}) => {
  return (
    <div className="flex flex-col gap-1 mt-4">
      <p className="font-semibold text-sm">مدل گوشی</p>
      <SeeMoreLess filters={filters} className={'bg-white'}>
        {filters.map((item, index) => (
          <CheckboxComp key={index} title={item} name={item} />
        ))}
      </SeeMoreLess>
    </div>
  );
};

export default Model;
