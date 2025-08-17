import React from "react";
import Header from "../components/Header";
import me from "../assets/fayis.png";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Header />

      <div
        id="home"
        className="w-full bg-neutral-950 lg:h-screen  sm:h-[70vh] flex flex-col md:flex-row items-center  py-16 px-6 md:py-24 md:px-16 lg:px-32 gap-10"
      >
        <div className="flex flex-col items-center md:items-start justify-center gap-4 w-full md:w-1/2 text-center md:text-left">
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white font-serif">
            Hey
          </h3>
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-serif leading-tight">
            I am Fayis K
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md">
            A passionate full-stack developer who loves building modern web
            applications and solving problems with code.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <div className="relative w-72 h-72 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg border-4 border-white">
            <img className="w-full h-full object-cover" src={me} alt="Fayis" />
          </div>
        </div>
      </div>

      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
