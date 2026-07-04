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
import ThemeToggle from "@/components/common/ThemeToggle";
import { scrollToSection } from "@/lib/scrollToSection";

const navLinks = [
  { href: "#about", label: "About", icon: faUser },
  { href: "#skills", label: "Strengths", icon: faWrench },
  { href: "#experience", label: "Experience", icon: faBriefcase },
  { href: "#interests", label: "Interests", icon: faHeart },
  { href: "#contact", label: "Contact", icon: faEnvelope },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileThemeBottomOffset, setMobileThemeBottomOffset] = useState(24);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (menuOpen) {
      body.classList.add("no-scroll");
      root.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
      root.classList.remove("no-scroll");
    }

    return () => {
      body.classList.remove("no-scroll");
      root.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const closeDesktopMenu = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    closeDesktopMenu();
    mediaQuery.addEventListener("change", closeDesktopMenu);

    return () => mediaQuery.removeEventListener("change", closeDesktopMenu);
  }, []);

  useEffect(() => {
    const updateThemeTogglePosition = () => {
      const footer = document.getElementById("site-footer");
      const footerOverlap = footer
        ? Math.max(0, window.innerHeight - footer.getBoundingClientRect().top)
        : 0;

      setMobileThemeBottomOffset(footerOverlap + 24);
    };

    updateThemeTogglePosition();
    window.addEventListener("scroll", updateThemeTogglePosition, {
      passive: true,
    });
    window.addEventListener("resize", updateThemeTogglePosition);

    return () => {
      window.removeEventListener("scroll", updateThemeTogglePosition);
      window.removeEventListener("resize", updateThemeTogglePosition);
    };
  }, []);

  const toggleMenu = () => setMenuOpen((isOpen) => !isOpen);
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    setMenuOpen(false);
    scrollToSection(href);
  };

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuOpen(false);
    window.history.pushState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 left-0 z-50 bg-[var(--app-bg)]"
      >
        <div className="mx-auto max-w-6xl px-3 sm:px-5 lg:px-6">
          <div className="flex h-18 items-center justify-between sm:h-20">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="flex items-center"
            >
              <Link
                href="#"
                onClick={handleHomeClick}
                className="group flex h-14 w-14 items-center justify-center rounded-lg text-[var(--accent-text)] transition hover:bg-rose-400/10 sm:h-16 sm:w-16"
                title="Back to Home"
                aria-label="Back to home"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center sm:h-16 sm:w-16">
                  <Image
                    src="/GS Logo Design.svg"
                    alt=""
                    width={112}
                    height={112}
                    className="h-24 w-24 max-w-none object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
                    priority
                  />
                </span>
              </Link>
            </motion.div>

            <div className="flex items-center gap-2 md:gap-3">
              {/* Desktop Links */}
              <div className="hidden items-center gap-1 md:flex lg:gap-2">
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
                      onClick={(event) => handleLinkClick(event, link.href)}
                      className="group flex h-10 items-center gap-2 rounded-lg px-2.5 text-sm font-semibold text-[var(--text-muted)] transition-all duration-300 hover:bg-rose-400/10 hover:text-[var(--accent-text)] lg:px-3"
                    >
                      <FontAwesomeIcon
                        icon={link.icon}
                        className="hidden h-4 w-4 lg:block"
                      />
                      <span>{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              <motion.button
                onClick={toggleMenu}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.45, ease: "easeOut" }}
                className="relative z-50 flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-lg border border-rose-400/20 bg-[var(--surface-card-soft)] shadow-sm shadow-black/20 transition-colors duration-300 hover:bg-rose-400/10 md:hidden"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <motion.span
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-0.5 w-6 rounded-full bg-[var(--accent-text)]"
                />
                <motion.span
                  animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? 20 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="block h-0.5 w-6 rounded-full bg-[var(--accent-text)]"
                />
                <motion.span
                  animate={{
                    rotate: menuOpen ? -45 : 0,
                    y: menuOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-0.5 w-6 rounded-full bg-[var(--accent-text)]"
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
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm md:hidden"
                onClick={() => setMenuOpen(false)}
              />

              {/* MOBILE MENU PANEL */}
              <motion.div
                id="mobile-menu"
                key="mobile-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 34,
                  mass: 0.8,
                }}
                className="fixed top-18 right-3 z-40 flex w-[min(20rem,calc(100vw-1.5rem))] flex-col gap-2 rounded-lg border border-rose-400/20 bg-[var(--surface-deep)] p-4 text-[var(--text-strong)] shadow-2xl shadow-black/40 backdrop-blur-md sm:top-20 md:hidden"
                style={{ willChange: "transform" }}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(event) => handleLinkClick(event, link.href)}
                    className="flex h-12 items-center gap-3 rounded-lg px-3 text-base font-semibold transition-colors hover:bg-rose-400/10 hover:text-[var(--accent-text)]"
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

      <div
        className="fixed left-4 z-50 transition-[bottom,opacity,transform] duration-300 ease-out md:hidden"
        style={{ bottom: `${mobileThemeBottomOffset}px` }}
      >
        <ThemeToggle />
      </div>
    </>
  );
}
