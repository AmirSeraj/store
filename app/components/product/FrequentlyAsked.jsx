"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const FrequentlyAsked = ({ data }) => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation";
  return (
    <div className="w-full bg-[#f5f5f5] mt-10 py-5">
      <div className="flex flex-col p-2 xl:px-[15%] lg:px-[10%] sm:px-[8%] px-[3%] w-full">
        <h1 className="text-black font-bold text-xl">سوالات پر تکرار</h1>
        <Accordion className="w-full">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={"Accordion " + index + 1}
              title={item.title}
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
