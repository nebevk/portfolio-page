"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -70; // Offset for fixed navbar
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/95 dark:bg-dark/95 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center group">
            <img
              src="/logowhite_03.png"
              alt="Nejc Bevk Logo"
              className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href === "#" ? "#" : `#${item.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href === "#") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    scrollToSection(item.href);
                  }
                }}
                className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-all duration-300 cursor-pointer relative group text-sm lg:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href === "#" ? "#" : `#${item.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      if (item.href === "#") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        scrollToSection(item.href);
                      }
                    }}
                    className="block px-3 py-3 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-base font-medium touch-manipulation"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
