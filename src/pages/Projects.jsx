import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Outil de Gestion Client (Mission JE)",
      description: "Développement d'une application interne pour la gestion des relations clients et le suivi des facturations pour un cabinet de conseil.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL"],
      githubLink: "https://github.com/votre-utilisateur/gestion-client", 
      liveLink: "https://gestion-client.vercel.app", 
    },
    {
      id: 2,
      title: "Application Mobile pour le suivi de patients",
      description: "Création d'une application mobile permettant à l'association Parcours d'Exil de fournir des ressources utiles et un suivi par des psychologues pour des personnes en situation de stress post-traumatique",
      technologies: ["Flutter", "Dart", "MongoDB"],
      githubLink: "https://github.com/kinderSchokobon19/PDE_vf", 
      liveLink: null, 
    },
    {
      id: 3,
      title: "Site d'Analyse de Données (Projet Scolaire)",
      description: "Conception d'un tableau de bord interactif pour visualiser et analyser des données démographiques complexes à l'aide de graphiques.",
      technologies: ["Python", "Flask", "D3.js", "HTML/CSS"],
      githubLink: "https://github.com/votre-utilisateur/data-viz", 
      liveLink: "https://data-viz.netlify.app", 
    },
    {
      id: 4,
      title: "P2P-Secure-Vault",
      description: "Système de transfert de fichiers P2P chiffré sans serveur centralisé. Transfert sécurisé avec chiffrement (AES-256-GCM), échange de clés Diffie-Hellman, NAT traversal et multithreading. Interfaces Desktop (PyQt5/Tkinter) et Web (Flask).",
      technologies: ["Python", "PyQt5", "Flask", "Cryptographie", "TCP Sockets"],
      githubLink: "https://github.com/kinderSchokobon19/P2P-file-sharing", 
      liveLink: null,
    },
    {
      id: 5,
      title: "Votre Portfolio Personnel (Ce Site)",
      description: "Développé de A à Z pour présenter mon profil de développeur, mettant en pratique mes compétences en intégration Front-End et design moderne.",
      technologies: ["React", "Vite", "Tailwind CSS", "React Router DOM"],
      githubLink: "https://github.com/kinderSchokobon19/portfolio", 
      liveLink: "https://kinderschokobon19.github.io/portfolio/", 
    },
  ];

  return (
    <div className="py-12">
      {/* Titre principal */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Mes Réalisations</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Découvrez les projets sur lesquels j'ai travaillé, allant du développement frontend au backend en passant par les applications mobiles
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-6"></div>
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-10 max-w-2xl mx-auto backdrop-blur">
          <h3 className="text-2xl font-bold text-white mb-4">Intéressé par une collaboration ?</h3>
          <p className="text-gray-400 mb-6">Je suis ouvert aux nouvelles opportunités et missions freelance</p>
          <a 
            href="mailto:votre-email@example.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
          >
            📧 Me Contacter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;