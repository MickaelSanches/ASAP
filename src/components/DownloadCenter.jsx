import React from 'react';

const DownloadCenter = () => {
  return (
    <section className="relative bg-gray-800 py-16 flex justify-center items-center">
      <div className="relative bg-white shadow-lg p-8 w-11/12 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">CENTRE DE TÉLÉCHARGEMENT</h2>
        <p className="text-lg mb-8">
          Vous voulez consulter <strong>les catalogues</strong> en ligne ?
        </p>
        <div className="relative flex justify-center items-center">
          <div className="absolute bg-violet shadow-lg p-8 w-full max-w-md text-center transform translate-y-1/2">
            <img src="/img/logo.webp" alt="Catalogues" className="w-full h-auto mb-4" />
            <div className="btn">
              <div className="button-wrapper">
                <div className="text">Télécharger les catalogues</div>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="2em"
                    height="2em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .btn {
          --width: 160px;
          --height: 48px;
          --button-color: #000;
          width: var(--width);
          height: var(--height);
          background: var(--button-color);
          position: relative;
          text-align: center;
          font-family: inherit;
          font-size: 18px;
          cursor: pointer;
          transition: background 0.3s;
          margin: 0 auto; /* Centrer le bouton */
        }

        .btn .text {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn .button-wrapper,
        .btn .text,
        .btn .icon {
          overflow: hidden;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          color: #fff;
        }

        .btn .text {
          top: 0;
        }

        .btn .text,
        .btn .icon {
          transition: top 0.5s;
        }

        .btn .icon {
          color: #fff;
          top: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn .icon svg {
          width: 24px;
          height: 24px;
        }

        .btn:hover {
          background: #cd0066; /* Couleur de survol rose */
        }

        .btn:hover .text {
          top: -100%;
        }

        .btn:hover .icon {
          top: 0;
        }
      `}</style>
    </section>
  );
};

export default DownloadCenter;
