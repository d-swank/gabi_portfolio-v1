"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(24);

  useEffect(() => {
    const updateButtonPosition = () => {
      const footer = document.getElementById("site-footer");
      const footerOverlap = footer
        ? Math.max(0, window.innerHeight - footer.getBoundingClientRect().top)
        : 0;

      setIsVisible(window.scrollY > 300);
      setBottomOffset(footerOverlap + 24);
    };

    updateButtonPosition();
    window.addEventListener("scroll", updateButtonPosition, { passive: true });
    window.addEventListener("resize", updateButtonPosition);

    return () => {
      window.removeEventListener("scroll", updateButtonPosition);
      window.removeEventListener("resize", updateButtonPosition);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{ bottom: `${bottomOffset}px` }}
      className={`fixed right-[max(1rem,calc((100vw-72rem)/2))] z-50 rounded-full p-2.5 sm:p-3
        bg-gradient-to-br from-rose-400 to-rose-600
        backdrop-blur-sm
        text-zinc-950
        border border-rose-300/60
        shadow-md shadow-black/30
        hover:scale-105 hover:shadow-lg
        transition-transform duration-500 ease-in-out
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8 pointer-events-none"
        } cursor-pointer
      `}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
    </button>
  );
}
