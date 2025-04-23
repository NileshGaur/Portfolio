import React from "react";
import SectionHeader from "../../components/SectionTitle";
import Lottie from "lottie-react";

import Aboutme from "../../assets/lottie-animations/Aboutme.json";

function About() {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
  ];
  return (
    <div>
      <SectionHeader title="Profile" />
      <div className="flex w-full items-center sm:flex-col justify-between ">
        <div className="h-[70vh] sm:h-auto w-1/2 sm:w-full flex justify-center items-center">
          <Lottie animationData={Aboutme} loop autoplay />
        </div>
        <div className="flex flex-col gap-5 w-2/3 sm:w-full text-justify">
          <p className="text-white">
            I’m a passionate full-stack developer with a strong foundation in
            building modern, scalable, and responsive web applications. I love
            turning ideas into interactive digital experiences that are fast,
            functional, and visually appealing. With a deep interest in both
            frontend and backend technologies, I enjoy crafting clean UI as much
            as writing efficient, maintainable APIs.
          </p>
          <p className="text-white">
            Over the past few years, I’ve worked on a variety of projects across
            different domains, collaborating with teams to bring products from
            concept to launch. I thrive in dynamic environments, embrace
            continuous learning, and stay up to date with the latest trends in
            web development. Whether it’s React, Node.js, or exploring new
            tools, I’m always driven by curiosity and a desire to create
            meaningful software.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl sm:text-2xl font-semibold">
          Here are few technologies I'vs been working recently
        </h1>
        <div className="flex justify-around py-5 sm:py-2 flex-wrap gap-5">
          {skills.map((skill, index) => (
            <div className=" border border-tertiary border-opacity-30 rounded-2xl px-10 py-2 sm:px-5">
              <h1 key={index} className="text-white">
                {skill}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default About;
