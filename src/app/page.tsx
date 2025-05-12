"use client";

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
