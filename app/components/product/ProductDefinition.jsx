import React from "react";

const ProductDefinition = ({productDefinition}) => {
  return (
    <div className="flex flex-col 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%] my-5">
      <p className="text-sm p-5 text-center" dir="rtl">{productDefinition}</p>
    </div>
  );
};

export default ProductDefinition;
