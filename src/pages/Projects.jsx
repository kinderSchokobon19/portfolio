import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "LLM-Based Log Contextualization for Smart Grid Operations",
      description: "Pipeline automatisée d'analyse de logs opérationnels pour le réseau électrique français (RTE). Utilise LLM et RAG pour contextualiser, trier et analyser des incidents critiques en temps quasi-réel, transformant des données non structurées en insights actionnables.",
      technologies: ["Python", "FastAPI", "Next.js", "GPT-4", "ChromaDB", "RAG", "OCR"],
      githubLink: "https://github.com/martingatica/front-llm-log-contextualization", 
      liveLink: null,
    },
    {
      id: 2,
      title: "Système Robotique de Lancer Hybride par RL",
      description: "Développement d'un système robotique intelligent combinant modélisation balistique et apprentissage par renforcement (SAC) pour lancer des objets avec précision. Approche hybride : commande analytique initialisée + correction résiduelle par RL en simulation Gazebo avec transfert sim-to-real sur robot QArm.",
      technologies: ["Python", "ROS", "Gazebo", "SAC (Soft Actor-Critic)", "Gymnasium", "YOLO", "Simulink", "PyTorch"],
      githubLink: "https://github.com/Georgiaac3/qarm-rl", 
      liveLink: null,
    },
    {
      id: 3,
      title: "Application Mobile pour le suivi de patients(bientôt sur l'app store)",
      description: "Création d'une application mobile permettant à l'association Parcours d'Exil de fournir des ressources utiles et un suivi par des psychologues pour des personnes en situation de stress post-traumatique",
      technologies: ["Flutter", "Dart", "MongoDB"],
      githubLink: "https://github.com/kinderSchokobon19/PDE_vf", 
      liveLink: null, 
    },
    {
      id: 4,
      title: "P2P-Secure-Vault (en cours de développement)",
      description: "Système de transfert de fichiers P2P chiffré sans serveur centralisé. Transfert sécurisé avec chiffrement (AES-256-GCM), échange de clés Diffie-Hellman, NAT traversal et multithreading. Interfaces Desktop (PyQt5/Tkinter) et Web (Flask).",
      technologies: ["Python", "PyQt5", "Flask", "Cryptographie", "TCP Sockets"],
      githubLink: "https://github.com/kinderSchokobon19/P2P-file-sharing", 
      liveLink: null,
    },
    {
      id: 5,
      title: "Mon Portfolio Personnel (Ce Site)",
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
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Projets</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Retrouvez les projets sur lesquels j'ai travaillé, du web au cryptographie en passant par les applications mobiles
        </p>
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
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-10 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Vous avez un projet ?</h3>
          <p className="text-gray-400 mb-6">Je suis ouvert aux opportunités et collaborations</p>
          <a 
            href="mailto:votre-email@example.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
          >
            Me Contacter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;