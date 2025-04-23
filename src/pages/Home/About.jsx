import React from "react";
import SectionHeader from "../../components/SectionTitle";
import Lottie from "lottie-react";

import Aboutme from "../../assets/lottie-animations/aboutme.json";

function About() {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
  ];
  return (
    <div>
      <SectionHeader title="About" />
      <div className="flex w-full items-center">
        <div className="h-[70vh] w-1/2 ">
          <Lottie animationData={Aboutme} loop autoplay />
        </div>
        <div className="flex flex-col gap-5 w-2/3">
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
        <h1 className="text-[var(--color-tertiary)] text-xl">
          Here are few technologies I'vs been working recently
        </h1>
        <div className="flex justify-around py-5">
          {skills.map((skill, index) => (
            <div className="border border-[var(--color-tertiary)] rounded-4xl px-10 py-2">
              <h1 key={index} className="text-[var(--color-tertiary)]">
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
