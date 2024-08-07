import { Slider } from "@nextui-org/slider";
import React from "react";

const PriceRange = () => {
  return (
    <div className="px-2">
      <Slider
        label="رنج قیمت"
        step={50}
        minValue={0}
        maxValue={1000}
        defaultValue={[100, 500]}
        formatOptions={{ style: "currency", currency: "USD" }}
        className="max-w-md"
      />
    </div>
  );
};

export default PriceRange;
