import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArmComp = ({ size, className }) => {
  return (
    <Link href={'/'} className="flex items-center">
      <div className="rounded-full">
        <Image src={"/logo.png"} className="scale-75" width={50} height={50} quality={100} />
      </div>
      <span className={`text-lg font-medium ${className}`}>بلوت</span>
    </Link>
  );
};

export default ArmComp;
