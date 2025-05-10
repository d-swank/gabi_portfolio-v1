"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

type ModalProps = {
  show: boolean;
  onCloseAction: () => void;
  title?: string;
  children?: React.ReactNode; // 👈 Add this line
};

export default function Modal({ show, onCloseAction, title }: ModalProps) {
  useEffect(() => {
    if (show) {
      document.body.classList.add("no-scroll");
      document.documentElement.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* MODAL CONTENT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative flex items-center justify-center min-h-screen px-4"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-pink-100 rounded-xl shadow-xl max-w-3xl w-full relative p-6 mb-20"
        >
          <button
            onClick={onCloseAction}
            className="absolute top-4 right-4 text-rose-700 font-bold text-xl cursor-pointer"
          >
            ×
          </button>

          {title && (
            <h2 className="text-2xl font-semibold mb-4 text-rose-800">
              {title}
            </h2>
          )}

          {/* Resume content */}
          <div className="w-full h-[60vh] sm:h-[75vh] overflow-auto rounded-lg shadow-lg">
            <iframe
              src="/Gabriela_Swank_Resume.pdf"
              title="Gabriela Swank Resume"
              className="w-full h-full border rounded"
            />
          </div>

          {/* Fallback download link */}
          <div className="text-center mt-4">
            <a
              href="/Gabriela_Swank_Resume.pdf"
              download
              className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg shadow hover:bg-rose-700 transition"
            >
              Download PDF
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
