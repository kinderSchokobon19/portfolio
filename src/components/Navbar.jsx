// src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const activeLinkClass = "text-blue-400 border-b-2 border-blue-400 pb-1";
  const normalLinkClass = "hover:text-blue-300";

  return (
    <nav className="bg-gray-800 p-4 shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold hover:text-blue-300">
          Thibault Verdes
        </Link>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLinkClass : normalLinkClass)}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? activeLinkClass : normalLinkClass)}
          >
            Projets
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeLinkClass : normalLinkClass)}
          >
            À Propos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeLinkClass : normalLinkClass)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;