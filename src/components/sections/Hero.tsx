"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ResumeModal from "@/components/common/ResumeModal";

export default function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <motion.section
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
    >
      {/* Greeting */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold mb-4 text-gray-50 relative z-10"
      >
        <span className="drop-shadow-lg font-semibold font-sans">Hi, I’m </span>
        <span className="text-rose-800 font-semibold drop-shadow-lg font-mono">
          Gabriela Swank
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        className="text-xl md:text-2xl text-rose-700 drop-shadow-lg max-w-3xl mb-8 relative z-10 font-sans"
      >
        With a background in finance and a future in cybersecurity, I’m all
        about chasing fraud, dodging threats, and outsmarting the bad guys.
      </motion.p>

      {/* Resume Button */}
      <motion.button
        onClick={() => setShowResume(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 rounded-xl bg-white shadow-lg text-lg font-semibold relative z-10 cursor-pointer text-rose-700 group"
      >
        <span className="drop-shadow-lg flex items-center gap-2 font-sans">
          View My Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            width="20"
            height="20"
            className="text-rose-700 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0L17 8.586a1 1 0 010 1.414l-5.293 5.293a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </motion.button>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={showResume}
        closeModalAction={() => setShowResume(false)}
      />
    </motion.section>
  );
}
