import React from 'react';

const catalogs = [
  { name: 'Catalogue Promo ASAP', url: 'https://drive.google.com/file/d/1oZjnRTl5nyS_QnkFQ0bPxe2cz3KjuUFn/view?usp=drive_link', viewerUrl: '/catalogues/promo-asap' },
  { name: 'Catalogue KingTony', url: 'https://drive.google.com/file/d/16wA0FHwFNZabjB7OTIQtTcrTmCaAohca/view?usp=drive_link', viewerUrl: '/catalogues/king-tony' },
  { name: 'Catalogue FLEX Best Of 2024', url: 'https://drive.google.com/file/d/1eXM0iL5ibKgFa8-QHiOzC7eRg-CrtJX7/view?usp=drive_link', viewerUrl: '/catalogues/flex-bestof' },
  { name: 'Catalogue FLEX', url: 'https://drive.google.com/file/d/1Lj7_s9EKPk1d1qXL_c6KqI9mps-kq5hY/view?usp=drive_link', viewerUrl: '/catalogues/flex' },
  { name: 'Catalogue Paradise Air', url: 'https://drive.google.com/file/d/1m1quKNkvL3rtDpNp6YiXz8hoe5spXYA2/view?usp=drive_link', viewerUrl: '/catalogues/paradise-air' },
  { name: 'Catalogue OMNC Industrial Sélection', url: 'https://drive.google.com/file/d/15DPTO2cBwbe_Wk31B8JijI-ZirdKw5C3/view?usp=drive_link', viewerUrl: '/catalogues/omnc-industrial-selection' },
  { name: 'Catalogue OMNC Général', url: 'https://drive.google.com/file/d/12jfa2flltWSWIkrL_ZvrkCKI6A-6n-el/view?usp=drive_link', viewerUrl: '/catalogues/omnc-general' },
  { name: 'Catalogue Mesto', url: 'https://drive.google.com/file/d/1zOn-meeZ8NjivJSnsXRhjS99Er6qROEQ/view?usp=drive_link', viewerUrl: '/catalogues/mesto' },
  { name: 'Tableau des Résistances Mesto', url: 'https://drive.google.com/file/d/1cpR7SLLkNhOjBlYV8KIVo0ErfYv0rHh8/view?usp=drive_link', viewerUrl: '/catalogues/tableau-mesto' },
  { name: 'Catalogue SONAX', url: 'https://drive.google.com/file/d/1_wBVX-ODsAJGhnr4CwNV4MASwJpnc3Lp/view?usp=drive_link', viewerUrl: '/catalogues/sonax' },
  { name: 'Catalogue DRAKKAR', url: 'https://drive.google.com/file/d/1No0Yl3SPCXsIuwqHPnG_ioThmKkmdTlq/view?usp=drive_link', viewerUrl: '/catalogues/drakkar' },
  { name: 'Catalogue SODISE', url: 'https://drive.google.com/file/d/1DeKH_rSHZ6FeBv45AkmHEctknwFBuCK7/view?usp=drive_link', viewerUrl: '/catalogues/sodise-general' },
  { name: 'Catalogue SODISE Promo', url: 'https://drive.google.com/file/d/1Wm_KhTqkd8Ct85ekEXR-0PJIWXBnM0qF/view?usp=drive_link', viewerUrl: '/catalogues/sodise-promo' },
  { name: 'Catalogue FOEN 2024', url: 'https://drive.google.com/file/d/1ZZ2sztGWgoq2gxOtyOtRIdbpNhaBe6Ii/view?usp=drive_link', viewerUrl: '/catalogues/foen-2024' },
  { name: 'Catalogue Schneider 2024', url: 'https://drive.google.com/file/d/1NXd16Ujhpuhw9DNnzLS2hGnu12_zQyOC/view?usp=drive_link', viewerUrl: '/catalogues/schneider-2024' },
  { name: 'Catalogue Nettuno 2024', url: 'https://drive.google.com/file/d/1k1SI9dLZQejdcrisrG1_JvcCB0hNWWvB/view?usp=drive_link', viewerUrl: '/catalogues/nettuno-2024' },
  { name: 'Catalogue Stilker Sélection', url: 'https://drive.google.com/file/d/11Y9U4kDECI0iqBj_iLJDCEu_DhlVJboa/view?usp=drive_link', viewerUrl: '/catalogues/stilker-selection' },
  { name: 'Catalogue OMNC Équipement Pneus', url: 'https://drive.google.com/file/d/1Kybrvll8w5cIFos8UHgNBdPSobE6RUxF/view?usp=drive_link', viewerUrl: '/catalogues/omnc-equipement-pneus' },
  { name: 'Catalogue WarmUp', url: 'https://drive.google.com/file/d/1kFqItRfIf2CL23hhRsNoMibzZB-tggFb/view?usp=drive_link', viewerUrl: '/catalogues/warmup' },
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
          cursor: none;
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
