"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  closeModalAction: () => void;
};

export default function ResumeModal({ isOpen, closeModalAction }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[1000]" onClose={closeModalAction}>
        {/* BACKDROP */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-md" />
        </TransitionChild>

        {/* MODAL WRAPPER */}
        <div className="fixed inset-0 flex items-center justify-center p-4 z-[1001]">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="w-full max-w-4xl relative transform overflow-hidden rounded-2xl bg-gradient-to-r from-white via-pink-100 to-rose-100 dark:from-neutral-700 dark:to-neutral-800 text-rose-900 dark:text-white p-6 shadow-2xl border border-rose-400 font-sans text-center">
              {/* CLOSE BUTTON */}
              <button
                onClick={closeModalAction}
                className="absolute top-4 right-4 text-rose-700 dark:text-white hover:text-rose-900 dark:hover:text-rose-400"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* TITLE */}
              <DialogTitle className="text-2xl sm:text-3xl font-bold font-mono mb-4">
                My Resume
              </DialogTitle>

              <motion.div
                className="mb-6 w-24 h-1 bg-rose-500 rounded-full mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
              />

              {/* RESUME VIEWER */}
              <div className="w-full h-[60vh] sm:h-[75vh] overflow-auto border rounded-lg border-rose-300 dark:border-rose-600 mb-4">
                <iframe
                  src="/Gabriela_Swank_Resume.pdf"
                  className="w-full h-full"
                  title="Resume PDF Viewer"
                ></iframe>
              </div>

              {/* DOWNLOAD LINK */}
              <a
                href="/Gabriela_Swank_Resume.pdf"
                download
                className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 font-mono mx-auto"
              >
                Download Resume
              </a>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
