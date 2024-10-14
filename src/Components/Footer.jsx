import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-8 bg-white shadow-md dark:bg-gray-800">
      <div className="container px-4 py-8 mx-auto sm:px-6">
        <div className="flex flex-col items-center">
          <div className="flex mb-4 space-x-6">
            <a
              href="https://github.com/Rahim439"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahim-chaudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/rahimchaudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Rahim Chaudhary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
