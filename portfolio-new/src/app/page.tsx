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
      <div className="container py-20 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4 mt-20">
            Hi, I'm <span className="text-primary">Nejc</span>
          </h1>
          <p className="text-xl text-secondary mb-1">
            Frontend developer with a thing for cooking good food and even
            better user experiences.
          </p>
          <p className="text-xl text-secondary mb-2">
            Welcome to my online resume!
          </p>
          {/* <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </button>
          </div> */}
        </motion.div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
