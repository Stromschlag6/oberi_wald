import React from 'react';
import NavStyle from './NavBar.css';

function HomePage() {
  return (
    <div className="flex flex-col items-center w-screen h-screen py-2 px-3 bg-red-300">
      <div className="flex flex-row py-3 px-2 h-1/4 bg-white text-black w-full">
        <div className='h-full w-1/3 p-1'>
          <img src='/images/Logo_finished.png' alt="Waldlogo" className="h-40 w-auto object-cover"/>
        </div>
        <div className='h-full w-2/3 p-4'>
          <h1>später Bild von der Umgebung</h1>
        </div>  
      </div>
      <div className="flex flex-col h-3/4 w-full bg-white items-center">
        <nav className="flex flex-row w-full justify-center bg-green-500 border-black border-2 text-white">
          <a href="#ueber" className="py-2 px-6 w-1/4 hover:bg-green-600 transition-colors">
            Home
          </a>
          <a href="#flora-fauna" className="py-2 px-6 w-1/4 hover:border-b-2 hover:border-white transition-all duration-100">
            Über den oberwinterthurer Wald
          </a>
          <a href="#sehenswuerdigkeiten" className="py-2 px-6 w-1/4 hover:bg-green-600 transition-colors">
            Flora und Fauna
          </a>
          <a href="#flora-fauna" className="py-2 px-6 w-1/4 hover:bg-green-600 transition-colors">
            Sehenswürdigkeiten und Nutzung
          </a>
        </nav>
        <section className="p-6 text-center max-w-2xl">
          <p className="text-xl">
            Willkommen zur Webseite über den Oberwinterthurer Wald! Erkunde die Geschichte, Flora und Fauna, sowie Wanderwege und Freizeitmöglichkeiten.
          </p>
        </section>
      </div>
    </div>
  );
}

export default HomePage;