"use client";

import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/16/solid";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Get to know me better.</h2>
          <p className="section-subtitle text-sm sm:text-base">
            I'm a proud girl dad who loves cooking and good coffee. Every now
            and then, I hit the climbing gym, and running is my favorite way to
            clear my head.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Portrait Image with 3D Animation */}
          <motion.div
            whileHover={{ rotateY: 15, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-700 flex items-center justify-center"
            style={{ perspective: 1000 }}
          >
            <img
              src="/me.jpg"
              alt="Nejc Bevk Portrait"
              className="object-cover w-full h-full"
              onError={(e) => {
                // Fallback to a colored div with initials if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full bg-primary/20 flex items-center justify-center">
                      <span class="text-2xl sm:text-4xl font-bold text-primary">NB</span>
                    </div>
                  `;
                }
              }}
            />
          </motion.div>

          {/* Contact Links */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4">
              <UserIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Nejc Bevk
              </span>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4">
              <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
              <a
                href="mailto:nejc.bevk@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm sm:text-base break-all"
              >
                ne.bevk@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4">
              <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Radovljica, Slovenia
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-4">
              <a
                href="https://github.com/nebevk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-base sm:text-lg font-semibold hover:scale-105 transform transition-transform"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/nejcbevk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-base sm:text-lg font-semibold hover:scale-105 transform transition-transform"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/nejcbevk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-base sm:text-lg font-semibold hover:scale-105 transform transition-transform"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
