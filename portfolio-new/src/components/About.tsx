"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-40"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a passionate Frontend Developer with a master's degree in
            multimedia, bringing an interdisciplinary approach to both
            problem-solving and design. My core expertise lies in Angular,
            TypeScript, and vanilla JavaScript, with significant experience
            customizing Shopify stores using Liquid and integrating solutions
            across various platforms like WordPress/WooCommerce, Webflow, and
            more. I focus on understanding challenges from the user's
            perspective to build intuitive, responsive interfaces, and I'm not
            afraid to dive into backend code when needed to deliver complete,
            effective solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-top">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <ul className="space-y-6">
              <li>
                <div className="font-bold text-lg">
                  University of Ljubljana, Faculty of Computer and Information
                  Science
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                  Master of Science - MS, Intermedia/Multimedia
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                  Oct 2018 - Dec 2021
                </div>
              </li>
              <li>
                <div className="font-bold text-lg">
                  University of Ljubljana, Faculty of Electrical Engineering
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                  Bachelor's degree, Digital Communication and Media/Multimedia
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                  2014 - 2018
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Experience Timeline</h3>
              <ol className="relative border-l border-blue-200 dark:border-blue-800">
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <svg
                      className="w-3 h-3 text-green-600 dark:text-green-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" />
                    </svg>
                  </span>
                  <h4 className="font-bold text-lg">Tronog</h4>

                  <div className="ml-4">
                    <div className="font-semibold">
                      Development Lead{" "}
                      <span className="text-xs text-gray-500">
                        (May 2023 – Present)
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      Leading small development team, managing client relations
                      and integrating custom solutions
                    </div>
                    <div className="font-semibold">
                      Junior Front End Developer{" "}
                      <span className="text-xs text-gray-500">
                        (Nov 2021 – May 2023)
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Building configurator interfaces and templates
                    </div>
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-gray-900">
                    <svg
                      className="w-3 h-3 text-gray-600 dark:text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" />
                    </svg>
                  </span>
                  <h4 className="font-bold text-lg">Top Majice d.o.o.</h4>
                  <div className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                    Social Media Designer and Manager
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                    Nov 2019 – May 2023 · 3 yrs 7 mos
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Designed social content, managed marketing, created T-shirt
                    designs
                  </div>
                </li>
                <li className="mb-10 ml-6">
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-300 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700">
                    <svg
                      className="w-3 h-3 text-gray-700 dark:text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" />
                    </svg>
                  </span>
                  <h4 className="font-bold text-lg">HENNLICH Slovenija</h4>
                  <div className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                    Multimedia Specialist (Part-time)
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                    Aug 2019 – May 2023 · 3 yrs 10 mos
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Designed online content, produced videos, created
                    promotional materials
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
