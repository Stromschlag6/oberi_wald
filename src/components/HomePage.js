import React from 'react';

function HomePage() {
  return (
    <div className="flex flex-col items-center w-screen h-screen py-2 px-3 bg-cover" style={{ backgroundImage: `url('/images/wald_hintergrundbild.jpg')` }}>
      <div className="flex flex-row py-3 px-2 h-1/4 text-black w-full">
        <div className='flex flex-col h-full w-1/3 p-1 justify-center'>
          <img src='/images/Logo_finished.png' alt="Waldlogo" className="object-cover w-1/3"/>
          <div className='w-2/3'/>
        </div>
        <div className='h-full w-2/3 p-4'/>
      </div>
      <div className="flex flex-col h-3/4 w-full items-center">
        <nav className="flex flex-row h-1/4 w-full justify-center bg-green-700 border-black border-2 text-white">
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
        <div className='flex flex-row h-3/4 w-full bg-white items-center'>
          <div className='h-full w-1/2 m-10 bg-white'>
          </div>
          <div className='h-full w-1/2 m-10 bg-white'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;