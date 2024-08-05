import React from "react";

const TechnicalDetail = ({ technicaldetails }) => {
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="font-bold text-center text-black border-b-2 border-black w-full py-2 mb-4">
        Technical details
      </h1>
      {technicaldetails.map((item, index) => (
        <div
          key={index}
          className="flex sm:flex-row flex-col sm:gap-1 gap-2 items-center w-full min-h-[40px] py-2"
          style={{ backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#fff" }}
        >
          <div className="w-1/3 flex justify-center items-center">
            <p className="text-sm">{item.title}</p>
          </div>
          <div className="w-2/3 flex sm:justify-start justify-center sm:text-start text-center items-center">
            <p>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnicalDetail;
