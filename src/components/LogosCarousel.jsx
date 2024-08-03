import React from 'react';

const logos = [
  '/brands/bardahl.webp',
  '/brands/bosch.webp',
  '/brands/brembo.webp',
  '/brands/castrol.webp',
  '/brands/luk.webp',
  '/brands/magneti.webp',
  '/brands/mann.webp',
  '/brands/mobil.webp',
  '/brands/monroe.webp',
  '/brands/trw.webp',
  '/brands/valeo.webp',
  '/brands/wd.webp',
];

const LogosCarousel = () => {
  return (
    <div className="w-full overflow-hidden py-4 bg-white">
      <div className="flex w-[200%] animate-marquee">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="h-20 w-auto mx-4 flex-shrink-0"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo}
            alt={`Logo ${index}`}
            className="h-20 w-auto mx-4 flex-shrink-0"
          />
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogosCarousel;
