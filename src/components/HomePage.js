import React from 'react';

function HomePage() {
  return (
    <div className="flex flex-col items-center w-screen h-screen py-2 px-3 bg-red-300">
      <div className="flex flex-row py-3 px-2 h-1/4 bg-white text-black w-full">
        <div className='h-full w-1/5 flex justify-center items-center p-1'>
          <img src='/images/Logo_finished.png' alt="Waldlogo" className="h-full w-full object-contain"/>
        </div>
        <div className='h-full w-4/5 p-4'>
          <h1>später Bild von der Umgebung</h1>
        </div>  
      </div>
      <div className="flex flex-col h-3/4 w-full bg-white items-center">
        <nav className="flex flex-row w-full justify-center bg-green-500 border-black border-2 text-white">
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
        <div className='flex flex-row w-full bg-white items-center'>
          <div className='h-full w-1/2'>
            <img src='/images/wald_hintergrundbild.jpg' alt='Platzhalter für home' className=''/>
          </div>
          <div className='h-full w-1/2'>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;