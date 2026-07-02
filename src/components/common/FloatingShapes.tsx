"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-[linear-gradient(135deg,#ffe4e6_0%,#fff1f2_42%,#f0fdfa_100%)]">
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(#be123c22_1px,transparent_1px),linear-gradient(90deg,#0f766e22_1px,transparent_1px)] [background-size:56px_56px]" />
      <motion.div
        className="absolute inset-x-[-20%] top-24 h-24 rotate-[-8deg] bg-rose-300/20 blur-xl"
        animate={{ x: ["-8%", "8%", "-8%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-x-[-20%] bottom-32 h-20 rotate-[7deg] bg-red-300/20 blur-xl"
        animate={{ x: ["8%", "-8%", "8%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
