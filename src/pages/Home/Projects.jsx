import React from "react";
import { useState } from "react";
import SectionHeader from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

function Projects() {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <div>
      <SectionHeader title="Projects" />

      <div className="flex py-10 gap-20 sm:flex-col ">
        <div className="flex flex-col gap-20 border-l-2 border-gray-600 pl-5 w-1/4 sm:flex-row sm:w-full sm:gap-5 sm:overflow-x-scroll">
          {projects.map((project, index) => {
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
                  {project.title}
                </h1>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center sm:flex-col gap-10 px-10">
          <img
            src={projects[selectedItem].image}
            alt={projects[selectedItem].title}
            className="w-72 h-auto rounded-lg object-cover"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {projects[selectedItem].title}
            </h1>
            <h1 className="text-tertiary text-xl">
              {projects[selectedItem].link}
            </h1>
            <p className="text-white">{projects[selectedItem].description}</p>
            <div className="flex gap-4">
              <a
                href={projects[selectedItem].github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                GitHub
              </a>
              <a
                href={projects[selectedItem].link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tertiary text-white px-4 py-2 rounded hover:bg-opacity-80 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
