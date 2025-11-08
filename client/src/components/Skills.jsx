import React, { useEffect, useState } from "react";
import { Reorder, motion } from "framer-motion";
import { RotateCcw } from "lucide-react"; // reset icon
import AOS from "aos";
import "aos/dist/aos.css";

import htmlicon from "../assets/html.png";
import reacticon from "../assets/react.png";
import nodeicon from "../assets/nodejs.png";
import expressicon from "../assets/express.png";
import cssicon from "../assets/css.png";
import mongodbicon from "../assets/mongodb.png";
import figmaicon from "../assets/figma.png";
import mysqlicon from "../assets/mysql.png";
import githubicon from "../assets/github.png";
import tailwindicon from "../assets/tailwind.png";

const initialSkills = [
  { id: 1, icon: htmlicon, name: "HTML", desc: "Semantic, accessible structures." },
  { id: 2, icon: cssicon, name: "CSS", desc: "Responsive layouts & animations." },
  { id: 3, icon: reacticon, name: "React", desc: "Dynamic UI, hooks & routing." },
  { id: 4, icon: nodeicon, name: "Node.js", desc: "Backend APIs & real-time." },
  { id: 5, icon: expressicon, name: "Express.js", desc: "Middleware & REST APIs." },
  { id: 6, icon: mongodbicon, name: "MongoDB", desc: "Schema design & queries." },
  { id: 7, icon: mysqlicon, name: "MySQL", desc: "Relational DB & queries." },
  { id: 8, icon: githubicon, name: "GitHub", desc: "Version control." },
  { id: 9, icon: figmaicon, name: "Figma", desc: "UI/UX & prototyping." },
  { id: 10, icon: tailwindicon, name: "Tailwind CSS", desc: "Utility-first styling." },
];

function Skills() {
  const [skills, setSkills] = useState(initialSkills);
  const [positions, setPositions] = useState({});
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const handleMove = (id) => {
    const randomX = Math.random() * (window.innerWidth - 150) - window.innerWidth / 2;
    const randomY = Math.random() * (window.innerHeight - 200) - window.innerHeight / 3;
    setPositions((prev) => ({
      ...prev,
      [id]: { x: randomX, y: randomY },
    }));

    setActiveTooltip(id);
    setTimeout(() => setActiveTooltip(null), 3000);
  };

  const resetPositions = () => {
    setPositions({});
  };

  return (
    <div
      id="skills"
      className="bg-neutral-950 w-full min-h-screen flex flex-col items-center gap-10 py-32 px-6 lg:px-52 overflow-hidden relative"
    >
      {/* Top Right Reset Icon */}
      <motion.button
        onClick={resetPositions}
        whileHover={{ rotate: 90, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="absolute top-8 right-8 bg-neutral-800 hover:bg-neutral-700 text-cyan-400 p-3 rounded-full shadow-md border border-cyan-700 transition-all duration-300"
      >
        <RotateCcw size={22} />
      </motion.button>

      <h1
        data-aos="fade-up"
        className="font-bold text-5xl font-serif text-white"
      >
        Skills
      </h1>

      <Reorder.Group
        axis="x"
        values={skills}
        onReorder={setSkills}
        className="flex flex-wrap justify-center gap-10 w-full"
      >
        {skills.map((skill) => (
          <Reorder.Item
            key={skill.id}
            value={skill}
            whileDrag={{ scale: 1.1 }}
            className="group relative flex flex-col items-center cursor-grab active:cursor-grabbing"
          >
            <motion.div
              animate={positions[skill.id] || { x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 10 }}
              onClick={() => handleMove(skill.id)}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div
                className={`absolute -top-5 w-56 p-4 bg-neutral-900 text-white text-sm rounded-lg shadow-lg transition-all duration-300 z-10 ${
                  activeTooltip === skill.id
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                }`}
              >
                <h3 className="font-bold text-cyan-400 mb-1">{skill.name}</h3>
                <p className="text-gray-300">{skill.desc}</p>
              </div>

              <img
                src={skill.icon}
                alt={skill.name}
                className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}

export default Skills;
