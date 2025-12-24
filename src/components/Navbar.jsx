import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CentraleSupelecLogoOfficial } from './CentraleSupelecLogo';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkClass = "text-blue-400 border-b-2 border-blue-400 pb-1 font-semibold";
  const normalLinkClass = "text-gray-300 hover:text-blue-300 transition duration-300";

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4 shadow-2xl sticky top-0 z-10 border-b border-blue-500/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition">
          <div className="h-10 flex items-center">
            <CentraleSupelecLogoOfficial size="sm" />
          </div>
          <div className="flex flex-col hidden sm:block">
            <span className="text-white text-sm font-bold leading-tight">Thibault Verdes</span>
          </div>
        </Link>
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `text-sm font-medium transition duration-300 ${isActive ? activeLinkClass : normalLinkClass}`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => 
              `text-sm font-medium transition duration-300 ${isActive ? activeLinkClass : normalLinkClass}`
            }
          >
            Projets
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `text-sm font-medium transition duration-300 ${isActive ? activeLinkClass : normalLinkClass}`
            }
          >
            À Propos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `text-sm font-medium transition duration-300 ${isActive ? activeLinkClass : normalLinkClass}`
            }
          >
            Contact
          </NavLink>
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-blue-400 transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-700 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `block px-4 py-2 rounded transition ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => 
              `block px-4 py-2 rounded transition ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Projets
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `block px-4 py-2 rounded transition ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            À Propos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `block px-4 py-2 rounded transition ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;