"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      router.push("/portfolio");
    }, 4300); // Slightly longer than the 4-second zoom
  };

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center overflow-visable relative text-rose-800"
    >
      {/* Dark overlay for depth (still very subtle) */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={clicked ? { opacity: 0 } : { opacity: 0 }}
        transition={{ duration: 20 }}
      />

      {/* Main heading */}
      <motion.h1
        animate={clicked ? { scale: 8, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{
          duration: 4,
          ease: "linear",
        }}
        className="text-5xl font-bold mb-8 text-center relative z-10"
      >
        <span className="drop-shadow-lg font-semibold">
          This isn’t just a portfolio — it’s a statement.
        </span>
      </motion.h1>

      {/* Button */}
      {!clicked && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="px-8 py-4 rounded-xl bg-white shadow-lg text-lg font-semibold relative z-10 cursor-pointer"
        >
          <span className="drop-shadow-lg">Explore ✨</span>
        </motion.button>
      )}
    </motion.main>
  );
}
