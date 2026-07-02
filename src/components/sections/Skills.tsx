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
    <section
      id="skills"
      className="min-h-screen px-4 py-20 flex flex-col items-center justify-center relative"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-rose-900 mb-4 font-mono text-center"
      >
        Risk & Security Strengths
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mb-8 max-w-2xl text-center text-rose-800"
      >
        The throughline is practical risk judgment: fraud prevention, banking
        operations, compliance discipline, and growing cybersecurity foundations.
      </motion.p>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-6xl text-center w-full"
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
              className="rounded-lg border border-rose-200 bg-white/75 p-5 text-left shadow-md backdrop-blur"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-800">
                  <Icon size={21} />
                </span>
                <h3 className="text-xl font-semibold text-rose-900 font-sans">
                  {category.title}
                </h3>
              </div>
              <p className="mb-4 text-sm leading-6 text-gray-700">
                {category.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-800 ring-1 ring-rose-100 transition hover:bg-rose-100"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
        {workStyles.map((style) => (
          <motion.div
            key={style.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="rounded-lg border border-rose-200 bg-white/65 p-4 text-center shadow-sm backdrop-blur"
          >
            <BadgeCheck className="mx-auto mb-2 h-5 w-5 text-rose-700" />
            <h3 className="font-semibold text-rose-900">{style.title}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              {style.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
