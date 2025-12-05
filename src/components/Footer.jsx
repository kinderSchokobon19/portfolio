// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-center text-gray-400 mt-8">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Thibault Verdes</p>
        <div className="flex justify-center space-x-4 mt-2">
          {/* Remplacez par vos vrais liens - Utilisez des icônes pour un meilleur look */}
          <a href="https://github.com/kinderSchokobon19" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
          <a href="https://www.linkedin.com/in/thibault-verdes-ab7071328/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;