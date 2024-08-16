import React from 'react';

const catalogs = [
  { name: 'Catalogue Promo ASAP', url: '/catalogs/PromoASAP.pdf', viewerUrl: '/catalogues/promo-asap' },
  { name: 'Catalogue KingTony', url: '/catalogs/KingTonyAvrilJuillet.pdf', viewerUrl: '/catalogues/king-tony' },
  { name: 'Catalogue FLEX Best Of 2024', url: '/catalogs/BestofFLEX2024.pdf', viewerUrl: '/catalogues/flex-bestof' },
  { name: 'Catalogue FLEX', url: '/catalogs/FLEX.pdf', viewerUrl: '/catalogues/flex' },
  { name: 'Catalogue Paradise Air', url: '/catalogs/ParadiseAir.pdf', viewerUrl: '/catalogues/paradise-air' },
  { name: 'Catalogue OMNC Industrial Sélection', url: '/catalogs/OMNCIndustrialSelection.pdf', viewerUrl: '/catalogues/omnc-industrial-selection' },
  { name: 'Catalogue OMNC Général', url: '/catalogs/OMNCGeneral.pdf', viewerUrl: '/catalogues/omnc-general' },
  { name: 'Catalogue Mesto', url: '/catalogs/CatalogueMesto.pdf', viewerUrl: '/catalogues/mesto' },
  { name: 'Tableau des Résistances Mesto', url: '/catalogs/TableauMesto.pdf', viewerUrl: '/catalogues/tableau-mesto' },
  { name: 'Catalogue SONAX', url: '/catalogs/CatalogueSONAX.pdf', viewerUrl: '/catalogues/sonax' },
  { name: 'Catalogue DRAKKAR', url: '/catalogs/DRAKKAR.pdf', viewerUrl: '/catalogues/drakkar' },
  { name: 'Catalogue SODISE', url: '/catalogs/SODISEGeneral.pdf', viewerUrl: '/catalogues/sodise-general' },
  { name: 'Catalogue SODISE Promo', url: '/catalogs/SODISEPromo.pdf', viewerUrl: '/catalogues/sodise-promo' },
  { name: 'Catalogue Draper Tools', url: '/catalogs/DraperTools.pdf', viewerUrl: '/catalogues/draper-tools' },
  { name: 'Catalogue FOEN 2024', url: '/catalogs/FOEN2024.pdf', viewerUrl: '/catalogues/foen-2024' },
  { name: 'Catalogue Schneider 2024', url: '/catalogs/SCHNEIDER2024.pdf', viewerUrl: '/catalogues/schneider-2024' },
  { name: 'Catalogue Nettuno 2024', url: '/catalogs/NettunoCatalogue2024.pdf', viewerUrl: '/catalogues/nettuno-2024' },
  { name: 'Catalogue Stilker Sélection', url: '/catalogs/StilkerSelection.pdf', viewerUrl: '/catalogues/stilker-selection' },
  { name: 'Catalogue OMNC Équipement Pneus', url: '/catalogs/OMNCEquipementPneu.pdf', viewerUrl: '/catalogues/omnc-equipement-pneus' },
  { name: 'Catalogue WarmUp', url: '/catalogs/WarmUp.pdf', viewerUrl: '/catalogues/warmup' },
];

const Catalogues = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {catalogs.map((catalog, index) => (
        <div key={index} className="relative bg-violet shadow-lg p-8 text-center flex flex-col justify-between">
          <h3 className="text-xl font-semibold mb-4 text-white h-24 flex items-center justify-center">{catalog.name}</h3>
          <a
            href={catalog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <div className="button-wrapper">
              <div className="text">Télécharger</div>
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
          </a>
        </div>
      ))}
      <style jsx>{`
        .btn {
          --width: 160px;
          --height: 48px;
          width: var(--width);
          height: var(--height);
          background: #000;
          text-align: center;
          font-family: inherit;
          font-size: 18px;
          cursor: pointer;
          transition: background 0.3s;
          margin: 0 auto;
          position: relative;
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
          background: #cd0066;
        }

        .btn:hover .text {
          top: -100%;
        }

        .btn:hover .icon {
          top: 0;
        }
      `}</style>
    </div>
  );
};

export default Catalogues;
