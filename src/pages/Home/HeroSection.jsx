import React from "react";

function HeroSection() {
  return (
    <div className="h-[80vh] sm:h-auto flex flex-col items-start justify-center gap-8 bg-primary text-white">
      <h1 className="text-white text-3xl ">Hey, I am</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold ">
        {" "}
        <span className="text-9xl sm:text-5xl outlined-text">N</span>
        ilesh <span className="text-9xl sm:text-5xl outlined-text">G</span>aur
      </h1>
      <h1 className="text-6xl sm:text-2xl text-white font-semibold">
        I turn ideas into interactive web apps
      </h1>
      <p className="text-gray-400 w-2/3 sm:w-full text-justify">
        Passionate full-stack engineer focused on building responsive, scalable,
        and user-friendly applications. Currently working at{" "}
        <span className="text-secondary font-semibold">AndersenLab</span>, where
        I contribute to high-impact projects across the product lifecycle. I
        bring over <span className="text-secondary font-semibold">3 years</span>{" "}
        of hands-on experience building modern web applications using React,
        Node.js, and more
      </p>
      <button className="border border-tertiary py-3 rounded px-10 sm:px-5">
        Let's Talk
      </button>
    </div>
  );
}

export default HeroSection;
