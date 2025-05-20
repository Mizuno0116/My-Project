import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="flex items-center w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col-reverse items-center justify-center w-full max-w-screen-lg gap-12 px-6 py-12 mx-auto md:flex-row sm:px-8 md:px-12">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center w-full text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold leading-snug text-white sm:text-5xl">
            Hi, I'm a <br />
            <span className="text-cyan-400">Full Stack Developer</span>
          </h1>
          <p className="max-w-md mx-auto mt-4 text-base text-gray-400 sm:text-lg md:mx-0">
            With 10 years of experience building web applications, I focus on modern tools like React, Tailwind, Next.js, and GraphQL to create responsive and scalable solutions.
          </p>

          <div className="flex justify-center mt-6 md:justify-start">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="flex items-center gap-1 px-6 py-3 text-sm text-white transition rounded-md group sm:text-base bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105"
            >
              View Portfolio
              <span className="transition duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={HeroImage}
            alt="Profile"
            className="rounded-2xl w-[75%] sm:w-[60%] md:w-full max-w-[400px] shadow-lg shadow-cyan-500/20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
