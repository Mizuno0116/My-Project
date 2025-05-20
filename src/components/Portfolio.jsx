import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/portfolio/project1.png";
import project2 from "../assets/portfolio/project2.png";
import project3 from "../assets/portfolio/project3.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      title: "Personal Portfolio",
      link: "https://react-tailwindcss-portfolio.netlify.app",
    },
    {
      id: 2,
      src: project2,
      title: "E-Commerce Demo",
      link: "https://demo.spreecommerce.org/",
    },
    {
      id: 3,
      src: project3,
      title: "GitHub User Finder",
      link: "https://github-find-user.vercel.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="relative z-0 w-full min-h-screen px-4 py-24 text-white bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="mb-20 text-center">
          <h2 className="inline-block pb-2 text-4xl font-bold border-b-4 sm:text-6xl border-cyan-500">
            Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-300 sm:text-2xl">
            Explore some of my featured projects
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map(({ id, src, title, link }) => (
            <div
              key={id}
              className="relative overflow-hidden transition duration-300 shadow-xl group rounded-3xl hover:shadow-cyan-500/40"
            >
              <img
                src={src}
                alt={title}
                className="w-full h-[250px] sm:h-[300px] object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition duration-300 bg-black opacity-0 bg-opacity-70 group-hover:opacity-100">
                <h3 className="mb-4 text-2xl font-bold">{title}</h3>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-2 text-lg font-medium text-white transition rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110"
                >
                  View Project <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
