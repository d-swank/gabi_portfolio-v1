"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const applyTheme = (theme: Theme) => {
  document.documentElement.classList.add("theme-switching");
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  window.requestAnimationFrame(() => {
    document.documentElement.classList.remove("theme-switching");
  });
};

export default function ThemeToggle() {
  const toggleTheme = () => {
    const nextTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";

    applyTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color mode"
      initial={{ opacity: 0, y: -8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-rose-400/20 bg-[var(--surface-card-soft)] text-[var(--accent-text)] shadow-sm shadow-black/10 transition-colors duration-300 hover:bg-rose-400/10 hover:text-[var(--accent-strong)]"
    >
      <Sun className="hidden h-5 w-5 dark:block" />
      <Moon className="h-5 w-5 dark:hidden" />
    </motion.button>
  );
}
