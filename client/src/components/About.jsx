import React from "react";
import { Link } from "react-scroll";
import ComputersCanvas from "./ComputersCanvas";

function About() {
  return (
    <div id="about" className="flex flex-col items-center justify-center bg-neutral-900 w-full text-white transition-all px-4 sm:px-16 md:px-24 py-12 md:py-16 gap-10 relative">
      <h1 className="font-bold text-4xl sm:text-5xl font-serif text-white mb-6 sm:mb-12">
        About
      </h1>

      <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full gap-8">
        <div className="w-full md:w-2/3 max-w-2xl text-left">
          <p className="font-medium text-lg sm:text-xl md:text-2xl leading-relaxed hover:drop-shadow-2xl hover:drop-shadow-neutral-500 transition">
            I’m a self-taught{" "}
            <span className="text-cyan-400 hover:drop-shadow-2xl hover:drop-shadow-neutral-500 transition">
              MERN Stack Developer
            </span>{" "}
            with a passion for crafting clean, efficient, and user-focused web
            applications. With a strong foundation in{" "}
            <span className="text-cyan-400 hover:drop-shadow-2xl hover:drop-shadow-neutral-500 transition">
              MongoDB, Express.js, React, and Node.js
            </span>
            , I specialize in turning ideas into seamless digital experiences.
          </p>

          <p className="mt-6 font-medium text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 hover:drop-shadow-2xl hover:drop-shadow-neutral-500 transition">
            I thrive in problem-solving, adapt quickly to new technologies, and
            believe in writing code that’s not only functional but also elegant.
            My goal is to build products that deliver value, perform flawlessly,
            and leave a lasting impact.
          </p>
        </div>

        {/* Canvas Section */}
        <div className="w-full md:w-2/3 flex justify-center h-64 sm:h-80 md:h-[50vh]">
          <ComputersCanvas />
        </div>
      </div>

      <div className="mt-8">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer px-5 py-2 bg-white hover:bg-neutral-400 text-neutral-900 font-bold rounded-full text-lg transition"
        >
          Check out Projects
        </Link>
      </div>
    </div>
  );
}

export default About;
