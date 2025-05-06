"use client";

import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <Navigation />
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Nejc Bevk</span>
          </h1>
          <p className="text-xl text-secondary mb-8">Frontend/Web Developer</p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
}
