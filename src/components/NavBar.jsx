import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-20 px-4 text-white bg-black shadow-md">
      {/* Logo */}
      <h1 className="ml-2 text-3xl font-signature sm:text-4xl">Taiga Mizuno</h1>

      {/* Desktop Links */}
      <ul className="hidden space-x-6 md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-lg text-gray-400 capitalize duration-200 cursor-pointer hover:text-cyan-400"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="z-50 pr-4 text-gray-400 cursor-pointer md:hidden"
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Mobile Dropdown Menu */}
      {nav && (
        <div className="fixed top-20 right-0 w-[60%] h-[70%] bg-black bg-opacity-90 backdrop-blur-md z-40 px-6 py-10 shadow-lg rounded-l-2xl transition duration-300 overflow-y-auto md:hidden">
          <ul className="flex flex-col space-y-6 text-xl">
            {links.map(({ id, link }) => (
              <li key={id} className="text-gray-300 capitalize hover:text-cyan-400">
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
