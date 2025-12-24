import React from 'react';
import { Link } from 'react-router-dom';
import { CentraleSupelecLogo } from '../components/CentraleSupelecLogo';

function Home() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-center">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-2xl p-12 md:p-20 mb-16 shadow-2xl border border-blue-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center space-x-3 bg-blue-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
              <div className="flex items-center justify-center h-8">
                <CentraleSupelecLogo size="sm" color="white" />
              </div>
              <span className="text-blue-300 font-semibold text-sm hidden sm:inline">CentraleSupelec</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
            Bienvenue ! 👋
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Thibault Verdes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Étudiant en 2ème année à <span className="font-semibold text-blue-300">CentraleSupelec</span> & Développeur <span className="font-semibold text-cyan-300">Full Stack Junior</span>
          </p>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Passionné par le développement web, l'innovation technologique et la création d'expériences utilisateur exceptionnelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              🚀 Découvrir mes Projets
            </Link>
            <Link
              to="/contact"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-600 hover:border-gray-500 inline-block"
            >
              💬 Me Contacter
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/50 transition">
          <div className="text-4xl mb-3">🎓</div>
          <h3 className="text-xl font-bold text-white mb-2">CentraleSupelec</h3>
          <p className="text-gray-400">2ème année - École d'ingénieur prestigieuse</p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/50 transition">
          <div className="text-4xl mb-3">💻</div>
          <h3 className="text-xl font-bold text-white mb-2">Full Stack Dev</h3>
          <p className="text-gray-400">Spécialisé en React, Node.js et technologies modernes</p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/50 transition">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-xl font-bold text-white mb-2">Projecté</h3>
          <p className="text-gray-400">Créateur de solutions innovantes et performantes</p>
        </div>
      </div>
    </div>
  );
}

export default Home;