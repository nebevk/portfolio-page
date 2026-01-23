"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Pick'a Pic",
    description:
      "An interactive art preview application that allows users to preview and explore artwork using color similarity matching and image search.",
    image: "/art-previewer.png",
    link: "https://pick-a-pic.netlify.app/",
    tags: ["Vue.js", "TypeScript", "Vite", "Tailwind CSS", "daisyUI", "Netlify"],
    details:
      "An interactive art preview application built with Vue 3, TypeScript, and Vite. Features include color similarity calculation using LAB color space, image search via Pexels API, and state management with Pinia. Styled with Tailwind CSS and daisyUI for a modern, responsive interface.",
    moreImages: [],
  },
  {
    title: "Maternity Leave Calculator",
    description:
      "A simple calculator to help you calculate your maternity leave.",
    image: "/maternity-leave-calculator.jpg",
    link: "https://maternity-calculator.netlify.app/",
    tags: ["Vue.js", "PrimeVue", "Netlify"],
    details:
      "A simple calculator to help you calculate your maternity leave. Based on Slovenian maternity leave law.",
    moreImages: [],
  },
  {
    title: "Whalesome",
    description:
      "My playground project, built on Vue.js & Nuxt, deployed on Netlify.",
    image: "/whalesome.jpg",
    link: "https://whalesome.netlify.app/",
    tags: ["Vue.js", "Nuxt", "Netlify"],
    details:
      "A personal playground for experimenting with Vue.js and Nuxt, deployed on Netlify.",
    moreImages: [],
  },
  {
    title: "Configurator User Interfaces",
    description:
      "Building templates and user interfaces for various product configurators, from camper vans to jackets.",
    image: "/ocean-bg.jpg",
    tags: ["Angular", "TypeScript", "Webflow", "Shopify", "WooCommerce"],
    link: "#",
    details:
      "Building templates and UIs for configurators for different products using Angular, TypeScript, Webflow, Shopify, WooCommerce.",
    moreImages: [],
  },
  {
    title: "Roran Website",
    description:
      "A challenge where I converted the Roran graphic template into a fully functional website. Modern technologies and best practices for responsive design were used.",
    image: "/roranscreens.jpg",
    tags: ["Bootstrap", "HTML5", "CSS", "JavaScript"],
    link: "https://nebevk.github.io/roran/",
    details:
      "This project was a challenge to convert a graphic template into a fully functional website. Modern technologies and best practices for responsive design were used.",
    moreImages: [],
  },
  {
    title: "Varilnica Bevk Visual Identity",
    description:
      "As part of my thesis, I created the complete visual identity for a microbrewery. Varilnica Bevk is a product of my imagination and its branding will one day represent my home-brewed beer.",
    images: [
      "/vbevk.jpg",
      "/vbevkpivo.jpg",
      "/vbevkcoaster.jpg",
      "/vbevkvizitka.jpg",
    ],
    tags: ["Illustrator", "Photoshop"],
    link: "https://repozitorij.uni-lj.si/IzpisGradiva.php?id=103444&lang=slv",
    details:
      "The project included designing the logo, labels, business cards, and other graphic elements for the microbrewery.",
    moreImages: [
      "/vbevk.jpg",
      "/vbevkpivo.jpg",
      "/vbevkcoaster.jpg",
      "/vbevkvizitka.jpg",
    ],
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle text-sm sm:text-base">
            A selection of projects from my portfolio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={project.image || project.images?.[0] || "/ocean-bg.jpg"}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="bg-primary/90 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                    {project.tags[0]}
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm sm:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm py-2 px-3 sm:px-4 text-center"
                    >
                      View Project
                    </a>
                  )}
                  <button
                    onClick={() => setExpanded(expanded === index ? null : index)}
                    className="btn-secondary text-sm py-2 px-3 sm:px-4"
                  >
                    {expanded === index ? "Show Less" : "Learn More"}
                  </button>
                </div>
                
                {expanded === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                  >
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                      {project.details}
                    </p>
                    {project.moreImages && project.moreImages.length > 0 && (
                      <div className="grid grid-cols-2 gap-2">
                        {project.moreImages.map((img, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={img}
                            alt={`${project.title} ${imgIndex + 1}`}
                            className="w-full h-16 sm:h-20 object-cover rounded"
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
