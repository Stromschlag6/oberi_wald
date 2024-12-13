import React from 'react';

function HomePage() {
  return (
    <div className="bg-center" style={{ backgroundImage: `url(/images/wald_hintergrundbild.jpg)` }}>
      <div className="flex flex-col items-center w-screen h-screen backdrop-blur-sm">
        <div className="flex flex-row py-3 px-2 h-1/4 text-black w-full">
          <div className='flex flex-col h-full w-1/3 p-1 justify-center'>
            <img src='/images/Logo_finished.png' alt="Waldlogo" className="object-cover w-1/3 bg-opacity-20"/>
            <div className='w-2/3'/>
          </div>
          <div className='h-full w-2/3 p-4'/>
        </div>
        <div className="flex flex-col h-3/4 w-full items-center">
          <nav className="flex flex-row w-full justify-center bg-green-700 border-black border-2 text-white">
            <a href="#ueber" className="py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100">
              Home
            </a>
            <a href="#flora-fauna" className="py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100">
              Über den oberwinterthurer Wald
            </a>
            <a href="#sehenswuerdigkeiten" className="py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100">
              Flora und Fauna
            </a>
            <a href="#flora-fauna" className="py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100">
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
      <div className='flex flex-col items-center h-screen w-screen grayscale bg-center'
           style={{ backgroundImage: `url(/images/wald_hintergrundbild.jpg)` }}>
        <div className='flex flex-col items-center h-full w-full backdrop-blur-sm'>
          <h1 className='flex'>Über den oberwinterthurer Wald</h1>
          <p className='flex'>Geschichte</p>
        </div>
      </div>
      <div className='flex flex-col items-center h-screen w-screen bg-white'>
        <h1 className='flex'>Sehenswürdigkeiten und Nutzung</h1>
      </div>
    </div>
  );
}

export default HomePage;