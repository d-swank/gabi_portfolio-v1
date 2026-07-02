"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, Linkedin, Mail } from "lucide-react";

const contactActions = [
  {
    title: "Email",
    description: "Start a direct conversation.",
    href: "mailto:gabrielaswank@icloud.com",
    label: "gabrielaswank@icloud.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    description: "Connect professionally.",
    href: "https://www.linkedin.com/in/gswank/",
    label: "View profile",
    icon: Linkedin,
  },
  {
    title: "Resume",
    description: "Download or review the latest resume.",
    href: "/Gabriela_Swank_Resume.pdf",
    label: "Open resume",
    icon: Download,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-4 py-16 sm:px-5 sm:py-20 lg:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-6xl flex-col items-center justify-center sm:min-h-[calc(100vh-10rem)]">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-zinc-100 text-center font-mono"
        >
          Ready to Connect
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-base leading-7 text-zinc-300 mb-8 max-w-2xl text-center font-sans sm:text-lg sm:mb-10"
        >
          Open to conversations around fraud prevention, cyber risk, compliance,
          and customer-trust focused operations.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.25,
              },
            },
          }}
          className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
        >
          {contactActions.map(
            ({ title, description, href, label, icon: Icon }) => {
              const isExternal = href.startsWith("http");
              const isResume = href.endsWith(".pdf");

              return (
                <motion.a
                  key={title}
                  href={href}
                  target={isExternal || isResume ? "_blank" : "_self"}
                  rel={
                    isExternal || isResume ? "noopener noreferrer" : undefined
                  }
                  variants={{
                    hidden: { opacity: 0, y: 12, scale: 0.98 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="group rounded-lg border border-rose-400/20 bg-zinc-900/75 p-4 text-left shadow-md shadow-black/30 backdrop-blur transition hover:border-rose-400/40 hover:bg-zinc-900 sm:p-5"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-rose-400/10 text-rose-300">
                      <Icon size={22} />
                    </span>
                    <ExternalLink
                      size={18}
                      className="text-rose-300/70 transition group-hover:translate-x-0.5 group-hover:text-rose-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    {description}
                  </p>
                  <p className="mt-4 break-words text-sm font-semibold text-rose-300">
                    {label}
                  </p>
                </motion.a>
              );
            },
          )}
        </motion.div>
      </div>
    </section>
  );
}
