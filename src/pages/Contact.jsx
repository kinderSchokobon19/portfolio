// src/pages/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [formStatus, setFormStatus] = useState('idle');
  // 💡 REMPLACEZ PAR VOTRE LIEN FORMULAIRE ACTIF (ex: Formspree)
  const FORM_ACTION_URL = "https://formspree.io/f/xvgeqbjw"; 

  const handleSubmit = (e) => {
    setFormStatus('sending');
  };

  const LinkedInIcon = () => (
    <svg className="w-8 h-8 fill-current text-blue-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.733 0-9.652h3.554v1.366c.43-.664 1.198-1.608 2.914-1.608 2.121 0 3.71 1.386 3.71 4.365v5.529zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.952.765-1.71 1.959-1.71 1.188 0 1.914.757 1.939 1.71 0 .951-.751 1.71-1.983 1.71zm1.581 11.597H3.715V9.928h3.203v10.524zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
    </svg>
  );

  const GitHubIcon = () => (
    <svg className="w-8 h-8 fill-current text-gray-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const contactMethods = [
    { icon: '📧', title: 'Email', info: 'thibault.verdes@student-cs.fr', link: 'mailto:thibault.verdes@student-cs.fr' },
    { icon: <LinkedInIcon />, title: 'LinkedIn', info: 'Thibault Verdes', link: 'https://linkedin.com/in/thibault-verdes' },
    { icon: <GitHubIcon />, title: 'GitHub', info: 'kinderSchokobon19', link: 'https://github.com/kinderSchokobon19' },
    { icon: '📱', title: 'Téléphone', info: '+33 6 25 04 91 15', link: 'tel:+33625049115' },
  ];

  return (
    <div className="py-12">
      {/* Titre principal */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Me Contacter</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Je suis ouvert à toute collaboration, mission freelance, ou simple discussion autour du développement web
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Méthodes de contact */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Moyens de Contact</h3>
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="block bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-blue-500/20 hover:border-blue-500/50 transition transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">
                    {typeof method.icon === 'string' ? method.icon : method.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{method.title}</h4>
                    <p className="text-blue-300 hover:text-blue-200 transition">{method.info}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Section de motivation */}
          <div className="mt-10 bg-blue-600/10 border border-blue-500/30 rounded-xl p-8">
            <h4 className="text-xl font-bold text-white mb-4">Pourquoi m'écrire ?</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-blue-400 text-lg">✓</span>
                <span>Vous avez une mission freelance</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-400 text-lg">✓</span>
                <span>Vous cherchez un développeur pour un stage</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-400 text-lg">✓</span>
                <span>Vous voulez discuter d'une collaboration</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-400 text-lg">✓</span>
                <span>Vous avez une simple question technique</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Formulaire Rapide</h3>
          <form 
            className="space-y-5 bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-xl shadow-xl border border-blue-500/20"
            action={FORM_ACTION_URL} 
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-gray-300 font-semibold mb-2">Nom Complet</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition"
                placeholder="Votre nom"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition"
                placeholder="votre.email@exemple.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Sujet</label>
              <select
                name="subject"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="freelance">Mission Freelance</option>
                <option value="alternance">Offre de Stage</option>
                <option value="collaboration">Collaboration</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition resize-none"
                placeholder="Décrivez votre projet, question ou proposition..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50"
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? '📤 Envoi en cours...' : '✉️ Envoyer le Message'}
            </button>

            <p className="text-center text-gray-400 text-sm">
              Vous recevrez une réponse dans les 24h
            </p>
          </form>
        </div>
      </div>

      {/* Section réassurance */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-emerald-500/30 rounded-xl p-8">
          <p className="text-gray-300 text-lg">
            💡 <span className="font-semibold text-emerald-300">Réponse garantie</span> - Je lis tous les messages et fais de mon mieux pour répondre rapidement, même si je suis occupé à l'école !
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;