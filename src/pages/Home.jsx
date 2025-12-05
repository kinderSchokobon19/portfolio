// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center py-20 min-h-[70vh] flex flex-col justify-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
        Bonjour, je suis <span className="text-blue-400">Thibault Verdes</span>.
      </h1>
      <p className="text-2xl text-gray-300 mb-8">
        Etudiant à CentraleSupelec & Développeur Full Stack Junior
      </p>
      <div className="space-x-4">
        <Link
          to="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg shadow-md"
        >
          Découvrir mes Projets
        </Link>
        <Link
          to="/contact"
          className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg shadow-md"
        >
          Me Contacter
        </Link>
      </div>
    </div>
  );
}

export default Home;