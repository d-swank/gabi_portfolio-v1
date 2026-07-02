"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faUser,
  faWrench,
  faBriefcase,
  faHeart,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "#about", label: "About", icon: faUser },
    { href: "#skills", label: "Strengths", icon: faWrench },
    { href: "#experience", label: "Experience", icon: faBriefcase },
    { href: "#interests", label: "Interests", icon: faHeart },
    { href: "#contact", label: "Contact", icon: faEnvelope },
  ];

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
  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      className="fixed top-0 right-0 left-0 z-50 border-b border-rose-200/70 bg-pink-100/90 shadow-sm backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl px-3 sm:px-5 lg:px-6">
        <div className="flex h-[4.5rem] items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex items-center"
          >
            <Link
              href="#"
              onClick={handleHomeClick}
              className="group flex h-14 w-14 items-center justify-center rounded-lg text-rose-800 transition hover:bg-white/50"
              title="Back to Home"
              aria-label="Back to home"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden">
                <Image
                  src="/GS Logo Cutout.svg"
                  alt=""
                  width={72}
                  height={72}
                  className="h-[4.25rem] w-[4.25rem] max-w-none object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </span>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.6 + 0.2 * index,
                }}
              >
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="group flex h-10 items-center gap-2 rounded-lg px-2.5 text-sm font-semibold text-rose-700 transition-all duration-300 hover:bg-white/60 hover:text-rose-900 lg:px-3"
                >
                  <FontAwesomeIcon icon={link.icon} className="hidden h-4 w-4 lg:block" />
                  <span>{link.label}</span>
                </Link>
              </motion.div>
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
              className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-2 rounded-lg hover:bg-white/50"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
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
              className="md:hidden fixed top-[4.5rem] right-0 z-40 flex w-64 flex-col gap-3 border-l border-b border-rose-600 bg-pink-100 p-5 text-rose-800 shadow-lg"
              style={{ willChange: "transform" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex h-11 items-center gap-3 rounded-lg px-2 text-base font-semibold transition-colors hover:bg-white/55 hover:text-rose-700"
                >
                  <FontAwesomeIcon icon={link.icon} className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
