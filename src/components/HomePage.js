import React from 'react';

function HomePage() {
  return (
    <div className="flex flex-col items-center bg-green-100 min-h-screen">
      <header className="flex h-20 bg-white text-black w-full">
        <div className='w-1/3 p-4'>
          <h1>Oberwinterthurer Wald</h1>
        </div>
        <div className='w-2/3 p-4'>
          <h1>später Bild</h1>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center">
        <section className="p-6 text-center max-w-2xl">
          <p className="text-xl">
            Willkommen zur Webseite über den Oberwinterthurer Wald! Erkunde die Geschichte, Flora und Fauna, sowie Wanderwege und Freizeitmöglichkeiten.
          </p>
        </section>
        <nav className="flex space-x-4 mt-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded">Über den Wald</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded">Flora und Fauna</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded">Sehenswürdigkeiten</button>
        </nav>
      </main>
    </div>
  );
}

export default HomePage;