import React from "react";

function LeftSider() {
  return (
    <div className="fixed sm:static left-0 bottom-0 px-20 ">
      <div className="flex flex-col items-center">
        <div className=" flex flex-col sm:flex-row gap-10 sm:mb-10">
          <i class="ri-linkedin-box-fill text-gray-500 text-xl"></i>
          <i class="ri-github-fill text-gray-500 text-xl"></i>
          <i class="ri-instagram-fill text-gray-500 text-xl"></i>
        </div>
        <div className="h-40 w-[1px] bg-gray-600 mt-2 sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
