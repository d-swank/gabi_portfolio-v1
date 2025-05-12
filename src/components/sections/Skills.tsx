"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "Core Skills",
      skills: [
        "Customer Service Excellence",
        "Fraud Prevention & Loss Mitigation",
        "Banking Operations",
        "Compliance & Risk Management",
      ],
    },
    {
      title: "Technical Knowledge",
      skills: [
        "AML/BSA Compliance",
        "ACH & Wire Transfers",
        "Document Verification",
        "Online Banking Systems",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Organization & Attention to Detail",
        "Adaptability",
        "Team Collaboration",
        "Problem-Solving",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-4 flex flex-col items-center justify-center relative mt-24 md:mt-40"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-rose-900 mb-12 font-mono text-center"
      >
        Skills & Strengths
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl text-center w-full">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-rose-800 mb-2 font-sans">
              {cat.title}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2">
              {cat.skills.map((skill, i) => (
                <li
                  key={i}
                  className="bg-white/70 rounded-full px-4 py-2 shadow border border-transparent hover:border-rose-500 hover:text-rose-700 hover:bg-rose-100 hover:scale-105 transition-all duration-300 font-sans text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
