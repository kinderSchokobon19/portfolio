// src/pages/Contact.jsx
import React from 'react';

function Contact() {
  // 💡 REMPLACEZ PAR VOTRE LIEN FORMULAIRE ACTIF (ex: Formspree)
  const FORM_ACTION_URL = "https://formspree.io/f/xvgeqbjw"; 

  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">Me Contacter</h2>
      <div className="max-w-xl mx-auto bg-gray-700 p-8 rounded-lg shadow-lg border border-gray-600">
        <p className="text-lg text-gray-300 mb-6 text-center">
          J'étudie toutes propositions de missions freelance, de collaboration technique, ou de postes en alternance. Envoyez-moi un message ou contactez-moi directement.
        </p>
        
        <div className="mb-8 text-center">
             <p className="text-xl text-white font-bold mb-2">Email Direct :</p>
             <a href="mailto:votre.email@exemple.com" className="text-blue-400 hover:text-blue-300 underline text-lg">
                thibault.verdes@student-cs.fr
             </a>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 text-center">Formulaire Rapide</h3>
        <form className="space-y-4" action={FORM_ACTION_URL} method="POST">
          <div>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Votre Nom"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Votre Email"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="5"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Votre message (décrivez votre projet ou question)"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg shadow-md"
          >
            Envoyer le Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;