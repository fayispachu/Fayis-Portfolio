import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Menu, X, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import me from "../assets/fayis.png";

function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef(null);

  // Load audio
  useEffect(() => {
    audioRef.current = new Audio("/music/goth-slowed.mp3");
    audioRef.current.loop = true;
  }, []);

  // Toggle play/pause
  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  // Hide/Show Header on scroll
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

  const links = ["home", "about", "projects", "skills", "contact"];

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-neutral-950/60 text-white py-4 px-6 sm:px-12 md:px-24 shadow-md border-b border-neutral-800"
    >
      <div className="flex items-center justify-between">

        {/* Logo + Floating Headphone Icon */}
        <div className="relative flex items-center gap-2 cursor-pointer" onClick={toggleMusic}>
          <motion.img
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #06b6d4" }}
            transition={{ duration: 0.3 }}
            className="w-12 h-12 rounded-full border border-cyan-400"
            src={me}
            alt="Fayis"
          />

          <motion.h2
            whileHover={{ color: "#06b6d4" }}
            className="font-bold text-lg sm:text-xl tracking-wide"
          >
            Fayis K
          </motion.h2>

          {/* Tiny Headphone Button (doesn't affect layout) */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation(); // prevent profile click conflict
              toggleMusic();
            }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className={`absolute -right-6 top-1/2 -translate-y-1/2 p-1 rounded-full 
              ${playing ? "text-cyan-400" : "text-gray-400"}`}
          >
            <Headphones size={16} />
          </motion.button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-lg font-semibold items-center">
          {links.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-cyan-400 hover:drop-shadow-[0_0_10px_#06b6d4] transition-all duration-300"
              >
                {link.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side - Mobile Menu */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col gap-4 mt-4 w-full bg-neutral-900/90 p-4 rounded-lg border border-neutral-800"
          >
            {links.map((link) => (
              <motion.li key={link} whileHover={{ scale: 1.05, color: "#06b6d4" }}>
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenuOpen(false)}
                  className="block p-2 rounded-md hover:bg-neutral-800 cursor-pointer transition-all"
                >
                  {link.toUpperCase()}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Header;
