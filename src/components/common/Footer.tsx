"use client";

import { motion } from "framer-motion";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
} from "react-icons/si";

export default function Footer() {
  return (
    <motion.footer
      id="site-footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-12 w-full border-t border-white/10 bg-zinc-950/80 px-3 py-6 text-zinc-300 backdrop-blur-sm sm:px-5 lg:px-6"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1 text-left">
          <p className="text-sm font-semibold text-zinc-200">Gabriela Swank</p>
          <p className="text-xs text-zinc-500">
            Copyright © {new Date().getFullYear()} Gabriela Swank. All rights
            reserved.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-left md:items-end md:text-right">
          <p className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-200">
            Designed & built by Dakota Swank
          </p>
          <div className="flex items-center gap-4 text-xl md:justify-end">
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              title="Next.js"
              aria-label="Next.js"
              className="text-zinc-500 transition hover:text-rose-300"
            >
              <SiNextdotjs />
            </a>
            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              rel="noopener noreferrer"
              title="TypeScript"
              aria-label="TypeScript"
              className="text-zinc-500 transition hover:text-rose-300"
            >
              <SiTypescript />
            </a>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Tailwind CSS"
              aria-label="Tailwind CSS"
              className="text-zinc-500 transition hover:text-rose-300"
            >
              <SiTailwindcss />
            </a>
            <a
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noopener noreferrer"
              title="Framer Motion"
              aria-label="Framer Motion"
              className="text-zinc-500 transition hover:text-rose-300"
            >
              <SiFramer />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
