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
            Thibault Verdes
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300">
            Étudiant Ingénieur à CentraleSupelec
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Passionné par le <span className="font-semibold text-white">développement web</span> et la <span className="font-semibold text-white">cybersécurité</span>. Je construis des solutions modernes et sécurisées.
          </p>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Créateur de projets innovants allant du web au déploiement sécurisé, avec un intérêt particulier pour les solutions modernes et l'architecture système.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Voir mes Projets
            </Link>
            <Link
              to="/contact"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-600 hover:border-gray-500 inline-block"
            >
              Me Contacter
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-gray-600 transition">
          <h3 className="text-lg font-bold text-white mb-2">Formation</h3>
          <p className="text-gray-400">2ème année - CentraleSupelec (École d'ingénieur)</p>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-gray-600 transition">
          <h3 className="text-lg font-bold text-white mb-2">Expertise</h3>
          <p className="text-gray-400">Web, Backend, Sécurité et Architectures modernes</p>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 hover:border-gray-600 transition">
          <h3 className="text-lg font-bold text-white mb-2">Approche</h3>
          <p className="text-gray-400">Code performant, sécurisé et maintenable</p>
        </div>
      </div>
    </div>
  );
}

export default Home;