import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen px-6 pb-16 text-white bg-gradient-to-b from-gray-800 to-black sm:px-8 pt-28 scroll-mt-24"
    >
      <div className="flex flex-col justify-center max-w-3xl mx-auto gap-y-6">
        <div className="pb-6 text-center sm:text-left">
          <h2 className="inline text-3xl font-bold border-b-4 border-gray-500 sm:text-4xl">
            About
          </h2>
        </div>

        <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
          I am a passionate Full Stack Web Developer with a solid foundation in both front-end and back-end technologies.
          I build responsive, user-friendly web applications using tools like React, Tailwind CSS, and JavaScript on the front end,
          paired with Node.js, Express, and MongoDB on the back end. My goal is to create smooth digital experiences that combine function and design—whether it’s a portfolio, e-commerce platform, or internal tool.
        </p>

        <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
          I embrace a continuous learning mindset and enjoy turning ideas into polished web applications.
          I’m skilled in Git, Vercel, Netlify, and Agile workflows. Whether collaborating in a team or working independently,
          I prioritize clean, maintainable code and focus on delivering high-quality solutions tailored to user and business needs.
        </p>
      </div>
    </div>
  );
};

export default About;
