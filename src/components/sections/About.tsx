"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useLayoutEffect, useState, JSX } from "react";

const tabs = ["About Me", "Education", "Future Goals"] as const;

export default function About() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("About Me");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const activeButton = tabRefs.current[activeTab];
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  const tabContent: Record<(typeof tabs)[number], JSX.Element> = {
    "About Me": (
      <>
        <p>
          I’m a finance professional with a strong foundation in customer
          service, fraud prevention, and banking operations, developed through
          years of hands-on experience in high-pressure environments. I’ve
          supported clients with everything from day-to-day transactions to
          complex issue resolution, all while maintaining regulatory compliance
          and security protocols. Over the years, I’ve developed a keen eye for
          detail, a calm and focused approach under pressure, and a deep
          commitment to integrity. I thrive in roles that demand both analytical
          rigor and empathy — blending operational efficiency with genuine care
          for customer outcomes.
        </p>
      </>
    ),
    Education: (
      <>
        <p>
          My educational path reflects a growing passion for digital security. I
          began with an Associate’s degree in Information Technology, where I
          explored networking, system security, and tools like Wireshark and
          Cisco Packet Tracer — sparking my interest in cybersecurity.
        </p>
        <div className="bg-white/70 border border-rose-200 rounded-lg shadow-md p-5 backdrop-blur-md mt-4">
          <h3 className="text-lg font-semibold text-rose-800 mb-3">
            Education Summary
          </h3>
          <ul className="space-y-2 text-gray-800 list-disc list-inside text-sm">
            <li>
              <strong>Associate of Science</strong> in Information Technology,
              2024
            </li>
            <li>
              Currently pursuing <strong>Bachelor’s in Cybersecurity</strong>
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
          I’m focused on blending my financial background with cybersecurity
          skills — aiming to contribute in areas like cyber risk, compliance, or
          fraud analysis. I approach challenges with curiosity, resilience, and
          a genuine passion for continuous growth.
        </p>
        <p className="mt-4">
          I’m always open to learning, collaborating, and exploring new
          opportunities.
        </p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-block px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-center shadow-md"
        >
          Let’s Connect!
        </motion.a>
      </>
    ),
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 relative overflow-hidden text-center md:text-left"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 font-mono">
        <motion.h2
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-rose-900"
        >
          Passion Meets Purpose
        </motion.h2>
      </div>

      {/* Right Side: Tabs */}
      <div className="w-full md:w-1/2 max-w-xl">
        {/* Fixed Tab Buttons */}
        <div className="relative flex flex-wrap justify-center md:justify-start space-x-2 border-b border-gray-200 mb-6 text-center font-sans">
          {tabs.map((tab) => (
            <button
              key={tab}
              ref={(el) => {
                tabRefs.current[tab] = el;
              }}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-2 font-medium text-lg md:text-base transition-all duration-300 cursor-pointer ${
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

        {/* Animated Content Box */}
        <div className="relative min-h-[300px]">
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
      </div>
    </motion.section>
  );
}
