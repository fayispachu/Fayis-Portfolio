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
        className="w-full bg-neutral-950 h-[100vh] flex flex-col md:flex-row py-20 px-6 md:py-32 md:px-20 lg:px-44 gap-10 md:gap-0"
      >
        <div className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2 h-auto text-center md:text-left">
          <div className="flex flex-col text-white">
            <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl font-serif">
              Hey
            </h3>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl font-serif">
              I am Fayis k
            </h1>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center h-[80vh] bg-neutral-900 rounded-full p-5 ">
          <div className="w-full rounded-full bg-white ">
            {" "}
            <img className="w-3/4 sm:w-2/3 md:w-[100%] " src={me} alt="Fayis" />
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
