"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Dumbbell,
  HeartPulse,
  Music,
  Plane,
  Radar,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const interestGroups = [
  {
    title: "Active Reset",
    description:
      "Running, fitness, and wellness help me reset, stay consistent, and keep a clear head.",
    icon: HeartPulse,
    tags: ["Running", "Fitness", "Wellness"],
  },
  {
    title: "Curious Input",
    description:
      "Reading, travel, and new environments keep me curious about people, systems, and patterns.",
    icon: BookOpen,
    tags: ["Reading", "Travel", "Learning"],
  },
  {
    title: "Creative Recharge",
    description:
      "Music, shopping, and style give me a more creative way to unwind and notice details.",
    icon: Music,
    tags: ["Music", "Style", "Details"],
  },
  {
    title: "Security Mindset",
    description:
      "I like stories and puzzles that reward observation, strategy, and thinking a few steps ahead.",
    icon: Radar,
    tags: ["Strategy", "Patterns", "Star Wars"],
  },
];

const quickInterests = [
  { label: "Traveling", icon: Plane },
  { label: "Fitness", icon: Dumbbell },
  { label: "Shopping", icon: ShoppingBag },
  { label: "Curiosity", icon: Sparkles },
];

export default function Interests() {
  return (
    <section
      id="interests"
      className="min-h-screen px-4 py-16 sm:px-5 sm:py-20 lg:px-6"
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-6xl flex-col items-center justify-center sm:min-h-[calc(100vh-10rem)]">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[var(--text-strong)] font-mono text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Beyond Work
        </motion.h2>

        <motion.p
          className="text-base leading-7 text-[var(--text-muted)] mb-8 max-w-2xl text-center font-sans sm:text-lg sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          The things I enjoy outside of work still shape how I show up: curious,
          observant, balanced, and detail-aware.
        </motion.p>

        <motion.div
          className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.25,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {interestGroups.map((interest) => {
            const Icon = interest.icon;

            return (
              <motion.div
                key={interest.title}
                variants={{
                  hidden: { opacity: 0, y: 14, scale: 0.98 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="rounded-lg border border-rose-400/20 bg-[var(--surface-card)] p-4 text-left shadow-md shadow-black/30 backdrop-blur sm:p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-rose-400/15 bg-rose-400/10 text-[var(--accent-text)] dark:bg-transparent">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-xl font-semibold text-[var(--text-strong)]">
                    {interest.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-[var(--text-muted)]">
                  {interest.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {interest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-rose-400/15 bg-rose-400/10 px-3 py-1.5 text-xs font-semibold text-[var(--accent-text)] dark:bg-transparent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-8 grid w-full grid-cols-2 gap-3 md:grid-cols-4">
          {quickInterests.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="flex items-center justify-center gap-2 rounded-lg border border-rose-400/20 bg-[var(--surface-card-soft)] px-3 py-3 text-sm font-semibold text-[var(--accent-text)] shadow-sm shadow-black/20"
              >
                <Icon size={17} />
                {item.label}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
