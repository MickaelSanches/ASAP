import React from 'react';

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#121017] text-[#fdfcfd]">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('/img/logoviolet.webp')" }}
      />
      <div className="relative z-10 p-8 bg-black bg-opacity-90 rounded-3xl shadow-lg" style={{ boxShadow: '0 4px 30px rgba(69, 10, 40, 1)' }}>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-4">Oups! Vous avez pris un mauvais virage.</p>
        <p className="text-lg mb-8">
          La page que vous cherchez est introuvable. Mais ne vous inquiétez pas, ça arrive même aux meilleurs pilotes!
        </p>
        <a href="/" className="text-lg border border-[#f8f8f8] py-2 px-4 rounded-full hover:bg-[#f8f8f8] hover:text-[#121017] transition-colors duration-300">
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
