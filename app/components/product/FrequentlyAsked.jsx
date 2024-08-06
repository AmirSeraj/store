"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";

const FrequentlyAsked = ({ data }) => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <div className="w-full bg-[#f5f5f5] mt-10 py-5">
      <div className="flex flex-col py-2 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%] w-full">
        <h1 className="text-black font-bold text-xl">سوالات پر تکرار</h1>
        <Accordion className="w-full">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={"Accordion " + index}
              hideIndicator
              title={
                <div
                  className="flex gap-3 items-center"
                  onClick={() => handleToggle(index)}
                >
                  {item.title}
                  <div
                    className={`${
                      expanded === index ? "-rotate-90" : "rotate-0"
                    } transition-all duration-250`}
                  >
                    <MdOutlineKeyboardArrowLeft size={20} />
                  </div>
                </div>
              }
            >
              {item.value}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FrequentlyAsked;
