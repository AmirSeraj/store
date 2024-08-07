import React from "react";
import SeeMoreLess from "./SeeMoreLess";
import CheckboxComp from "./CheckboxComp";

const Storage = ({ data }) => {
  return (
    <div className="flex flex-col gap-1 mt-4">
      <p className="font-semibold text-sm">حافظه</p>
      <SeeMoreLess filters={data} className={"bg-white"}>
        {data.map((item, index) => (
          <CheckboxComp key={index} title={item} name={item} />
        ))}
      </SeeMoreLess>
    </div>
  );
};

export default Storage;
