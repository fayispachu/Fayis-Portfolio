import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import me from "../assets/fayis.png";
function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-neutral-950/40 text-white py-6   px-4 sm:px-16 md:px-44 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <img  className="w-12 h-12 rounded-full border " src={me} alt="" />
        <ul className="hidden md:flex gap-4 text-lg font-extrabold w-[50%] list-none justify-end">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:bg-neutral-900 hover:drop-shadow-xl hover:drop-shadow-white p-2 rounded-md cursor-pointer"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:bg-neutral-900 hover:drop-shadow-xl hover:drop-shadow-white p-2 rounded-md cursor-pointer"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:bg-neutral-900 hover:drop-shadow-xl hover:drop-shadow-white p-2 rounded-md cursor-pointer"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:bg-neutral-900 hover:drop-shadow-xl hover:drop-shadow-white p-2 rounded-md cursor-pointer"
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:bg-neutral-900 hover:drop-shadow-xl hover:drop-shadow-white p-2 rounded-md cursor-pointer"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 w-full bg-neutral-900/95 p-4 rounded-lg">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block p-2 rounded-md hover:bg-neutral-800 cursor-pointer"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block p-2 rounded-md hover:bg-neutral-800 cursor-pointer"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block p-2 rounded-md hover:bg-neutral-800 cursor-pointer"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block p-2 rounded-md hover:bg-neutral-800 cursor-pointer"
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block p-2 rounded-md hover:bg-neutral-800 cursor-pointer"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
