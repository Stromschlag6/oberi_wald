import React, { useEffect, useState } from 'react';

const attractionCardData = [
  { image: '/images/Vitaparcours.webp', text: 'Vitaparcour' },
  { image: '/images/restaurant_goldenberg_schoen.jpg', text: 'Goldenberg restaurant mega coll Giuli schwuli juli lubi tschumibidi skibi toilet' },
  { image: '/images/baeumli_bild_schoen.jpeg', text: 'Bäumli mega cool toller langer text zum schauen obs geht suiiiiiiii' },
];

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isNext, setIsNext] = useState(true); // Steuert die Animationsrichtung

  const handleNavigation = (next) => {
    if (isAnimating) return; // Verhindert mehrfaches Auslösen während der Animation
    setIsAnimating(true);
    setIsNext(next);

    if (next) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % attractionCardData.length);
    } else {
      setActiveIndex((prevIndex) => (prevIndex - 1 + attractionCardData.length) % attractionCardData.length);
    }

    // Animation nach 500 ms beenden (Dauer der CSS-Animation)
    setTimeout(() => setIsAnimating(false), 500);
  };

  const [backgroundClass, setBackgroundClass] = useState('grayscale-0');
  const [backgroundColor, setBackgroundColor] = useState('none');
  const [imageTransparency, setImageTransparency] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      let newProgress = scrollY / windowHeight;

      if (newProgress >= 0 && newProgress <= 1.8) {
        const grayscaleValue = Math.min(newProgress, 1);
        setBackgroundClass(`grayscale-${grayscaleValue}`);
        setBackgroundColor('transparent');
        setImageTransparency(0);
      } else {
        setBackgroundClass(`grayscale-0`);
        setBackgroundColor('white');
        setImageTransparency(1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="bg-cover bg-center h-full w-full"
      style={{
        backgroundImage: `url(/images/wald_hintergrundbild.jpg)`,
        filter: `grayscale(${backgroundClass.includes('grayscale') ? backgroundClass.split('-')[1] : 0})`,
        transition: 'filter 0.1s linear',
      }}
    >
      <div
        className="h-full w-full backdrop-blur-sm"
        style={{ backgroundColor: `${backgroundColor}`, transition: 'background-color 0.5s ease-in-out' }}
      >
        <div className="flex flex-col items-center w-full h-screen">
          {/* Header */}
          <div className="flex flex-row py-3 px-2 h-1/4 text-black w-full">
            <div className="flex flex-col h-full w-1/3 p-1 justify-center">
              <img
                src="/images/Logo_finished.png"
                alt="Waldlogo"
                className="object-cover w-1/3 bg-opacity-20"
              />
            </div>
            <div className="h-full w-2/3 p-4" />
          </div>

          {/* Intro */}
          <div className="flex flex-col h-3/4 w-full">
            <nav className="flex flex-row w-full bg-green-700 border-black border-2 text-white">
              <a
                href="#ueber"
                className="flex items-center justify-center py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100"
              >
                Home
              </a>
              <a
                href="#flora-fauna"
                className="flex items-center justify-center py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100"
              >
                Über den oberwinterthurer Wald
              </a>
              <a
                href="#sehenswuerdigkeiten"
                className="flex items-center justify-center py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100"
              >
                Flora und Fauna
              </a>
              <a
                href="#flora-fauna"
                className="flex items-center justify-center py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100"
              >
                Sehenswürdigkeiten und Nutzung
              </a>
            </nav>
            <div className="flex flex-row h-full w-full items-center py-9 px-10">
              <div className="h-full w-1/2 bg-white bg-opacity-80">
                <p>später Einleitungsvideo</p>
              </div>
              <div className="h-full w-1/2 py-5 px-8">
                <p>
                  Einleitungstext sehr cool gestaltet, brauche viel Text als Platzhalter für Referenz
                  für später, heute hoffentlich noch etwas produktiv
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col pt-5 h-screen w-full'>
          <h1 className='flex mb-3 justify-center'>Geschichte</h1>
          <div className='flex flex-row h-full w-full'>
            <div className='flex justify-center h-full w-1/3'>
              <p className='flex'>Bild nachher</p>
            </div>
            <div className='flex justify-center h-full w-1/3'>
              <p className='flex'>Text nachehr</p>
            </div>
            <div className='flex justify-center h-full w-1/3'>
              <p className='flex'>Bild nachher</p>
            </div>
          </div>
        </div>

        {/* Karten-Sektion */}
        <div className="flex flex-col items-center w-full h-screen bg-white">
          <div className="flex justify-between w-full h-4/5 px-12">
            {/* Bilder */}
            <div className="relative w-1/2 flex justify-center items-center">
              {attractionCardData.map((item, index) => {
                const offset = (index - activeIndex + attractionCardData.length) % attractionCardData.length;
                const zIndex = -Math.abs(offset) + 2;
                const scale = Math.pow(0.9, Math.abs(offset));
                const opacity = Math.pow(0.8, Math.abs(offset));
                const translateX = offset * 40;
                const translateY = -offset * 20;
                const animation =
                  offset === 0
                    ? isNext
                      ? 'moveImage 0.5s ease-in-out'
                      : 'moveImageReverse 0.5s ease-in-out'
                    : 'none';

                return (
                  <div
                    key={index}
                    className="absolute rounded-lg shadow-md"
                    style={{
                      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                      zIndex,
                      opacity,
                      animation,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={`Image ${index}`}
                      className="object-cover rounded-lg h-72 w-60"
                    />
                  </div>
                );
              })}
            </div>

            {/* Texte */}
            <div className="relative w-1/2 flex justify-center items-center">
              {attractionCardData.map((item, index) => {
                const offset = (index - activeIndex + attractionCardData.length) % attractionCardData.length;
                const zIndex = -Math.abs(offset) + 2;
                const scale = Math.max(0.6, Math.pow(0.9, Math.abs(offset)));
                const opacity = Math.pow(0.8, Math.abs(offset));
                const translateX = -offset * 40;
                const translateY = -offset * 20;
                const animation =
                  offset === 0
                    ? isNext
                      ? 'moveText 0.5s ease-in-out'
                      : 'moveTextReverse 0.5s ease-in-out'
                    : 'none';

                return (
                  <div
                    key={index}
                    className="absolute bg-white p-6 rounded-lg shadow-md"
                    style={{
                      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                      zIndex,
                      opacity,
                      animation,
                    }}
                  >
                    <p className="text-lg font-medium text-center">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={() => handleNavigation(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md transition-all"
            >
              ←
            </button>
            <button
              onClick={() => handleNavigation(true)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md transition-all"
            >
              →
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes moveImage {
            0% {
              transform: scale(0.8) translateX(100%);
            }
            100% {
              transform: scale(1) translateX(0);
            }
          }
          @keyframes moveImageReverse {
            0% {
              transform: scale(0.8) translateX(-100%);
            }
            100% {
              transform: scale(1) translateX(0);
            }
          }
          @keyframes moveText {
            from {
              opacity: 0;
              transform: scale(0.8) translateX(-100%);
            }
            to {
              opacity: 1;
              transform: scale(1) translateX(0%);
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default HomePage;