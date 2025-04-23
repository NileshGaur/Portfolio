import React from "react";
import { useState } from "react";
import SectionHeader from "../../components/SectionTitle";
import { courses } from "../../resources/courses";

function Courses() {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <div>
      <SectionHeader title="Relevant Courses" />

      <div className="flex py-10 gap-32 sm:flex-col ">
        <div className="flex flex-col gap-20 border-l-2 border-gray-600 pl-5 w-1/4 sm:flex-row sm:w-full sm:gap-5 sm:overflow-x-scroll">
          {courses.map((course, index) => {
            return (
              <div
                onClick={() => {
                  setSelectedItem(index);
                }}
                className="cursor-pointer ease-in-out duration-300 hover:scale-105"
              >
                {" "}
                <h1
                  className={`text-xl sm:text-sm px-5 ${
                    selectedItem == index
                      ? "text-tertiary border-tertiary border-l-4 -ml-5 py-3 bg-gray-800 rounded-lg sm:w-40"
                      : "text-white opacity-50"
                  } `}
                  key={index}
                >
                  {course.title}
                </h1>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {courses[selectedItem].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {courses[selectedItem].link}
          </h1>
          <p className="text-white">{courses[selectedItem].description}</p>
        </div>
      </div>
    </div>
  );
}
export default Courses;
