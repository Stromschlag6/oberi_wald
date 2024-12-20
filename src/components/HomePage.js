import React, { useEffect, useState } from 'react';

function HomePage() {

  const [backgroundClass, setBackgroundClass] = useState('grayscale-0');
  const [backgroundColor, setBackgroundColor] = useState('none');


useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Fortschritt zwischen 0 (Start) und 1 (Ende) für jeden Abschnitt
    let newProgress = scrollY / windowHeight;

    // Dynamische Grayscale-Berechnung
    if (newProgress >= 0 && newProgress <= 1.8) {
      const grayscaleValue = Math.min((newProgress), 1); // Von 0 bis 1
      setBackgroundClass(`grayscale-${grayscaleValue}`);
      setBackgroundColor('transparent');
    } else {
      setBackgroundColor('white');
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className='bg-cover bg-center h-full w-full'
      style={{
        backgroundImage:`url(/images/wald_hintergrundbild.jpg)`,
        filter: `grayscale(${backgroundClass.includes('grayscale') ? backgroundClass.split('-')[1] : 0})`,
        transition: 'filter 0.1s linear',
      }}
    >
      <div className='h-full w-full backdrop-blur-sm' style={{backgroundColor: `${backgroundColor}`, transition: 'background-color 0.5s ease-in-out'}}>
        <div className="flex flex-col items-center w-full h-screen">
          <div className="flex flex-row py-3 px-2 h-1/4 text-black w-full">
            <div className='flex flex-col h-full w-1/3 p-1 justify-center'>
              <img src='/images/Logo_finished.png' alt="Waldlogo" className="object-cover w-1/3 bg-opacity-20"/>
              <div className='w-2/3'/>
            </div>
            <div className='h-full w-2/3 p-4'/>
          </div>
          <div className="flex flex-col h-3/4 w-full">
            <nav className="flex flex-row w-full bg-green-700 border-black border-2 text-white">
              <a href="#ueber" className="flex items-center justify-center py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100">
                Home
              </a>
              <a href="#flora-fauna" className="flex items-center justify-center py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100">
                Über den oberwinterthurer Wald
              </a>
              <a href="#sehenswuerdigkeiten" className="flex items-center justify-center py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100">
                Flora und Fauna
              </a>
              <a href="#flora-fauna" className="flex items-center justify-center py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100">
                Sehenswürdigkeiten und Nutzung
              </a>
            </nav>
            <div className='flex flex-row h-full w-full items-center py-9 px-10'>
              <div className='h-full w-1/2 bg-white bg-opacity-80'>
                <p>später Einleitungsvideo</p>
              </div>
              <div className='h-full w-1/2 py-5 px-8'>
                <p>Einleitungstext sehr cool gestaltet, brauche viel Text als Platzhalter für Referenz für später, heute hoffentlich noch etwas produktiv</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center pt-5 h-screen w-full'>
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
        <div className='flex flex-col items-center pt-5 h-screen w-full'>
          <h1 className='flex'>Sehenswürdigkeiten und Nutzung</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;