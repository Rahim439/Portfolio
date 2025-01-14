import React from "react";
import { ExternalLink, Github } from "lucide-react";

// ... existing code ...
const Projects = () => {
  const projects = [
    {
      title: "Secure Share",
      description: "Generate secure passwords and share them via unique URLs.",
      technologies: ["React", "TailwindCSS", "PWPush API"],
      liveDemo: "https://secure-share-dev.vercel.app/",
      github: "https://github.com/Rahim439/SecureShare",
      //image: ss, // Use the imported image for Secure Share
    },
    {
      title: "Fast Convert",
      description: "Convert currencies quickly with real-time exchange rates.",
      technologies: ["React", "TailwindCSS", "Currency API"],
      liveDemo: "https://fast-convert.vercel.app/",
      github: "https://github.com/Rahim439/currencyConverter",
      //image: fcc, // Use the imported image for Fast Convert
    },
    {
      title: "Yum Recipes",
      description: "Browse variety of delicious recipes.",
      technologies: ["React", "TailwindCSS", "Rapid API"],
      liveDemo: "https://yum-recipes.vercel.app/",
      github: "https://github.com/Rahim439/foodRecipe",
      //image: yum, // Use the imported image for Yum Recipes
    },
  ];

  return (
    <div className="container px-4 py-12 mx-auto sm:px-6 sm:py-20">
      <h1 className="mb-12 text-3xl font-bold text-center text-blue-600 sm:text-4xl dark:text-blue-400">
        My Projects
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <img
              //src={project.image} // Dynamically set image based on project
              alt={project.title}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
                {project.title}
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs text-white bg-blue-500 rounded dark:bg-blue-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 transition duration-300 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500"
                >
                  <ExternalLink className="w-5 h-5 mr-1" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 transition duration-300 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                >
                  <Github className="w-5 h-5 mr-1" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
