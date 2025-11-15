"use client";

import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -70; // Offset for fixed navbar
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="container py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 mt-16 sm:mt-20">
            Hi, I'm <span className="text-primary">Nejc</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-secondary mb-3 sm:mb-4 max-w-3xl mx-auto px-4">
            Frontend developer with a thing for cooking good food and even
            better user experiences.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-secondary mb-6 sm:mb-8 px-4">
            Welcome to my online resume!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="btn-primary text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-secondary text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
