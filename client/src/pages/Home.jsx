import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Header from "../components/Header";
import me from "../assets/fayis.png";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

// Typing animation component
function TypingText({ text = "", speed = 0.1, className = "" }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const unsubscribe = rounded.onChange((latest) => {
      setDisplayText(text.slice(0, latest));
    });
    const controls = animate(count, text.length, {
      type: "tween",
      duration: text.length * speed,
      ease: "linear",
      onComplete: () => {
        unsubscribe();
      },
    });
    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [text, speed, count, rounded]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 text-cyan-400"
      >
        |
      </motion.span>
    </span>
  );
}

function Home() {
  // Reusable animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <motion.section
        id="home"
        initial="hidden"
        animate="visible"
        className="w-full bg-neutral-950 lg:h-screen sm:h-[70vh] flex flex-col md:flex-row items-center py-16 px-6 md:py-24 md:px-16 lg:px-32 gap-10 overflow-hidden pt-24"
      >
        {/* Left Text Section */}
        <motion.div
          variants={fadeInLeft}
          className="flex flex-col items-center md:items-start justify-center gap-4 w-full md:w-1/2 text-center md:text-left"
        >
          <motion.h3
            whileHover={{ color: "#06b6d4" }}
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-white font-serif transition-all duration-300"
          >
            Hey
          </motion.h3>

          <motion.h1
            whileHover={{ color: "#06b6d4" }}
            className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-serif leading-tight transition-all duration-300"
          >
            I am <TypingText text="Fayis K" speed={0.15} />
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md"
          >
            A passionate full-stack developer who loves building modern web
            applications and solving problems with code.
          </motion.p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          variants={fadeInRight}
          className="w-full md:w-1/2 flex justify-center md:justify-end items-center"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px #06b6d4",
              borderColor: "#06b6d4",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-72 h-72 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg border-4 border-white transition-all duration-300 will-change-transform"
          >
            <img
              className="w-full h-full object-cover"
              src={me}
              alt="Fayis"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Other Sections */}
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
