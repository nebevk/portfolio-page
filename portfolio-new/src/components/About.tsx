"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle text-sm sm:text-base">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Education</h3>
            <ul className="space-y-4 sm:space-y-6">
              <li>
                <div className="font-bold text-base sm:text-lg">
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
                <div className="font-bold text-base sm:text-lg">
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
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Experience Timeline</h3>
              <ol className="relative border-l border-blue-200 dark:border-blue-800">
                <li className="mb-8 sm:mb-10 ml-4 sm:ml-6">
                  <span className="flex absolute -left-2 sm:-left-3 justify-center items-center w-5 h-5 sm:w-6 sm:h-6 bg-green-200 rounded-full ring-6 sm:ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <svg
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600 dark:text-green-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" />
                    </svg>
                  </span>
                  <h4 className="font-bold text-base sm:text-lg">Tronog</h4>

                  <div className="ml-3 sm:ml-4">
                    <div className="font-semibold text-sm sm:text-base">
                      Development Lead{" "}
                      <span className="text-xs text-gray-500">
                        (May 2023 – Present)
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      Leading small development team, managing client relations
                      and integrating custom solutions
                    </div>
                    <div className="font-semibold text-sm sm:text-base">
                      Junior Front End Developer{" "}
                      <span className="text-xs text-gray-500">
                        (Nov 2021 – May 2023)
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      Building configurator interfaces and templates
                    </div>
                  </div>
                </li>
                <li className="mb-8 sm:mb-10 ml-4 sm:ml-6">
                  <span className="flex absolute -left-2 sm:-left-3 justify-center items-center w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-full ring-6 sm:ring-8 ring-white dark:ring-gray-900 dark:bg-gray-900">
                    <svg
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-600 dark:text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" />
                    </svg>
                  </span>
                  <h4 className="font-bold text-base sm:text-lg">Top Majice d.o.o.</h4>
                  <div className="ml-3 sm:ml-4">
                    <div className="font-semibold text-sm sm:text-base">
                      Social Media Designer and Manager{" "}
                      <span className="text-xs text-gray-500">
                        (Nov 2019 – May 2023 · 3 yrs 7 mos)
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      Designed social content, managed marketing, created T-shirt
                      designs
                    </div>
                  </div>
                </li>
                <li className="mb-8 sm:mb-10 ml-4 sm:ml-6">
                  <span className="flex absolute -left-2 sm:-left-3 justify-center items-center w-5 h-5 sm:w-6 sm:h-6 bg-gray-300 rounded-full ring-6 sm:ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700">
                    <svg
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-700 dark:text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" />
                    </svg>
                  </span>
                  <h4 className="font-bold text-base sm:text-lg">HENNLICH Slovenija</h4>
                  <div className="ml-3 sm:ml-4">
                    <div className="font-semibold text-sm sm:text-base">
                      Multimedia Specialist (Part-time){" "}
                      <span className="text-xs text-gray-500">
                        (Aug 2019 – May 2023 · 3 yrs 10 mos)
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      Designed online content, produced videos, created
                      promotional materials
                    </div>
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
