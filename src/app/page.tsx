"use client";

import { useEffect } from "react";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Interests from "@/components/sections/Interests";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/common/Footer";
import BackToTopButton from "@/components/common/BackToTopButton";

export default function Portfolio() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollHomeToTop = () => {
      if (window.location.hash) return;

      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
    };

    scrollHomeToTop();
    window.addEventListener("pageshow", scrollHomeToTop);

    return () => window.removeEventListener("pageshow", scrollHomeToTop);
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Interests />
      <Contact />
      <Footer />
      <BackToTopButton />
    </main>
  );
}
