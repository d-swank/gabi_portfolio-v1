"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
  const [isLeaving, setIsLeaving] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    setIsLeaving(true);
    setTimeout(() => {
      router.push("/");
    }, 2500); // Fade duration matches
  };

  return (
    <motion.main
      initial={{ opacity: 1 }}
      animate={{ opacity: isLeaving ? 0 : 1 }}
      transition={{ duration: 2 }}
    >
      <Navbar onBackAction={handleBack} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Interests />
      <Contact />
      <Footer />
      <BackToTopButton />
    </motion.main>
  );
}
