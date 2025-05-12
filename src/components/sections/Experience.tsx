"use client";

import { motion } from "framer-motion";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

const experience = [
  {
    company: "LPL Financial",
    date: "Jun 2023 – Present",
    roles: [
      {
        title: "Senior Operations Specialist",
        details: [
          "Supports operational processes with an emphasis on accuracy and compliance.",
          "Collaborates with teams to ensure high-quality service delivery.",
          "Maintains integral attitude and adaptability in a fast-paced environment.",
        ],
      },
    ],
  },
  {
    company: "Axos Bank",
    date: "Sep 2021 – Jun 2023",
    roles: [
      {
        title: "Senior Deposit Ops Specialist - Loss Prevention",
        date: "Dec 2022 – Jun 2023",
        details: [
          "Managed real-time transaction queues to prevent fraudulent activity.",
          "Identified and escalated high-risk accounts and transactions.",
          "Submitted Questionable Activity Reports and maintained compliance.",
        ],
      },
      {
        title: "Senior Processing Specialist",
        date: "Sep 2022 – Dec 2022",
        details: [
          "Performed due diligence on small business account applications.",
          "Ensured compliance with AML/BSA regulations.",
          "Assisted customers with complex account services and transfers.",
        ],
      },
      {
        title: "Processing Specialist",
        date: "Sep 2021 – Sep 2022",
        details: [
          "Reviewed new account applications and documentation.",
          "Ensured compliance with regulatory guidelines and risk tolerance policies.",
        ],
      },
    ],
  },
  {
    company: "Comerica Bank",
    date: "Feb 2020 – Sep 2021",
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

export default function ExperienceTimeline() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section
      id="experience"
      className="min-h-screen px-4 flex flex-col items-center justify-center relative mt-24 md:mt-40"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-rose-900 mb-12 font-mono text-center"
      >
        Professional Experience
      </motion.h2>

      <div className="relative w-full max-w-3xl">
        {!isMobile ? (
          <>
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-rose-600" />
            <div className="space-y-16">
              {experience.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1.2, opacity: 1 }}
                    whileHover={{ scale: 1.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="absolute left-7 top-3 w-3 h-3 border-2 rounded-full bg-pink-100 shadow-md border-rose-600"
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
                    <h3 className="text-2xl font-bold text-rose-900 font-sans">
                      {item.company}
                    </h3>
                    <p className="italic text-sm text-gray-700">{item.date}</p>
                    <div className="space-y-4 font-sans">
                      {item.roles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className="pl-3 border-l-2 border-rose-600"
                        >
                          <h4 className="text-lg font-semibold text-rose-800">
                            {role.title}
                            {"date" in role && role.date && (
                              <span className="text-sm text-gray-600">
                                {" "}
                                ({role.date})
                              </span>
                            )}
                          </h4>
                          <ul className="list-disc list-inside ml-4 text-gray-800">
                            {role.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/70 p-6 rounded-xl shadow-md border border-rose-200"
              >
                <h3 className="text-xl font-bold text-rose-900 mb-1">
                  {item.company}
                </h3>
                <p className="text-sm italic text-gray-600 mb-3">{item.date}</p>
                <div className="space-y-4">
                  {item.roles.map((role, i) => (
                    <div key={i}>
                      <h4 className="text-base font-semibold text-rose-800">
                        {role.title}
                        {"date" in role && role.date && (
                          <span className="text-sm text-gray-600">
                            {" "}
                            ({role.date})
                          </span>
                        )}
                      </h4>
                      <ul className="list-disc list-inside ml-4 text-gray-800 text-sm">
                        {role.details.map((d, j) => (
                          <li key={j}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
