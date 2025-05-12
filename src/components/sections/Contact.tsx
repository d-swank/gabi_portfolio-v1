"use client";

import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    href: "mailto:gabrielaswank@icloud.com",
    icon: (
      <MdEmail className="w-5 h-5 group-hover:drop-shadow-[0_0_6px_#be123c] transition-all duration-300" />
    ),
    label: "gabrielaswank@icloud.com",
  },
  {
    href: "https://www.linkedin.com/in/gswank/",
    icon: (
      <FaLinkedin className="w-5 h-5 group-hover:drop-shadow-[0_0_6px_#be123c] transition-all duration-300" />
    ),
    label: "LinkedIn",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-4 flex flex-col items-center justify-center relative"
    >
      {/* Title */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold mb-6 text-rose-900 text-center font-mono"
      >
        Let’s Connect
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-lg text-rose-700 mb-8 max-w-xl text-center font-sans"
      >
        Feel free to reach out! I’d love to hear from you.
      </motion.p>

      {/* Contact Links Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.4,
            },
          },
        }}
        className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg flex flex-col gap-4 text-center"
      >
        {contactLinks.map(({ href, icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : "_self"}
            variants={{
              hidden: { opacity: 0, y: 10, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group flex items-center gap-2 justify-center text-rose-700 font-semibold transition-all duration-300 hover:text-rose-900 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-400 after:to-rose-500 after:rounded-full after:transition-all after:duration-500"
          >
            {icon}
            <span className="relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-400 after:to-rose-500 after:rounded-full group-hover:after:w-full after:transition-all after:duration-500">
              {label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
