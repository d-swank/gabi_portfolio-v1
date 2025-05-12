"use client";

import { motion } from "framer-motion";
import {
  FaRunning,
  FaPlane,
  FaBook,
  FaMusic,
  FaSpa,
  FaDumbbell,
  FaJedi,
  FaShoppingBag,
} from "react-icons/fa";

export default function Interests() {
  const interests = [
    { icon: <FaRunning className="w-8 h-8 text-rose-700" />, label: "Running" },
    { icon: <FaPlane className="w-8 h-8 text-rose-700" />, label: "Traveling" },
    { icon: <FaBook className="w-8 h-8 text-rose-700" />, label: "Reading" },
    { icon: <FaSpa className="w-8 h-8 text-rose-700" />, label: "Wellness" },
    { icon: <FaMusic className="w-8 h-8 text-rose-700" />, label: "Music" },
    {
      icon: <FaDumbbell className="w-8 h-8 text-rose-700" />,
      label: "Fitness",
    },
    { icon: <FaJedi className="w-8 h-8 text-rose-700" />, label: "Star Wars" },
    {
      icon: <FaShoppingBag className="w-8 h-8 text-rose-700" />,
      label: "Shopping",
    },
  ];

  return (
    <section
      id="interests"
      className="min-h-screen px-4 flex flex-col items-center justify-center relative mt-24 md:mt-40"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-rose-900 font-mono text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Interests
      </motion.h2>

      <motion.p
        className="text-lg text-rose-700 mb-8 max-w-xl text-center font-sans"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        A few things that bring me joy...
      </motion.p>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.4,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center gap-2 text-rose-900 cursor-default group transition-transform duration-300 ease-out"
          >
            <div className="transition-all duration-300 ease-out group-hover:drop-shadow-[0_0_6px_#be123c]">
              {interest.icon}
            </div>
            <span className="font-semibold font-sans text-center text-sm md:text-base">
              {interest.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute bottom-10 left-10 w-40 h-40 bg-rose-200 rounded-full opacity-30 blur-2xl hidden md:block" />
    </section>
  );
}
