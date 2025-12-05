// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  // 💡 REMPLACEZ CES DONNÉES PAR VOS VRAIS PROJETS !
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
      title: "Votre Portfolio Personnel (Ce Site)",
      description: "Développé de A à Z pour présenter mon profil de développeur, mettant en pratique mes compétences en intégration Front-End et design moderne.",
      technologies: ["React", "Vite", "Tailwind CSS", "React Router DOM"],
      githubLink: "https://github.com/votre-utilisateur/mon-portfolio-pro", 
      liveLink: "https://votre-portfolio.vercel.app", 
    },
  ];

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">Mes Réalisations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
}

export default Projects;