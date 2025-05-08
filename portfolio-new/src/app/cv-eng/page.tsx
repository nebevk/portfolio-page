import React from "react";

const CvEng = () => (
  <div className="max-w-2xl mx-auto p-8 bg-white text-black print:bg-white print:text-black">
    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
      <img
        src="/portrait-placeholder.png"
        alt="Nejc Bevk Portrait"
        className="w-28 h-28 rounded-full object-cover border border-gray-300"
      />
      <div>
        <h1 className="text-3xl font-bold mb-1">Nejc Bevk</h1>
        <div className="mb-1 text-sm">
          Email:{" "}
          <a
            href="mailto:nejc.bevk@gmail.com"
            className="underline text-blue-700"
          >
            ne.bevk@gmail.com
          </a>
        </div>
        <div className="mb-1 text-sm">Location: Radovljica, Slovenia</div>
        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com/nejcbe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nejcbevk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/nejcbevk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
    <h2 className="text-xl font-bold mt-6 mb-2">Education</h2>
    <ul className="mb-4 list-disc ml-6">
      <li>
        <strong>Master of Science (MS), Intermedia/Multimedia</strong>
        <br />
        University of Ljubljana, Faculty of Computer and Information Science
        <br />
        2018 – 2021
      </li>
      <li>
        <strong>
          Bachelor's degree, Digital Communication and Media/Multimedia
        </strong>
        <br />
        University of Ljubljana, Faculty of Electrical Engineering
        <br />
        2014 – 2018
      </li>
    </ul>
    <h2 className="text-xl font-bold mt-6 mb-2">Experience</h2>
    <ul className="mb-4 list-disc ml-6">
      <li>
        <strong>Development Lead</strong> – Tronog (May 2023 – Present)
        <br />
        Leading small development team, managing client relations and
        integrating custom solutions
      </li>
      <li>
        <strong>Junior Front End Developer</strong> – Tronog (Nov 2021 – May
        2023)
        <br />
        Building configurator interfaces and templates
      </li>
      <li>
        <strong>Social Media Designer and Manager</strong> – Top Majice d.o.o.
        (Nov 2019 – May 2023)
        <br />
        Designed social content, managed marketing, created T-shirt designs
      </li>
      <li>
        <strong>Multimedia Specialist (Part-time)</strong> – HENNLICH Slovenija
        (Aug 2019 – May 2023)
        <br />
        Designed online content, produced videos, created promotional materials
      </li>
    </ul>
    <h2 className="text-xl font-bold mt-6 mb-2">Skills</h2>
    <ul className="mb-4 list-disc ml-6">
      <li>
        Frontend Development (Angular, Vue.js, React, Next.js, TypeScript,
        JavaScript, Tailwind CSS)
      </li>
      <li>UI/UX Design</li>
      <li>Shopify Liquid, Webflow, WooCommerce</li>
      <li>Node.js, Git, MongoDB</li>
    </ul>
  </div>
);

export default CvEng;
