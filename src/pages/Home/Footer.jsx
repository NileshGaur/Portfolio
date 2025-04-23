import React from "react";

function Footer() {
  return (
    <div className="py-10">
      <div className="h-[1px] w-full bg-gray-600 mt-10"></div>

      <div className="flex flex-col justify-between items-center py-5 mt-10">
        <h1 className="text-white opacity-70">
          Designed and Developed by{" "}
          <span className="text-tertiary">Nilesh Gaur </span>
        </h1>
        <h1 className="text-white opacity-70">
          © {new Date().getFullYear()} All rights reserved.
        </h1>
      </div>
    </div>
  );
}
export default Footer;
