import React from "react";
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

const skills = [
  {
    icon: htmlicon,
    name: "HTML",
    desc: "3+ years experience building semantic, accessible HTML structures.",
  },
  {
    icon: cssicon,
    name: "CSS",
    desc: "Expert in responsive layouts, animations, and modern CSS features.",
  },
  {
    icon: reacticon,
    name: "React",
    desc: "Strong skills in building dynamic UI with hooks, state, and routing.",
  },
  {
    icon: nodeicon,
    name: "Node.js",
    desc: "Backend APIs, authentication, and real-time data handling.",
  },
  {
    icon: expressicon,
    name: "Express.js",
    desc: "REST API development and middleware configuration.",
  },
  {
    icon: mongodbicon,
    name: "MongoDB",
    desc: "Schema design, aggregation, and performance tuning.",
  },
  {
    icon: mysqlicon,
    name: "MySQL",
    desc: "Relational database management and complex query writing.",
  },
  {
    icon: githubicon,
    name: "GitHub",
    desc: "Version control, collaboration, and CI/CD workflows.",
  },
  {
    icon: figmaicon,
    name: "Figma",
    desc: "UI/UX design, prototyping, and design collaboration.",
  },
  {
    icon: tailwindicon,
    name: "Tailwind CSS",
    desc: "Rapid UI styling with responsive and utility-first design.",
  },
];

function Skills() {
  return (
    <div id="skills" className="bg-neutral-950 w-full min-h-screen flex flex-col items-center  gap-10 py-32 px-6  lg:px-52">
      <h1 className="font-bold text-5xl font-serif text-white">Skills</h1>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 w-full">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center cursor-pointer"
          >
            <div className="absolute -top-5 w-56 p-4 bg-neutral-900 text-white text-sm rounded-lg shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
              <h3 className="font-bold text-cyan-400 mb-1">{skill.name}</h3>
              <p className="text-gray-300">{skill.desc}</p>
            </div>

            <img
              src={skill.icon}
              alt={skill.name}
              className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
