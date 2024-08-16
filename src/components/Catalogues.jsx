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
        <div key={index} className="relative bg-violet shadow-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-4 text-white">{catalog.name}</h3>
          <a
            href={catalog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-noir text-white py-2 px-4 hover:bg-rose transition-colors mt-4"
          >
            Télécharger
          </a>
        </div>
      ))}
    </div>
  );
};

export default Catalogues;

