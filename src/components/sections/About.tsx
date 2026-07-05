"use client";

import { motion, AnimatePresence } from "framer-motion";
import { JSX, useLayoutEffect, useRef, useState } from "react";
import { scrollToSection } from "@/lib/scrollToSection";

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
        <p className="text-lg font-semibold text-[var(--accent-text)]">
          I&apos;m a fraud-prevention-minded finance professional growing into
          cybersecurity, with a strong instinct for patterns, risk, and people.
        </p>
        <p>
          My background in banking operations taught me how to stay calm in
          high-pressure moments, protect customer trust, and follow the details
          that matter.
        </p>
        <ul className="grid gap-2 text-sm font-semibold text-[var(--text-muted)] sm:grid-cols-2">
          <li className="flex items-start gap-2 border-b border-rose-400/10 py-2 text-left last:border-b-0 sm:rounded-lg sm:border sm:border-rose-400/15 sm:bg-[var(--surface-card-soft)] sm:px-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
            Detail-oriented under pressure
          </li>
          <li className="flex items-start gap-2 border-b border-rose-400/10 py-2 text-left last:border-b-0 sm:rounded-lg sm:border sm:border-rose-400/15 sm:bg-[var(--surface-card-soft)] sm:px-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
            Customer-first risk awareness
          </li>
          <li className="flex items-start gap-2 border-b border-rose-400/10 py-2 text-left last:border-b-0 sm:rounded-lg sm:border sm:border-rose-400/15 sm:bg-[var(--surface-card-soft)] sm:px-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
            Compliance-minded operations
          </li>
          <li className="flex items-start gap-2 border-b border-rose-400/10 py-2 text-left last:border-b-0 sm:rounded-lg sm:border sm:border-rose-400/15 sm:bg-[var(--surface-card-soft)] sm:px-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
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
        <div className="bg-[var(--surface-card)] border border-rose-400/20 rounded-lg shadow-md shadow-black/20 p-5 backdrop-blur-md mt-4">
          <h3 className="text-lg font-semibold text-[var(--accent-text)] mb-3">
            Education Summary
          </h3>
          <ul className="space-y-2 text-[var(--text-muted)] list-disc list-inside text-sm">
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
      style={{ overflowAnchor: "none" }}
      className="min-h-screen px-4 py-16 relative overflow-hidden sm:px-5 sm:py-20 lg:px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-6xl flex-col items-center justify-center gap-8 text-center sm:min-h-[calc(100vh-10rem)] md:flex-row md:text-left">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6 font-mono">
          <motion.h2
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl font-bold text-[var(--text-strong)] sm:text-4xl md:text-6xl"
          >
            Fraud Prevention Meets Cyber Risk
          </motion.h2>
          <p className="max-w-md text-base leading-7 text-[var(--text-muted)] font-sans">
            A portfolio shaped by finance operations, customer trust, and a clear
            move toward cybersecurity.
          </p>
          <div className="grid w-full max-w-md grid-cols-3 gap-2 font-sans sm:gap-3">
            {[
              ["Fraud", "Prevention"],
              ["Banking", "Operations"],
              ["Cyber", "Security"],
            ].map(([top, bottom]) => (
              <div
                key={top}
                className="rounded-lg border border-rose-400/20 bg-[var(--surface-card)] p-3 text-center shadow-sm shadow-black/20 sm:p-4"
              >
                <p className="text-sm font-bold text-[var(--accent-text)]">{top}</p>
                <p className="text-xs font-semibold text-[var(--text-soft)]">{bottom}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-xl">
          <div className="relative mb-6 grid grid-cols-3 overflow-hidden rounded-lg border border-rose-400/20 bg-[var(--surface-card-soft)] p-1 text-center font-sans shadow-sm shadow-black/10 md:flex md:flex-wrap md:justify-start md:gap-x-1 md:overflow-visible md:rounded-none md:border-x-0 md:border-t-0 md:bg-transparent md:p-0 md:shadow-none">
            {tabs.map((tab) => (
              <button
                key={tab}
                ref={(el) => {
                  tabRefs.current[tab] = el;
                }}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 min-h-11 rounded-md px-2 py-2 text-xs font-semibold transition-all duration-300 cursor-pointer sm:px-3 sm:text-sm md:min-h-0 md:rounded-none md:px-4 md:py-2 md:text-base ${
                  activeTab === tab
                    ? "bg-rose-400/10 text-[var(--accent-text)] md:bg-transparent"
                    : "text-[var(--text-soft)] hover:text-[var(--accent-text)]"
                }`}
              >
                {tab}
              </button>
            ))}

            <motion.div
              className="hidden absolute bottom-0 h-[2px] bg-rose-400 md:block"
              animate={indicatorStyle}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>

          <div className="relative min-h-[20rem] sm:min-h-[16rem] md:min-h-[18rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-[var(--text-muted)] space-y-4 text-base text-center md:text-left font-sans"
              >
                {tabContent[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:justify-center md:justify-start">
            <motion.a
              href="https://www.linkedin.com/in/gswank/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-rose-400 px-3 py-3 text-center text-sm font-semibold text-zinc-950 shadow-md shadow-rose-950/30 hover:bg-rose-400 sm:px-5"
            >
              Let&apos;s Connect
            </motion.a>
            <motion.a
              href="#experience"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("#experience");
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-rose-400/30 bg-[var(--surface-card)] px-3 py-3 text-center text-sm font-semibold text-[var(--accent-text)] shadow-sm shadow-black/20 hover:bg-rose-400/10 sm:px-5"
            >
              View Experience
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
