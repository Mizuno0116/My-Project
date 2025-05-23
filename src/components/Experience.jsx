import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: nextjs, title: "Next JS", style: "shadow-white" },
    { id: 7, src: graphql, title: "GraphQL", style: "shadow-pink-400" },
    { id: 8, src: github, title: "GitHub", style: "shadow-gray-400" },
  ];

  return (
    <div
      name="experience"
      className="w-full min-h-screen px-4 py-20 text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg mx-auto">
        <div className="mb-12 text-center">
          <h2 className="inline text-4xl font-bold border-b-4 border-gray-500">
            Experience
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 px-4 text-center sm:grid-cols-3 md:grid-cols-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center shadow-md hover:scale-105 duration-500 py-6 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="object-contain w-20 h-20" />
              <p className="mt-4 text-lg font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
