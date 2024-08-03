import { useEffect, useRef } from 'react';

const LogosCarousel = ({ logos }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
      }
    };
    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-x-hidden my-12">
      <div className="flex" ref={carouselRef}>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className="w-32 h-32 object-contain mx-2" />
        ))}
      </div>
    </div>
  );
};

export default LogosCarousel;
