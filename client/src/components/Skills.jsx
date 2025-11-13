import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  { id: 1, icon: htmlicon, name: "HTML" },
  { id: 2, icon: cssicon, name: "CSS" },
  { id: 3, icon: reacticon, name: "React" },
  { id: 4, icon: nodeicon, name: "Node.js" },
  { id: 5, icon: expressicon, name: "Express.js" },
  { id: 6, icon: mongodbicon, name: "MongoDB" },
  { id: 7, icon: mysqlicon, name: "MySQL" },
  { id: 8, icon: githubicon, name: "GitHub" },
  { id: 9, icon: figmaicon, name: "Figma" },
  { id: 10, icon: tailwindicon, name: "Tailwind CSS" },
];

// 💡 Descriptions for all icons
const skillDescriptions = {
  HTML:
    "HTML: Strong understanding of semantic markup and accessibility best practices, crafting structured and SEO-friendly web pages.",
  CSS:
    "CSS: Skilled in creating responsive designs, animations, and layouts using Flexbox, Grid.",
  React:
    "React: Experienced in building dynamic SPAs using hooks, routing, and state management for highly interactive UIs.",
  "Node.js":
    "Node.js: Proficient in building scalable backend systems, handling APIs.",
  "Express.js":
    "Express.js: Skilled at creating RESTful APIs, middleware logic, and handling authentication and routing efficiently.",
  MongoDB:
    "MongoDB: Expertise in schema design, data modeling, aggregation pipelines, and optimization using Mongoose in MERN stack projects.",
  MySQL:
    "MySQL: Experience designing relational databases, writing optimized SQL queries, and ensuring data consistency and security.",
  GitHub:
    "GitHub: Comfortable with version control, collaboration, branching strategies, and managing repositories for team projects.",
  Figma:
    "Figma: Adept at designing clean, intuitive interfaces and creating prototypes to visualize UX flows before development.",
  "Tailwind CSS":
    "Tailwind CSS: Efficient at crafting beautiful, responsive UIs quickly with utility-first classes and consistent design systems.",
};

function Skills() {
  const [skills] = useState(initialSkills);
  const [inBox, setInBox] = useState([]);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const droppedSkill = skills.find((s) => String(s.id) === id);

    if (!inBox.includes(id)) {
      setInBox((prev) => [...prev, id]);
    }
    setActiveSkill(droppedSkill?.name);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div
      id="skills"
      className="bg-neutral-950 w-full min-h-screen flex flex-col items-center gap-10 py-28 px-4 md:px-20 lg:px-36 overflow-hidden"
    >
      <h1
        data-aos="fade-up"
        className="font-bold text-5xl font-serif text-white mb-10"
      >
        Skills
      </h1>

      {/* Skill Icons */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("id", skill.id)}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center cursor-grab active:cursor-grabbing"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className={`w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-300 rounded-xl ${
                inBox.includes(String(skill.id))
                  ? "opacity-40 grayscale"
                  : "opacity-100"
              }`}
            />
            <p className="text-gray-300 mt-2 text-sm md:text-base font-medium">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Drop Zone */}
      <motion.div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        animate={{
          borderColor: activeSkill ? "#00ffff" : "#22d3ee",
          boxShadow: activeSkill
            ? "0 0 25px rgba(0,255,255,0.6)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg h-60 md:h-64 mt-10 border-2 border-dashed border-cyan-400 rounded-2xl flex flex-col justify-center items-center text-gray-300 text-center px-6"
      >
        {activeSkill ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent mb-3"
              animate={{
                textShadow: [
                  "0 0 10px rgba(0,255,255,0.8)",
                  "0 0 20px rgba(0,255,255,0.5)",
                  "0 0 10px rgba(0,255,255,0.8)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {activeSkill} Skill Highlight ⚙️
            </motion.h2>
            <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed">
              {skillDescriptions[activeSkill]}
            </p>
          </motion.div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-sm md:text-base"
          >
            Drag and drop any skill icon here to learn more about my expertise!
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

export default Skills;
