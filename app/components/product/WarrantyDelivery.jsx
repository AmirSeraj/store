import Image from "next/image";
import React from "react";

const WarrantyDelivery = () => {
  const Card = ({ img, title }) => {
    return (
      <div className="h-full w-full flex flex-col justify-center items-center p-3">
        <Image
          src={img}
          width={56}
          height={56}
          objectPosition="center"
          objectFit="contain"
        />
        <p className="xs:text-sm text-xs">{title}</p>
      </div>
    );
  };
  return (
    <div className="2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%] grid md:grid-cols-4 grid-cols-1 h-full w-full">
      <Card img={"/product/express.svg"} title={"اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس"} />
      <Card img={"/product/days-return.svg"} title={"هفت روز ضمانت بازگشت کالا"} />
      <Card img={"/product/cash-on-delivery.svg"} title={"امکان پرداخت در محل"} />
      <Card img={"/product/original-products.svg"} title={"ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ"} />
    </div>
  );
};

export default WarrantyDelivery;
