"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
} from "react-icons/si";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-6 text-center text-rose-800 font-medium border-t border-rose-600 mt-12 space-y-2 bg-gradient-to-r from-pink-200 to-rose-100 backdrop-blur-sm"
    >
      <p className="text-sm">
        Copyright © {new Date().getFullYear()} Gabriela Swank. All rights
        reserved.
      </p>

      <p className="text-sm text-rose-700 transition inline-flex items-center gap-1">
        Designed & built with love by Dakota Swank
        <FaHeart className="text-rose-700" />
      </p>
      <div className="flex justify-center items-center flex-wrap gap-4 text-xl mt-4">
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          title="Next.js"
          className="hover:text-indigo-600 dark:hover:text-white"
        >
          <SiNextdotjs />
        </a>
        <a
          href="https://www.typescriptlang.org"
          target="_blank"
          rel="noopener noreferrer"
          title="TypeScript"
          className="text-blue-600 dark:text-blue-400 hover:text-indigo-600 dark:hover:text-white"
        >
          <SiTypescript />
        </a>
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Tailwind CSS"
          className="text-teal-600 dark:text-teal-400 hover:text-indigo-600 dark:hover:text-white"
        >
          <SiTailwindcss />
        </a>
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noopener noreferrer"
          title="Framer Motion"
          className="text-pink-600 dark:text-pink-400 hover:text-indigo-600 dark:hover:text-white"
        >
          <SiFramer />
        </a>
      </div>
    </motion.footer>
  );
}
