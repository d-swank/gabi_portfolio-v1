"use client";

import { motion, AnimatePresence, spring } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaBars,
  FaUser,
  FaTools,
  FaBriefcase,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa";

const links = [
  { href: "#about", icon: <FaUser size={18} />, label: "About" },
  { href: "#skills", icon: <FaTools size={18} />, label: "Skills" },
  { href: "#experience", icon: <FaBriefcase size={18} />, label: "Experience" },
  { href: "#interests", icon: <FaHeart size={18} />, label: "Interests" },
  { href: "#contact", icon: <FaEnvelope size={18} />, label: "Contact" },
];

export default function RadialMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  // Close menu when user scrolls
  useEffect(() => {
    const closeOnScroll = () => setOpen(false);
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, []);

  return (
    <div className="relative z-50 cursor-pointer">
      <AnimatePresence>
        {open &&
          links.map((link, index) => {
            const angle = (index - (links.length - 5.1) / 2) * 23.9;
            const radius = 160;

            const x = -radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x, y }}
                exit={{ opacity: 0, x: 0, y: 0 }}
                transition={{ type: spring, stiffness: 500, damping: 20 }}
                className="absolute w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg text-rose-700 backdrop-blur-md hover:scale-110 transition"
                onClick={() => setOpen(false)}
              >
                {link.icon}
              </motion.a>
            );
          })}
      </AnimatePresence>

      <motion.button
        onClick={toggleMenu}
        whileTap={{ scale: 0.95 }}
        className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-200 to-rose-300 text-rose-700 shadow-xl flex items-center justify-center text-lg"
        aria-label="Menu"
      >
        <FaBars />
      </motion.button>
    </div>
  );
}
