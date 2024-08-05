import React from "react";

const ProductDefinition = ({productDefinition}) => {
  return (
    <div className="flex flex-col xl:px-[15%] lg:px-[10%] sm:px-[8%] px-[3%] my-5">
      <p className="text-sm p-5 text-center" dir="rtl">{productDefinition}</p>
    </div>
  );
};

export default ProductDefinition;
