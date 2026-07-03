"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { Download, ExternalLink, X } from "lucide-react";
import { motion } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  closeModalAction: () => void;
};

export default function ResumeModal({ isOpen, closeModalAction }: ModalProps) {
  const resumePath = "/Gabriela_Swank_Resume.pdf";

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
          <div className="fixed inset-0 bg-black/75 backdrop-blur-md" />
        </TransitionChild>

        {/* MODAL WRAPPER */}
        <div className="fixed inset-0 z-[1001] flex items-start justify-center overflow-y-auto p-2 sm:items-center sm:p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="relative my-auto flex h-[calc(100dvh-1rem)] w-full max-w-5xl transform flex-col overflow-hidden rounded-lg border border-rose-400/30 bg-[var(--surface-deep)] p-4 text-center font-sans text-[var(--text-strong)] shadow-2xl shadow-black/50 sm:h-[calc(100dvh-2rem)] sm:p-6">
              {/* CLOSE BUTTON */}
              <button
                onClick={closeModalAction}
                className="absolute top-4 right-4 text-[var(--accent-text)] hover:text-[var(--accent-text)]"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* TITLE */}
              <DialogTitle className="text-2xl sm:text-3xl font-bold font-mono mb-4">
                My Resume
              </DialogTitle>

              <motion.div
                className="mb-4 w-24 h-1 bg-rose-400 rounded-full mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
              />

              {/* RESUME VIEWER */}
              <div className="mb-4 min-h-0 w-full flex-1 overflow-auto rounded-lg border border-rose-400/30 bg-[var(--surface-card)]">
                <iframe
                  src={resumePath}
                  className="h-full w-full"
                  title="Resume PDF Viewer"
                />
              </div>

              {/* DOWNLOAD LINK */}
              <div className="flex shrink-0 flex-col sm:flex-row justify-center gap-3">
                <a
                  href={resumePath}
                  download
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-rose-400 text-zinc-950 rounded-lg hover:bg-rose-400 font-mono font-semibold"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[var(--surface-card)] text-[var(--accent-text)] rounded-lg border border-rose-400/30 hover:bg-rose-400/10 font-mono"
                >
                  <ExternalLink size={18} />
                  Open PDF
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
