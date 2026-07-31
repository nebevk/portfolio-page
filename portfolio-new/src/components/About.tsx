"use client";

import { motion } from "framer-motion";

type Role = {
  title: string;
  period: string;
  description: string;
};

type Experience = {
  company: string;
  current?: boolean;
  roles: Role[];
};

const experiences: Experience[] = [
  {
    company: "Tronog",
    current: true,
    roles: [
      {
        title: "Development Lead",
        period: "May 2023 – Present",
        description:
          "Leading a small development team, managing client relations, and integrating custom solutions.",
      },
      {
        title: "Junior Front End Developer",
        period: "Nov 2021 – May 2023",
        description: "Building configurator interfaces and templates.",
      },
    ],
  },
  {
    company: "Top Majice d.o.o.",
    roles: [
      {
        title: "Social Media Designer and Manager",
        period: "Nov 2019 – May 2023",
        description:
          "Designed social content, managed marketing, and created T-shirt designs.",
      },
    ],
  },
  {
    company: "HENNLICH Slovenija",
    roles: [
      {
        title: "Multimedia Specialist (Part-time)",
        period: "Aug 2019 – May 2023",
        description:
          "Designed online content, produced videos, and created promotional materials.",
      },
    ],
  },
];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
              Education
            </h3>
            <ul className="space-y-6 sm:space-y-8">
              <li>
                <div className="font-bold text-base sm:text-lg">
                  University of Ljubljana, Faculty of Computer and Information
                  Science
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                  Master of Science - MS, Intermedia/Multimedia
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Oct 2018 – Dec 2021
                </div>
              </li>
              <li>
                <div className="font-bold text-base sm:text-lg">
                  University of Ljubljana, Faculty of Electrical Engineering
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-sm mt-1">
                  Bachelor&apos;s degree, Digital Communication and
                  Media/Multimedia
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  2014 – 2018
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
              Experience
            </h3>

            <ol className="relative border-l border-white/15">
              {experiences.map((job) => (
                <li key={job.company} className="relative mb-10 last:mb-0 pl-6 sm:pl-8">
                  <span
                    className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                      job.current
                        ? "bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.2)]"
                        : "bg-white/35"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                    <h4 className="font-bold text-base sm:text-lg leading-tight">
                      {job.company}
                    </h4>
                    {job.current && (
                      <span className="rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                        Present
                      </span>
                    )}
                  </div>

                  <div className="space-y-4">
                    {job.roles.map((role, roleIndex) => (
                      <div
                        key={`${job.company}-${role.title}`}
                        className={
                          job.roles.length > 1 && roleIndex > 0
                            ? "border-l border-white/10 pl-3 sm:pl-4"
                            : undefined
                        }
                      >
                        <div className="font-semibold text-sm sm:text-[15px] text-gray-100">
                          {role.title}
                        </div>
                        <div className="text-sm text-gray-500 mt-0.5">
                          {role.period}
                        </div>
                        <p className="text-sm text-gray-400 mt-1.5 leading-relaxed">
                          {role.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
