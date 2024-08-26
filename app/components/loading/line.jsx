import React from "react";

const Line = ({ num, width }) => {
  // Create an array of 5 elements
  const lines = Array(num).fill(0);

  return (
    <>
      {lines.map((_, index) => (
        <div
          key={index}
          className={`mb-4 h-3 rounded-full bg-gray-300 ${width}`}
        />
      ))}
    </>
  );
};

export default Line;
