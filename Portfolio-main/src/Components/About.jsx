import React from "react";

const About = () => {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Git"];

  return (
    <div className="container px-4 py-12 mx-auto sm:px-6 sm:py-20">
      <h1 className="mb-8 text-3xl font-bold text-center text-blue-600 sm:text-4xl dark:text-blue-400">
        About Me
      </h1>
      <div className="max-w-3xl p-8 mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          I'm a 7th-semester BS Computer Science student at UCP with a keen
          interest in front-end web development. I believe in practical learning
          and staying updated with industry trends. I actively explore new
          frameworks and participate in coding communities.
        </p>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
          Collaboration is essential to me, and I value effective communication.
          I'm eager to connect with professionals who appreciate creativity and
          dedication. Let's bring ideas to life together.
        </p>
        <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full dark:bg-blue-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
