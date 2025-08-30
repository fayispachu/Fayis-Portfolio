import React, { useState } from "react";
import portfolioimage from "../assets/portfolio.png";
import projectManagementImage from "../assets/projectmanagement.png";
import TradingJournalImage from "../assets/crypto.png";
const projects = [
  {
    title: "Project Management App",
    description:
      "A full-featured MERN stack app with role-based access control and real-time updates.",
    image: projectManagementImage,
    github: "https://github.com/fayispachu/Project-Management-App-New",
    demo: "https://project-management-app-new-pshf.onrender.com/",
  },
  {
    title: "Trading Journal App",
    description:
      "A web application for tracking trading activities and analyzing performance.",
    image: TradingJournalImage,
    github: "https://github.com/fayispachu/TradingJournal",
    demo: "https://tradingjournal-app-fayizpachu.onrender.com/",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern and responsive personal portfolio built with React & Tailwind CSS.",
    image: portfolioimage,
    github: "https://github.com/fayispachu/Portfolio",
    demo: "https://fayis-portfolio-1.onrender.com",
  },
  {
    title: "E-Commerce Store",
    description:
      "Full-stack e-commerce platform with secure payments, cart system, and admin dashboard. Currently not created",
    image: "https://via.placeholder.com/300x200",
    github: "#",
    demo: "#",
  },
  {
    title: "Blog Platform",
    description:
      "Content publishing platform with markdown support, authentication, and comments. Currently not created",
    image: "https://via.placeholder.com/300x200",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  const totalPages = Math.ceil(projects.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div
      id="projects"
      className="bg-black text-white py-16 px-6 md:px-20 lg:px-32 min-h-screen"
    >
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl md:text-5xl font-serif">Projects</h2>
        <p className="mt-4 text-lg text-gray-400">
          A showcase of my work — blending clean code with creative design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-neutral-950 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 group-hover:bg-black/90 transition duration-300 p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md text-sm  shadow-lg shadow-emerald-500/30 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md text-sm  shadow-lg shadow-emerald-500/30 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-md text-sm font-medium border 
              ${
                currentPage === index + 1
                  ? " bg-black text-white border-gray-300 hover:bg-neutral-900    "
                  : " bg-white text-black border-neutral-500"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Projects;
