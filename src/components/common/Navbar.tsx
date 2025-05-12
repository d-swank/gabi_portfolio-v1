"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faWrench,
  faBriefcase,
  faHeart,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
      document.documentElement.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-pink-100 fixed top-0 right-0 left-0 z-10"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between ">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 text-rose-800 font-semibold font-mono relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-rose-500 after:rounded-full after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
          >
            <a
              href="#"
              className="flex items-center gap-2 text-rose-800 font-semibold font-mono relative"
              title="Back to Home"
            >
              <FontAwesomeIcon
                icon={faHome}
                className="w-4 h-4 text-rose-800"
              />
              Home
            </a>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {[
              { href: "#about", label: "About", icon: faUser },
              { href: "#skills", label: "Skills", icon: faWrench },
              { href: "#experience", label: "Experience", icon: faBriefcase },
              { href: "#interests", label: "Interests", icon: faHeart },
              { href: "#contact", label: "Contact", icon: faEnvelope },
            ].map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.6 + 0.2 * index,
                }}
                className="group flex items-center gap-2 justify-center text-rose-700 font-semibold transition-all duration-300 hover:text-rose-900 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-400 after:to-rose-500 after:rounded-full after:transition-all after:duration-500"
              >
                <FontAwesomeIcon icon={link.icon} />
                <span className="relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-400 after:to-rose-500 after:rounded-full group-hover:after:w-full after:transition-all after:duration-500">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 2, ease: "easeOut" }}
              className="relative w-10 h-10 flex flex-col justify-center items-center gap-2 z-50"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 10 : 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="block w-8 h-0.5 bg-rose-800 rounded-full"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? 20 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block w-8 h-0.5 bg-rose-800 rounded-full"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -10 : 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="block w-8 h-0.5 bg-rose-800 rounded-full"
              />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* MOBILE MENU PANEL */}
            <motion.div
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="md:hidden fixed top-16 right-0 w-64 z-40 bg-pink-100 p-6 flex flex-col gap-4 text-rose-800 shadow-lg border-l border-b border-rose-600"
              style={{ willChange: "transform" }}
            >
              {[
                { href: "#about", label: "About", icon: faUser },
                { href: "#skills", label: "Skills", icon: faWrench },
                { href: "#experience", label: "Experience", icon: faBriefcase },
                { href: "#interests", label: "Interests", icon: faHeart },
                { href: "#contact", label: "Contact", icon: faEnvelope },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 text-lg font-semibold hover:text-rose-700 transition-colors"
                >
                  <FontAwesomeIcon icon={link.icon} />
                  <span>{link.label}</span>
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
