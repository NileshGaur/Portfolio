import React from "react";
import { useState } from "react";
import SectionHeader from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experience() {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <div>
      <SectionHeader title="Journey" />

      <div className="flex py-10 gap-20 sm:flex-col ">
        <div className="flex flex-col gap-20 border-l-2 border-gray-600 pl-5 w-1/4 sm:flex-row sm:w-full sm:gap-5 sm:overflow-x-scroll">
          {experiences.map((experience, index) => {
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
                  {experience.period}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5 px-10">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItem].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItem].company}
          </h1>
          <p className="text-white">{experiences[selectedItem].description}</p>
        </div>
      </div>
    </div>
  );
}
export default Experience;
