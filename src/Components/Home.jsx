import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import rahim from "../assets/rahim.jpg";
import resume from "../assets/Rahim Chaudhary Resume.pdf";

const Home = () => {
  return (
    <div className="container px-4 py-12 mx-auto my-8 sm:px-6 sm:py-20">
      <div className="text-center">
        <img
          src={rahim}
          alt="Rahim Chaudhary"
          className="w-40 h-40 mx-auto mb-8 border-4 border-blue-500 rounded-full shadow-lg sm:w-56 sm:h-56"
        />
        <h1 className="mb-4 text-4xl font-bold text-blue-600 sm:text-5xl dark:text-blue-400">
          Hi, I'm Rahim Chaudhary
        </h1>
        <p className="mb-8 text-xl text-gray-700 sm:text-2xl dark:text-gray-300">
          REACT JS Developer
        </p>
        <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-600 dark:text-gray-400">
          I'm a passionate front-end developer specializing in React. I create
          efficient and functional websites using modern web technologies. Let's
          build something amazing together!
        </p>
        <div className="my-5 space-x-4">
          <Link
            to="/projects"
            className="inline-flex items-center px-3 py-3 font-bold text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 sm:flex-1 sm:justify-center"
          >
            View Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <a
            href={resume}
            className="inline-flex items-center px-6 py-3 font-bold text-gray-800 transition duration-300 bg-gray-200 rounded dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-white sm:flex-1 sm:justify-center"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
