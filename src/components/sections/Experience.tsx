"use client";

import { motion } from "framer-motion";

const experience = [
  {
    company: "LPL Financial",
    date: "Jun 2023 - Present",
    roles: [
      {
        title: "Senior Operations Specialist",
        details: [
          "Supports operational processes with an emphasis on accuracy and compliance.",
          "Collaborates with teams to ensure high-quality service delivery.",
          "Maintains integrity and adaptability in a fast-paced environment.",
        ],
      },
    ],
  },
  {
    company: "Axos Bank",
    date: "Sep 2021 - Jun 2023",
    roles: [
      {
        title: "Senior Deposit Ops Specialist - Loss Prevention",
        date: "Dec 2022 - Jun 2023",
        details: [
          "Managed real-time transaction queues to prevent fraudulent activity.",
          "Identified and escalated high-risk accounts and transactions.",
          "Submitted Questionable Activity Reports and maintained compliance.",
        ],
      },
      {
        title: "Senior Processing Specialist",
        date: "Sep 2022 - Dec 2022",
        details: [
          "Performed due diligence on small business account applications.",
          "Ensured compliance with AML/BSA regulations.",
          "Assisted customers with complex account services and transfers.",
        ],
      },
      {
        title: "Processing Specialist",
        date: "Sep 2021 - Sep 2022",
        details: [
          "Reviewed new account applications and documentation.",
          "Ensured compliance with regulatory guidelines and risk tolerance policies.",
        ],
      },
    ],
  },
  {
    company: "Comerica Bank",
    date: "Feb 2020 - Sep 2021",
    roles: [
      {
        title: "Vault CSR",
        details: [
          "Processed deposits, withdrawals, and loan payments.",
          "Balanced and audited ATM/TCR and maintained the cash vault.",
          "Assisted customers with online banking and recommended financial products.",
        ],
      },
    ],
  },
];

type Role = (typeof experience)[number]["roles"][number];

function RoleDetails({
  role,
  compact = false,
}: {
  role: Role;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "" : "pl-3 border-l-2 border-rose-400/70"}>
      <h4
        className={
          compact
            ? "text-base font-semibold text-rose-200"
            : "text-lg font-semibold text-rose-200"
        }
      >
        {role.title}
        {"date" in role && role.date && (
          <span className="text-sm text-zinc-400"> ({role.date})</span>
        )}
      </h4>
      <ul
        className={
          compact
            ? "list-disc list-inside ml-4 text-zinc-300 text-sm"
            : "list-disc list-inside ml-4 text-zinc-300"
        }
      >
        {role.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="min-h-screen px-4 py-16 sm:px-5 sm:py-20 lg:px-6"
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-6xl flex-col items-center justify-center sm:min-h-[calc(100vh-10rem)]">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 mb-10 sm:mb-12 font-mono text-center"
        >
          Professional Experience
        </motion.h2>

        <div className="relative mx-auto w-full max-w-3xl">
          <div className="hidden md:block">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-rose-400" />
            <div className="space-y-16">
              {experience.map((item, index) => (
                <div key={item.company} className="relative flex items-start">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1.2, opacity: 1 }}
                    whileHover={{ scale: 1.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="absolute left-7 top-3 w-3 h-3 border-2 rounded-full bg-zinc-950 shadow-md shadow-rose-950/40 border-rose-400"
                  />
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="ml-16 space-y-4"
                  >
                    <h3 className="text-2xl font-bold text-zinc-100 font-sans">
                      {item.company}
                    </h3>
                    <p className="italic text-sm text-zinc-400">{item.date}</p>
                    <div className="space-y-4 font-sans">
                      {item.roles.map((role) => (
                        <RoleDetails key={role.title} role={role} />
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 md:hidden">
            {experience.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900/75 p-4 rounded-lg shadow-md shadow-black/30 border border-rose-400/20"
              >
                <h3 className="text-xl font-bold text-zinc-100 mb-1">
                  {item.company}
                </h3>
                <p className="text-sm italic text-zinc-400 mb-3">
                  {item.date}
                </p>
                <div className="space-y-4">
                  {item.roles.map((role) => (
                    <RoleDetails key={role.title} role={role} compact />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
