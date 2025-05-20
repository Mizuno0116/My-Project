import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen p-4 text-white bg-gradient-to-b from-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-md mx-auto text-center">
        <div className="pb-10">
          <p className="inline text-5xl font-extrabold border-b-4 border-cyan-500">
            Contact
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Feel free to reach out to me via email
          </p>
        </div>

        {/* Email Address */}
        <div className="flex items-center gap-2 mb-6 text-lg font-medium text-cyan-400">
          <HiOutlineMail size={24} />
          <span>taigamizuno0116@gmail.com</span>
        </div>

        {/* Send Message Button */}
        <a
          href="mailto:yourname@example.com"
          className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-cyan-500/50 hover:scale-105"
        >
          Send Message
        </a>
      </div>
    </div>
  );
};

export default Contact;
