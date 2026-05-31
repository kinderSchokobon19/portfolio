import React from 'react';

function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'], icon: '🎨' },
    { category: 'Mobile', items: ['Flutter', 'React Native'], icon: '📱' },
    { category: 'Backend', items: ['Node.js (Express)', 'Python (Django/Flask)', 'MongoDB'], icon: '⚙️' },
    { category: 'Outils', items: ['Git', 'Vite', 'Webpack', 'VS Code', 'Figma'], icon: '🛠️' },
  ];

  return (
    <div className="py-12">
      {/* Titre principal */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">À Propos de Moi</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto"></div>
      </div>

      {/* Section Présentation */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 md:p-14 rounded-2xl shadow-xl border border-blue-500/20">
          <div className="flex items-start space-x-6 mb-8">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600">
                <span className="text-2xl">👨‍🎓</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">Mon Parcours</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Je suis étudiant généraliste en <span className="font-semibold text-blue-300">2ème année à CentraleSupelec</span>, une école d'ingénieur de référence. Je me suis spécialisé dans les <span className="font-semibold text-cyan-300">techniques du numérique</span> avec une passion particulière pour le développement web et les applications mobiles.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Mon objectif est de transformer les défis clients en solutions numériques robustes, élégantes et performantes. Je suis un développeur curieux qui aime apprendre et explorer de nouvelles technologies.
              </p>
            </div>
          </div>

          <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-6 mt-8">
            <p className="text-blue-300 text-center font-semibold">
              🎯 Je suis actuellement à la recherche d'un stage de césure de 6 mois a partir de septembre 2026 mettre à profit mon expertise et continuer d'apprendre
            </p>
          </div>
        </div>
      </div>

      {/* Section Compétences */}
      <div className="max-w-5xl mx-auto mb-16">
        <h3 className="text-3xl font-bold text-white mb-10 text-center">Expertise Technique</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/50 transition transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{skillGroup.icon}</span>
                <h4 className="text-2xl font-bold text-white">{skillGroup.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i}
                    className="bg-blue-600/30 text-blue-200 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-600/50 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Valeurs */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-white mb-10 text-center">Mes Valeurs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-blue-500/20">
            <div className="text-5xl mb-4">🚀</div>
            <h4 className="text-xl font-bold text-white mb-3">Innovation</h4>
            <p className="text-gray-400">Je recherche constamment des solutions nouvelles et créatives pour résoudre les problèmes</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-blue-500/20">
            <div className="text-5xl mb-4">⚡</div>
            <h4 className="text-xl font-bold text-white mb-3">Performance</h4>
            <p className="text-gray-400">Code propre, optimisé et maintenable pour une expérience utilisateur fluide</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-blue-500/20">
            <div className="text-5xl mb-4">🤝</div>
            <h4 className="text-xl font-bold text-white mb-3">Collaboration</h4>
            <p className="text-gray-400">Travail en équipe efficace avec communication claire et objectives partagés</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;