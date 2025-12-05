// src/components/ProjectCard.jsx
import React from 'react';

function ProjectCard({ title, description, technologies, githubLink, liveLink }) {
  return (
    <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl p-8 flex flex-col transform transition duration-300 hover:scale-105 border border-blue-500/20 hover:border-blue-500/50 overflow-hidden">
      {/* Fond animé au survol */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition duration-500 -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative z-10">
        {/* Titre */}
        <h3 className="text-2xl md:text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-8">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Stack Utilisé</span>
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30 hover:bg-blue-600/50 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex gap-3 mt-auto">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <span>💻</span>
              <span>Code Source</span>
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <span>🚀</span>
              <span>Voir le Live</span>
            </a>
          )}
          {!liveLink && githubLink && (
            <div className="flex-1"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;