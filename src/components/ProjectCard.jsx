// src/components/ProjectCard.jsx
import React from 'react';

function ProjectCard({ title, description, technologies, githubLink, liveLink }) {
  return (
    <div className="bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col transform transition duration-300 hover:scale-105 border border-gray-600">
      <h3 className="text-2xl font-bold text-blue-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>
      <div className="mb-4">
        <span className="font-semibold text-white">Techs : </span>
        <span className="text-gray-300">{technologies.join(', ')}</span>
      </div>
      <div className="flex justify-between items-center mt-auto space-x-2">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition duration-300 text-sm"
          >
            Code Source
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 text-sm"
          >
            Voir le Live
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;