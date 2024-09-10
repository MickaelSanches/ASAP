import React, { useEffect, useState } from 'react';

const logos = [
  '/brands/warmup.webp',
  '/brands/draper.webp',
  '/brands/ecar.webp',
  '/brands/efi.webp',
  '/brands/flex.webp',
  '/brands/irontek.webp',
  '/brands/jbm.webp',
  '/brands/konigstein.webp',
  '/brands/kt.webp',
  '/brands/mercator.webp',
  '/brands/neolux.webp',
  '/brands/nilfisk.webp',
  '/brands/omnc.webp',
  '/brands/paradise.webp',
  '/brands/proxitech.webp',
  '/brands/rupes.webp',
  '/brands/sodise.webp',
  '/brands/sonax.webp',
  '/brands/telwin.webp',
  '/brands/autel.webp',
  '/brands/oclair.webp',
];

const LogosCarousel = () => {
  const [scrollSpeed, setScrollSpeed] = useState(10);

  useEffect(() => {
    // Vérifier si nous sommes bien côté client
    if (typeof window !== "undefined") {
      const speed = window.innerWidth < 640 ? 20 : 10;
      setScrollSpeed(speed);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-4 bg-gray-500">
      <marquee behavior="scroll" direction="left" scrollamount={scrollSpeed} className="marquee">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="h-20 w-auto mx-4 inline-block"
          />
        ))}
      </marquee>
    </div>
  );
};

export default LogosCarousel;
