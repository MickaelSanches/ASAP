import React from 'react';

const DownloadCenter = () => {
  return (
    <section className="relative bg-gray-800 py-16 flex justify-center items-center">
      <div className="relative bg-white shadow-lg p-8 w-11/12 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">CENTRE DE TÉLÉCHARGEMENT</h2>
        <p className="text-lg mb-8">
          Vous voulez consulter <strong>les catalogues</strong> en ligne ?</p>
        <div className="relative flex justify-center items-center gap-8">
          <div className="absolute bg-violet shadow-lg p-8 w-full max-w-md text-center transform translate-x-2 translate-y-1/2">
            <img src="/img/logo.webp" alt="Catalogues" className="w-full h-auto mb-4" />
            <a
              href="/catalogues"
              className="inline-block bg-noir text-white py-2 px-4 hover:bg-rose transition-colors"
            >
              Télécharger les catalogues
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .relative {
          position: relative;
        }
        .absolute {
          position: absolute;
        }
        .shadow-lg {
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        .bg-gray-800 {
          background-color: #1a1a1a;
        }
        .bg-gray-200 {
          background-color: #e5e7eb;
        }
        .bg-white {
          background-color: #fff;
        }
        .bg-blue-600 {
          background-color: #1d72b8;
        }
        .hover\\:bg-blue-700:hover {
          background-color: #155a8a;
        }
        .transition-colors {
          transition: background-color 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default DownloadCenter;
