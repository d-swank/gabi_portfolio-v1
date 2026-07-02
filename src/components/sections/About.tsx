"use client";

import { motion, AnimatePresence } from "framer-motion";
import { JSX, useLayoutEffect, useRef, useState } from "react";

const tabs = ["About Me", "Education", "Future Goals"] as const;

export default function About() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("About Me");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const activeButton = tabRefs.current[activeTab];
      if (activeButton) {
        const { offsetLeft, offsetWidth } = activeButton;
        setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  const tabContent: Record<(typeof tabs)[number], JSX.Element> = {
    "About Me": (
      <>
        <p className="text-lg font-semibold text-rose-900">
          I&apos;m a fraud-prevention-minded finance professional growing into
          cybersecurity, with a strong instinct for patterns, risk, and people.
        </p>
        <p>
          My background in banking operations taught me how to stay calm in
          high-pressure moments, protect customer trust, and follow the details
          that matter.
        </p>
        <ul className="grid gap-2 text-sm font-semibold text-gray-700 sm:grid-cols-2">
          <li className="rounded-lg border border-rose-100 bg-white/65 px-3 py-2">
            Detail-oriented under pressure
          </li>
          <li className="rounded-lg border border-rose-100 bg-white/65 px-3 py-2">
            Customer-first risk awareness
          </li>
          <li className="rounded-lg border border-rose-100 bg-white/65 px-3 py-2">
            Compliance-minded operations
          </li>
          <li className="rounded-lg border border-rose-100 bg-white/65 px-3 py-2">
            Curious cybersecurity learner
          </li>
        </ul>
      </>
    ),
    Education: (
      <>
        <p>
          My education connects practical technology fundamentals with a growing
          focus on cybersecurity. I started with Information Technology, where
          networking, system security, and hands-on tools made the field click.
        </p>
        <div className="bg-white/75 border border-rose-200 rounded-lg shadow-md p-5 backdrop-blur-md mt-4">
          <h3 className="text-lg font-semibold text-rose-800 mb-3">
            Education Summary
          </h3>
          <ul className="space-y-2 text-gray-800 list-disc list-inside text-sm">
            <li>
              <strong>Associate of Science</strong> in Information Technology,
              2024
            </li>
            <li>
              Currently pursuing <strong>Bachelor&apos;s in Cybersecurity</strong>
            </li>
            <li>
              <strong>Tools:</strong> Wireshark, Cisco Packet Tracer, Linux CLI
            </li>
          </ul>
        </div>
      </>
    ),
    "Future Goals": (
      <>
        <p>
          I&apos;m building toward roles where financial-risk experience and
          cybersecurity skills overlap: cyber risk, compliance, fraud analysis,
          and trust-focused operations.
        </p>
        <p className="mt-4">
          I want to help teams spot suspicious patterns earlier, strengthen
          controls, and communicate risk clearly to the people who need to act.
        </p>
      </>
    ),
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-20 relative overflow-hidden text-center md:text-left"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 font-mono">
        <motion.h2
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-rose-900"
        >
          Fraud Prevention Meets Cyber Risk
        </motion.h2>
        <p className="max-w-md text-base leading-7 text-rose-800 font-sans">
          A portfolio shaped by finance operations, customer trust, and a clear
          move toward cybersecurity.
        </p>
        <div className="grid w-full max-w-md grid-cols-3 gap-3 font-sans">
          {[
            ["Fraud", "Prevention"],
            ["Banking", "Operations"],
            ["Cyber", "Security"],
          ].map(([top, bottom]) => (
            <div
              key={top}
              className="rounded-lg border border-rose-200 bg-white/70 p-4 text-center shadow-sm"
            >
              <p className="text-sm font-bold text-rose-800">{top}</p>
              <p className="text-xs font-semibold text-gray-600">{bottom}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 max-w-xl">
        <div className="relative flex flex-wrap justify-center md:justify-start gap-x-2 border-b border-rose-200 mb-6 text-center font-sans">
          {tabs.map((tab) => (
            <button
              key={tab}
              ref={(el) => {
                tabRefs.current[tab] = el;
              }}
              onClick={() => setActiveTab(tab)}
              className={`relative md:px-4 md:py-2 px-2 py-3 font-medium text-sm md:text-base transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "text-rose-700"
                  : "text-gray-500 hover:text-rose-600"
              }`}
            >
              {tab}
            </button>
          ))}

          <motion.div
            className="absolute bottom-0 h-[2px] bg-rose-500"
            animate={indicatorStyle}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </div>

        <div className="relative min-h-[430px] sm:min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 text-gray-800 space-y-4 text-base text-center md:text-left font-sans"
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-lg bg-rose-700 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-rose-800"
          >
            Let&apos;s Connect
          </motion.a>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-lg border border-rose-300 bg-white/70 px-5 py-3 text-sm font-semibold text-rose-800 shadow-sm hover:bg-white"
          >
            View Experience
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
