"use client";

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
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color mode"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-rose-400/20 bg-[var(--surface-card-soft)] text-[var(--accent-text)] shadow-sm shadow-black/10 transition hover:bg-rose-400/10 hover:text-[var(--accent-strong)]"
    >
      <Sun className="hidden h-5 w-5 dark:block" />
      <Moon className="h-5 w-5 dark:hidden" />
    </button>
  );
}
