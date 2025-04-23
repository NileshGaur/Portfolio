import React from "react";

function SectionHeader({ title }) {
  return (
    <div className="flex gap-10 items-center pt-[200px] pb-20 sm:pb-10 sm:pt-[100px]">
      <h1 className="text-4xl sm:text-2xl text-white font-semibold tracking-[15px]">
        {title}
      </h1>
      <div className="w-80 h-[0.5px] bg-gray-300"></div>
    </div>
  );
}
export default SectionHeader;
