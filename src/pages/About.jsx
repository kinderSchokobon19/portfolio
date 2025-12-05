// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">À Propos de Moi</h2>
      <div className="max-w-3xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg border border-gray-600">
        
        <h3 className="text-2xl font-semibold text-blue-400 mb-3">Mon Parcours</h3>
        <p className="text-lg text-gray-300 mb-4">
          Je suis étudiant généraliste à CentraleSupelec spécialisé dans les techniques du numériques. Mon objectif est de transformer les défis clients en solutions numériques robustes et élégantes.
        </p>

        <h3 className="text-2xl font-semibold text-blue-400 mt-8 mb-4">Expertise Technique</h3>
        <ul className="list-disc list-inside text-gray-300 text-lg grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
          <li>Front-End: React, JavaScript, HTML5, CSS3, Tailwind CSS</li>
          <li>Mobile: Flutter & React Native </li>
          <li>Back-End (bases): Node.js (Express) / Python (Django/Flask)</li>
          <li>Bases de données: MongoDB</li>
        </ul>

        <p className="text-lg text-gray-300 mt-6 text-center italic">
          Je suis actuellement à la recherche de missions freelance pour mettre à profit cette expertise et continuer d'apprendre.
        </p>
      </div>
    </div>
  );
}

export default About;