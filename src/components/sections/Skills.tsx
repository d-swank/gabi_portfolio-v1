"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  FileSearch,
  Landmark,
  Network,
  ShieldAlert,
} from "lucide-react";

const categories = [
  {
    title: "Fraud & Risk Detection",
    icon: ShieldAlert,
    description:
      "Spotting suspicious activity, escalating risk, and protecting customer trust.",
    skills: [
      "Transaction Monitoring",
      "Fraud Pattern Recognition",
      "High-Risk Escalations",
      "Questionable Activity Reports",
    ],
  },
  {
    title: "Banking Operations",
    icon: Landmark,
    description:
      "Hands-on operational experience with sensitive financial workflows.",
    skills: [
      "ACH & Wire Transfers",
      "Deposit Operations",
      "Document Verification",
      "Account Application Review",
    ],
  },
  {
    title: "Compliance Mindset",
    icon: FileSearch,
    description:
      "Careful review habits shaped by procedure, documentation, and regulation.",
    skills: [
      "AML/BSA Compliance",
      "Due Diligence",
      "Regulatory Procedures",
      "Audit-Ready Accuracy",
    ],
  },
  {
    title: "Cybersecurity Foundations",
    icon: Network,
    description:
      "Technical building blocks for moving from financial risk into cyber risk.",
    skills: [
      "Wireshark",
      "Cisco Packet Tracer",
      "Linux CLI",
      "System Security Basics",
    ],
  },
];

const workStyles = [
  {
    title: "Pattern Recognition",
    description: "Noticing unusual behavior, edge cases, and signals of risk.",
  },
  {
    title: "Clear Documentation",
    description: "Capturing decisions and details so the next action is easier.",
  },
  {
    title: "Calm Communication",
    description: "Handling sensitive customer and operational moments with care.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-4 py-16 sm:px-5 sm:py-20 lg:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-6xl flex-col items-center justify-center sm:min-h-[calc(100vh-10rem)]">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-strong)] mb-4 font-mono text-center"
        >
          Risk & Security Strengths
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-7 max-w-2xl text-center text-base leading-7 text-[var(--text-muted)] sm:mb-8"
        >
          The throughline is practical risk judgment: fraud prevention, banking
          operations, compliance discipline, and growing cybersecurity foundations.
        </motion.p>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 text-center w-full"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                layout
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-lg border border-rose-400/20 bg-[var(--surface-card)] p-4 text-left shadow-md shadow-black/30 backdrop-blur sm:p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-rose-400/15 bg-rose-400/10 text-[var(--accent-text)] dark:bg-transparent">
                    <Icon size={21} />
                  </span>
                  <h3 className="text-xl font-semibold text-[var(--text-strong)] font-sans">
                    {category.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm leading-6 text-[var(--text-muted)]">
                  {category.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-rose-400/15 bg-rose-400/10 px-3 py-2 text-sm font-semibold text-[var(--accent-text)] transition hover:bg-rose-400/15 dark:bg-transparent dark:hover:bg-rose-400/5"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-8 grid w-full grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {workStyles.map((style) => (
            <motion.div
              key={style.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="flex items-start gap-3 border-b border-rose-400/10 px-1 py-3 text-left last:border-b-0 md:block md:rounded-lg md:border md:border-rose-400/20 md:bg-[var(--surface-card-soft)] md:p-4 md:text-center md:shadow-sm md:shadow-black/20 md:backdrop-blur"
            >
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-text)] md:mx-auto md:mb-2 md:mt-0" />
              <div>
                <h3 className="font-semibold text-[var(--text-strong)]">
                  {style.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-[var(--text-muted)] md:mt-2">
                  {style.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
