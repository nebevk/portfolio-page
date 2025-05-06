"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "HTML/CSS", level: 95 },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a passionate Frontend Developer from Slovenia with a keen eye
            for detail and a love for creating beautiful, responsive web
            applications. I specialize in React and modern JavaScript, focusing
            on building user-friendly interfaces that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-primary h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">Frontend Developer</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Current Position
                  </p>
                  <p className="mt-2">
                    Specializing in building modern web applications using
                    React, Next.js, and TypeScript. Focused on creating
                    responsive and accessible user interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Location</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">Slovenia</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Based in the heart of Europe
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
