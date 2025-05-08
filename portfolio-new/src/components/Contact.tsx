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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get to know me better.</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I’m a proud girl dad who loves cooking and good coffee. Every now
            and then, I hit the climbing gym, and running is my favorite way to
            clear my head.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Portrait Image with 3D Animation */}
          <motion.div
            whileHover={{ rotateY: 15, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-40 h-40 rounded-full overflow-hidden shadow-lg bg-gray-300 dark:bg-gray-700 flex items-center justify-center"
            style={{ perspective: 1000 }}
          >
            <img
              src="/portrait-placeholder.png"
              alt="Nejc Bevk Portrait"
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Contact Links */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <UserIcon className="h-6 w-6 text-primary" />
              <span className="text-gray-600 dark:text-gray-300">
                Nejc Bevk
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-4">
              <EnvelopeIcon className="h-6 w-6 text-primary" />
              <a
                href="mailto:nejc.bevk@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              >
                ne.bevk@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <MapPinIcon className="h-6 w-6 text-primary" />
              <span className="text-gray-600 dark:text-gray-300">
                Radovljica, Slovenia
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://github.com/nejcbe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-lg font-semibold"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/nejcbevk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-lg font-semibold"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/nejcbevk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-lg font-semibold"
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
