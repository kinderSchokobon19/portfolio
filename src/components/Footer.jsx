import React from 'react';
import { Link } from 'react-router-dom';
import { CentraleSupelecLogoOfficial } from './CentraleSupelecLogo';

function Footer() {
  const LinkedInIcon = () => (
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.733 0-9.652h3.554v1.366c.43-.664 1.198-1.608 2.914-1.608 2.121 0 3.71 1.386 3.71 4.365v5.529zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.952.765-1.71 1.959-1.71 1.188 0 1.914.757 1.939 1.71 0 .951-.751 1.71-1.983 1.71zm1.581 11.597H3.715V9.928h3.203v10.524zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
    </svg>
  );

  const GitHubIcon = () => (
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const socialLinks = [
    { icon: <LinkedInIcon />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/thibault-verdes-ab7071328/' },
    { icon: <GitHubIcon />, name: 'GitHub', url: 'https://github.com/kinderSchokobon19' },
    { icon: '📧', name: 'Email', url: 'mailto:thibault.verdes@student-cs.fr' },
  ];

  const footerLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'À Propos', path: '/about' },
    { label: 'Projets', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 mt-16 border-t border-blue-500/20">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-3 mb-4 justify-center md:justify-start h-8">
              <div className="flex-shrink-0">
                <CentraleSupelecLogoOfficial size="sm" />
              </div>
              <div className="hidden sm:block">
                <h4 className="text-white font-bold text-sm leading-tight">Thibault Verdes</h4>
                <p className="text-xs text-blue-400">CentraleSupelec</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Développeur Full Stack Junior passionné par l'innovation technologique
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-center">Navigation</h4>
            <div className="flex flex-wrap gap-4 justify-center">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-400 hover:text-blue-400 transition duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-center">Me Suivre</h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 bg-gray-700 hover:bg-blue-600 rounded-full transition duration-300 transform hover:scale-110 text-white"
                  title={social.name}
                >
                  {typeof social.icon === 'string' ? (
                    <span className="text-lg">{social.icon}</span>
                  ) : (
                    social.icon
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700"></div>
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Thibault Verdes. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-500 flex items-center space-x-1">
            <span>Fait en React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;