"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Download, Mail, ShieldCheck } from "lucide-react";
import ResumeModal from "@/components/common/ResumeModal";
import { scrollToSection } from "@/lib/scrollToSection";

export default function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <motion.section
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 relative overflow-hidden sm:px-5 sm:pt-28 sm:pb-14 lg:px-6"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-[var(--surface-card)] px-3 py-2 text-xs font-semibold text-[var(--accent-text)] shadow-sm shadow-black/20 backdrop-blur sm:px-4 sm:text-sm"
          >
            <ShieldCheck size={17} />
            Cybersecurity portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="text-4xl font-bold mb-5 text-[var(--text-strong)] relative z-10 sm:text-5xl md:text-7xl"
          >
            <span className="font-semibold font-sans">Hi, I&apos;m </span>
            <span className="text-[var(--accent-text)] font-semibold font-sans">
              Gabriela Swank
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="mx-auto text-lg leading-8 text-[var(--text-muted)] max-w-3xl mb-8 relative z-10 font-sans sm:text-xl md:text-2xl"
          >
            Building a security-minded path through analysis, precision, and
            calm problem solving.
          </motion.p>

          <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:justify-center">
            <motion.button
              onClick={() => setShowResume(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-rose-400 px-3 py-3 text-center text-sm font-semibold text-zinc-950 shadow-lg shadow-rose-950/30 hover:bg-rose-400 sm:w-auto sm:px-6 sm:py-4 sm:text-lg"
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              View Resume
              <ArrowRight
                className="hidden h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:block"
              />
            </motion.button>
            <motion.a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("#contact");
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-rose-400/30 bg-[var(--surface-card)] px-3 py-3 text-center text-sm font-semibold text-[var(--accent-text)] shadow-sm shadow-black/20 hover:bg-rose-400/10 sm:w-auto sm:px-6 sm:py-4 sm:text-lg"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              Contact Me
            </motion.a>
          </div>
        </div>
      </div>

      <ResumeModal
        isOpen={showResume}
        closeModalAction={() => setShowResume(false)}
      />
    </motion.section>
  );
}
