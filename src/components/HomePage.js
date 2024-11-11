import React from 'react';

function HomePage() {
  return (
    <div className="flex flex-col items-center bg-green-100 min-h-screen">
      <header className="flex h-1/4 bg-white text-black w-full">
        <div className='w-1/3 p-4'>
          <h1>Oberwinterthurer Wald</h1>
        </div>
        <div className='w-2/3 p-4'>
          <h1>später Bild</h1>
        </div>
      </header>
      <main className="flex-grow w-full flex flex-col items-center">
        <nav className="flex w-full justify-center bg-green-500 text-white py-4">
          <a href="#ueber" className="mx-4 py-2 px-6 w-1/4 hover:bg-green-600 rounded-lg transition-colors">
            Home
          </a>
          <a href="#flora-fauna" className="mx-4 py-2 px-6 w-1/4 hover:bg-green-600 rounded-lg transition-colors">
            Über den oberwinterthurer Wald
          </a>
          <a href="#sehenswuerdigkeiten" className="mx-4 py-2 px-6 w-1/4 hover:bg-green-600 rounded-lg transition-colors">
            Flora und Fauna
          </a>
          <a href="#flora-fauna" className="mx-4 py-2 px-6 w-1/4 hover:bg-green-600 transition-colors">
            Sehenswürdigkeiten und Nutzung
          </a>
        </nav>
        <section className="p-6 text-center max-w-2xl">
          <p className="text-xl">
            Willkommen zur Webseite über den Oberwinterthurer Wald! Erkunde die Geschichte, Flora und Fauna, sowie Wanderwege und Freizeitmöglichkeiten.
          </p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;