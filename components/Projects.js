import React from "react";
import userData from "../constants/data";

export default function Projects() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto h-48 bg-gray-900">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      <div className="bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              deployedLink={proj?.deployedLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number, deployedLink }) => {
  return (
    <div className="w-full block shadow-2xl relative">
      {deployedLink && (
        <a
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-10 text-sm bg-green-500 px-3 py-1 rounded text-white hover:bg-green-600"
        >
          Live Demo
        </a>
      )}

      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative overflow-hidden">
          <div className="h-72 object-cover">
            <img
              src={imgUrl}
              alt={`Screenshot of ${title} project`}
              className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            />
          </div>
          <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
            {title}
          </h1>
          <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
            {number.length === 1 ? "0" + number : number}
          </h1>
        </div>
      </a>
    </div>
  );
};

