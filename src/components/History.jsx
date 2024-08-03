import React from 'react';

const History = () => {
  return (
    <div className="relative bg-[#221d2d] text-[#fdfcfd] flex items-center justify-center py-16 px-4 sm:px-8">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale" 
        style={{ backgroundImage: "url('/img/histoirefond.webp')" }}
      />
      <div className="relative flex flex-col md:flex-row items-center bg-[#121017] p-6 md:p-12 rounded-3xl w-full max-w-[650px] space-y-8 md:space-y-0 md:space-x-8">
        <img
          loading="lazy"
          src="/img/histoire.webp"
          alt="Image de l'histoire"
          className="-ml-16 mr-8 w-full max-w-[250px] h-auto md:w-[35vw] md:max-w-[280px] object-cover rounded-3xl shadow-lg"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-normal mb-2">Notre Histoire</h2>
          <p className="text-lg font-normal opacity-75 mb-4">ASAP</p>
          <p className="text-lg font-normal opacity-50 mb-8">
            Mon associé et moi-même cumulons plus de trois décennies d'expérience dans le secteur automobile,
            en particulier dans la commercialisation de solutions d'atelier.
            Forts de cette vaste expérience acquise au sein des plus grands acteurs du marché,
            nous avons décidé de créer notre propre société.
          </p>
          <a href="" target="_blank" rel="noopener noreferrer">
          <button className="border border-[#f8f8f8] bg-transparent text-[#f8f8f8] py-3 px-6 rounded-full">
            Suivez-nous
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default History;
