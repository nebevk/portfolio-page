"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Whalesome",
    description:
      "My playground project, built on Vue.js & Nuxt, deployed on Netlify.",
    image: "/whalesome.jpg",
    tags: ["Vue.js", "Nuxt", "Netlify"],
    link: "#",
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">
            A selection of projects from my portfolio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              {project.image && (
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              {project.images && (
                <div className="grid grid-cols-2 gap-2 p-2 bg-gray-200 dark:bg-gray-700">
                  {project.images.map((img, i) => (
                    <img
                      key={img}
                      src={img}
                      alt={project.title + " " + (i + 1)}
                      className="object-cover w-full h-24 rounded"
                    />
                  ))}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="text-primary hover:text-primary/80 transition-colors underline mb-2"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                >
                  {expanded === index ? "Show Less" : "Show More"}
                </button>
                {expanded === index && (
                  <div className="mt-4">
                    {project.details && (
                      <p className="text-gray-700 dark:text-gray-200 mb-2">
                        {project.details}
                      </p>
                    )}
                    {project.moreImages && project.moreImages.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {project.moreImages.map((img, i) => (
                          <img
                            key={img}
                            src={img}
                            alt={project.title + " " + (i + 1)}
                            className="object-cover w-full h-24 rounded"
                          />
                        ))}
                      </div>
                    )}
                    <a
                      href={project.link}
                      className="text-primary hover:text-primary/80 transition-colors block mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project →
                    </a>
                  </div>
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
