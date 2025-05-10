"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar({ onBackAction }: { onBackAction: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-pink-100 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex h-16 items-center justify-between relative">
        {/* Back arrow */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 2, ease: "easeOut" }}
        >
          <button
            onClick={onBackAction}
            className="flex items-center cursor-pointer"
            title="Back to Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 45 45"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10 text-rose-800 font-semibold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15l-6-6m0 0l6-6m-6 6h13a9 9 0 110 18h-1"
              />
            </svg>
          </button>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {[
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#experience", label: "Experience" },
            { href: "#interests", label: "Interests" },
            { href: "#contact", label: "Contact" },
          ].map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.6 + 0.2 * index,
              }}
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-rose-500 after:rounded-full after:transition-all after:duration-500 after:ease-in-out hover:after:w-full text-rose-800 font-semibold font-mono"
            >
              {link.label}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="md:hidden absolute top-16 right-0 bg-white/90 backdrop-blur-md shadow-lg rounded-l-lg p-6 flex flex-col gap-6 text-rose-800"
          >
            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#experience", label: "Experience" },
              { href: "#interests", label: "Interests" },
              { href: "#contact", label: "Contact" },
            ].map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.6 + 0.2 * index,
                }}
                className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-rose-500 after:rounded-full after:transition-all after:duration-500 after:ease-in-out hover:after:w-full"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
