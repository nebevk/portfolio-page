import React from "react";

const CvSlo = () => (
  <div className="max-w-2xl mx-auto p-8 bg-white text-black print:bg-white print:text-black">
    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
      <img
        src="/portrait-placeholder.png"
        alt="Nejc Bevk Portret"
        className="w-28 h-28 rounded-full object-cover border border-gray-300"
      />
      <div>
        <h1 className="text-3xl font-bold mb-1">Nejc Bevk</h1>
        <div className="mb-1 text-sm">
          E-pošta:{" "}
          <a
            href="mailto:nejc.bevk@gmail.com"
            className="underline text-blue-700"
          >
            ne.bevk@gmail.com
          </a>
        </div>
        <div className="mb-1 text-sm">Lokacija: Radovljica, Slovenija</div>
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
    <h2 className="text-xl font-bold mt-6 mb-2">Izobrazba</h2>
    <ul className="mb-4 list-disc ml-6">
      <li>
        <strong>Magisterij (MS), Intermedija/Multimedija</strong>
        <br />
        Univerza v Ljubljani, Fakulteta za računalništvo in informatiko
        <br />
        2018 – 2021
      </li>
      <li>
        <strong>Diploma, Digitalne komunikacije in mediji/Multimedija</strong>
        <br />
        Univerza v Ljubljani, Fakulteta za elektrotehniko
        <br />
        2014 – 2018
      </li>
    </ul>
    <h2 className="text-xl font-bold mt-6 mb-2">Izkušnje</h2>
    <ul className="mb-4 list-disc ml-6">
      <li>
        <strong>Vodja razvoja</strong> – Tronog (maj 2023 – danes)
        <br />
        Vodenje manjše razvojne ekipe, upravljanje odnosov s strankami in
        integracija prilagojenih rešitev
      </li>
      <li>
        <strong>Junior Front End razvijalec</strong> – Tronog (nov 2021 – maj
        2023)
        <br />
        Izdelava konfiguratorjev in predlog za uporabniške vmesnike
      </li>
      <li>
        <strong>Oblikovalec in vodja družbenih omrežij</strong> – Top Majice
        d.o.o. (nov 2019 – maj 2023)
        <br />
        Oblikovanje vsebin za družbena omrežja, vodenje marketinga, oblikovanje
        majic
      </li>
      <li>
        <strong>
          Multimedijski specialist (delo s krajšim delovnim časom)
        </strong>{" "}
        – HENNLICH Slovenija (avg 2019 – maj 2023)
        <br />
        Oblikovanje spletnih vsebin, produkcija videov, ustvarjanje promocijskih
        materialov
      </li>
    </ul>
    <h2 className="text-xl font-bold mt-6 mb-2">Spretnosti</h2>
    <ul className="mb-4 list-disc ml-6">
      <li>
        Frontend razvoj (Angular, Vue.js, React, Next.js, TypeScript,
        JavaScript, Tailwind CSS)
      </li>
      <li>UI/UX oblikovanje</li>
      <li>Shopify Liquid, Webflow, WooCommerce</li>
      <li>Node.js, Git, MongoDB</li>
    </ul>
  </div>
);

export default CvSlo;
