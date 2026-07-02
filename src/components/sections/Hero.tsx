"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Download, Mail, ShieldCheck, Sparkles } from "lucide-react";
import ResumeModal from "@/components/common/ResumeModal";

export default function Hero() {
  const [showResume, setShowResume] = useState(false);
  const highlights = [
    "Fraud prevention",
    "Banking operations",
    "Cybersecurity student",
  ];

  return (
    <motion.section
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 pb-14 relative overflow-hidden"
    >
      <div className="relative z-10 grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-300 bg-white/75 px-4 py-2 text-sm font-semibold text-rose-800 shadow-sm backdrop-blur"
          >
            <ShieldCheck size={17} />
            Finance operations meets cybersecurity
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-5 text-rose-950 relative z-10"
          >
            <span className="font-semibold font-sans">Hi, I&apos;m </span>
            <span className="text-rose-800 font-semibold font-mono">
              Gabriela Swank
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl text-rose-800 max-w-3xl mb-7 relative z-10 font-sans"
          >
            I bring fraud prevention, banking operations, and customer-first
            precision into a growing cybersecurity practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mb-8 flex flex-wrap justify-center gap-2 md:justify-start"
          >
            {highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-rose-800 shadow-sm ring-1 ring-rose-200"
              >
                <Sparkles size={15} />
                {highlight}
              </span>
            ))}
          </motion.div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
            <motion.button
              onClick={() => setShowResume(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-rose-700 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:bg-rose-800 sm:w-auto"
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-rose-300 bg-white/75 px-6 py-4 text-lg font-semibold text-rose-800 shadow-sm hover:bg-white sm:w-auto"
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
          className="mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-rose-200 bg-white shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Gabriela Swank"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 360px"
              className="object-cover"
            />
          </div>
          <div className="-mt-8 ml-auto mr-4 relative w-[82%] rounded-lg border border-rose-200 bg-white/90 p-4 text-left shadow-lg backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wide text-rose-700">
              Current focus
            </p>
            <p className="mt-1 text-base font-semibold text-gray-900">
              Cyber risk, compliance, and fraud analysis
            </p>
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
