"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Spletna stran Roran",
    description:
      "Primer izziva v katerem grafično predlogo Roran pretvoril v identično in delujočo spletno stran.",
    image: "/roranscreens.jpg",
    tags: ["Bootstrap", "HTML5", "CSS", "JavaScript"],
    link: "https://nebevk.github.io/roran/",
    details:
      "Ta projekt je bil izziv pretvorbe grafične predloge v popolnoma funkcionalno spletno stran. Uporabljene so bile sodobne tehnologije in najboljše prakse za responsive design.",
    moreImages: [],
  },
  {
    title: "Celostna grafična podoba Varilnice Bevk",
    description:
      "V sklopu diplomske naloge sem ustvaril celostno grafično podobo mikropivovarne. Varilnica Bevk je plod moje domišlije njena podoba pa bo nekoč kosila moje domače pivo.",
    images: [
      "/vbevk.jpg",
      "/vbevkpivo.jpg",
      "/vbevkcoaster.jpg",
      "/vbevkvizitka.jpg",
    ],
    tags: ["Illustrator", "Photoshop"],
    link: "https://repozitorij.uni-lj.si/IzpisGradiva.php?id=103444&lang=slv",
    details:
      "Projekt je vključeval oblikovanje logotipa, etiket, vizitk in drugih grafičnih elementov za mikropivovarno.",
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
          <h2 className="text-3xl font-bold mb-4">Moji Projekti</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Nekaj izbranih projektov iz mojega portfolia
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
