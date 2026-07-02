"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Download,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import ResumeModal from "@/components/common/ResumeModal";

export default function Hero() {
  const [showResume, setShowResume] = useState(false);
  const terminalLines = [
    "identity.check()",
    "risk.signal.scan()",
    "access.granted",
  ];

  return (
    <motion.section
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 relative overflow-hidden sm:px-5 sm:pt-28 sm:pb-14 lg:px-6"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-zinc-900/80 px-3 py-2 text-xs font-semibold text-rose-300 shadow-sm shadow-black/20 backdrop-blur sm:px-4 sm:text-sm"
          >
            <ShieldCheck size={17} />
            Cybersecurity portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="text-4xl font-bold mb-5 text-zinc-100 relative z-10 sm:text-5xl md:text-7xl"
          >
            <span className="font-semibold font-sans">Hi, I&apos;m </span>
            <span className="text-rose-300 font-semibold font-mono">
              Gabriela Swank
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="text-lg leading-8 text-zinc-300 max-w-3xl mb-8 relative z-10 font-sans sm:text-xl md:text-2xl"
          >
            Building a security-minded path through analysis, precision, and
            calm problem solving.
          </motion.p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
            <motion.button
              onClick={() => setShowResume(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-rose-400 px-5 py-3.5 text-base font-semibold text-zinc-950 shadow-lg shadow-rose-950/30 hover:bg-rose-400 sm:w-auto sm:px-6 sm:py-4 sm:text-lg"
            >
              <Download size={20} />
              View Resume
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-rose-400/30 bg-zinc-900/80 px-5 py-3.5 text-base font-semibold text-rose-200 shadow-sm shadow-black/20 hover:bg-rose-400/10 sm:w-auto sm:px-6 sm:py-4 sm:text-lg"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="mx-auto w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-lg border border-rose-400/20 bg-zinc-900/75 p-4 text-left shadow-xl shadow-black/40 backdrop-blur sm:p-6">
            <div className="mb-6 flex items-center justify-between border-b border-rose-400/10 pb-4">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-rose-300">
                <Terminal size={16} />
                Secure session
              </div>
              <span className="rounded-full border border-rose-400/20 px-3 py-1 font-mono text-xs text-rose-200">
                live
              </span>
            </div>

            <div className="relative mx-auto my-6 flex h-40 w-40 items-center justify-center rounded-full border border-rose-400/20 bg-zinc-950/50 shadow-inner shadow-black/50 sm:my-8 sm:h-48 sm:w-48">
              <div className="absolute inset-5 rounded-full border border-rose-400/10" />
              <div className="absolute inset-11 rounded-full border border-rose-400/15" />
              <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-rose-400/30 bg-rose-400/10 text-rose-300 shadow-lg shadow-rose-950/20">
                <LockKeyhole size={34} />
              </div>
            </div>

            <div className="space-y-2 rounded-lg border border-rose-400/15 bg-zinc-950/50 p-4 font-mono text-sm">
              {terminalLines.map((line, index) => (
                <div key={line} className="flex items-center gap-3">
                  <span className="text-rose-300">
                    {index === terminalLines.length - 1 ? ">" : "$"}
                  </span>
                  <span className="text-zinc-300">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <ResumeModal
        isOpen={showResume}
        closeModalAction={() => setShowResume(false)}
      />
    </motion.section>
  );
}
