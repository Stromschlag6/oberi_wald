import React, { useEffect, useState } from 'react';

const attractionCardData = [
  {
    image: '/images/Vitaparcours.webp',
    title: 'Vitaparcours',
    text: 'Willkommen auf dem Zurich vitaparcours! Gesundheitsförderung, Entwicklung des Familien- und Naturerlebnisses, Stärkung des Breitensports – das Konzept des Zurich vitaparcours ist nach wie vor gültig. Sportbegeisterte absolvieren auf einer angelegten Strecke durch den Wald fünfzehn Stationen mit jeweils einer Auswahl aus insgesamt 43 Übungen: gelb bezeichnet Übungen für Beweglichkeit und Geschicklichkeit, rot für Kraft und blau für Ausdauer. Jeder Parcours ist vermessen nach Länge, Steigung und Leistungskilometer. Die Schlusstafel gibt Auskunft über Kalorienverbrauch und Ausdauerfähigkeit. Daneben wird der Parcours aber auch zum ganz persönlichen Erlebnis. Denn hier wird geplaudert, gelacht und manchmal auch geflirtet. Die Parcours befinden sich im schönsten Stadion der Welt – in der Natur. Alle können wann immer sie wollen gratis, alleine oder in Gesellschaft hingehen.'
  },
  {
    image: '/images/restaurant_goldenberg_schoen.jpg',
    title: 'Restaurant Goldenberg',
    text: 'Hoch über Winterthur am südlichen Waldrand des Lindbergs thront das Restaurant Goldenberg. Das denkmalgeschützte Gebäude wurde 1929 vom Winterthurer Industriellen Max Jäggli als Privatvilla erbaut. 1958 kaufte die Stadt die Villa und baute sie in ein Ausflugsrestaurant um.'
  },
  {
    image: '/images/baeumli_bild_schoen.jpeg',
    title: 'Das Bäumli',
    text: 'Das Bäumli im Nordosten der Stadt ist eine sonnige Aussichtsterrasse über den Reben des Goldenbergs. Es bietet einen Überblick über die Stadt von Seen bis nach Wülflingen und eine fantastische Weitsicht auf den Alpenkranz. Das Bäumli ist bei Winterthurerinnen und Winterthurern und bei Gästen gleichermassen der beliebteste Aussichtspunkt der Stadt.'
  },
];

const FaunaCardData = [
  {
    image: '/images/Rothirsch.avif',
    title: 'Der Rothirsch',
    text: 'Der Rothirsch (Cervus elaphus) ist eines der größten Wildtiere Europas. Männliche Rothirsche sind für ihr beeindruckendes, verzweigtes Geweih bekannt, das jährlich abgeworfen und erneut nachgewachsen wird. Sie leben vor allem in Wäldern und Weiden und sind in der Brunftzeit, die im Herbst stattfindet, für ihr markantes Röhren bekannt. Rothirsche sind Pflanzenfresser und ernähren sich von Gras, Sträuchern und Bäumen.'
  },
  {
    image: '/images/Murmeltiere.jpg',
    title: 'Das Murmeltier',
    text: 'Das Murmeltier (Marmota marmota) ist ein Nagetier, das in den Alpen und anderen Bergregionen lebt. Es bevorzugt steinige, grasbewachsene Gebirgshänge, wo es seine unterirdischen Bauten anlegt. Murmeltiere sind bekannt für ihr lautes Pfeifen, das sie als Warnruf vor Gefahr einsetzen. Im Herbst sammeln sie Nahrung und verfallen in einen langen Winterschlaf. Sie sind meist pflanzenfressend und fressen Gräser, Kräuter und Wurzeln.'
  },
  {
    image: '/images/Steinadler.jpg',
    title: 'Der Steinadler',
    text: 'Der Steinadler (Aquila chrysaetos) ist ein großer Greifvogel, der in den Bergregionen Europas, Asiens und Nordamerikas verbreitet ist. Mit einer Flügelspannweite von bis zu 2,3 Metern ist er ein meisterhafter Jäger. Der Steinadler jagt vor allem kleine Säugetiere und Vögel, die er aus der Luft erbeutet. Er lebt in abgelegenen Gebirgslagen und baut sein Nest in steilen Felsen. Der Steinadler gilt als Symbol für Stärke und Freiheit.'
  },
];

const FloraCardData = [
  {
    image: '/images/Wald-Geissbart.jpg',
    title: 'Der Wald-Geissbart',
    text: 'Der Wald-Geissbart ist eine mehrjährige, sommergrüne Pflanze, die bevorzugt an halbschattigen bis schattigen Standorten in durchlässigem Boden wächst. Von Juni-Juli präsentiert sie ihre Blüten, diese fallen nicht nur durch ihre weisse Farbe auf, sondern auch durch ihren angenehmen Duft. Dazu trägt sie gefiederte Blätter, die eine schöne mittelgrüne Farbe haben. Mit ihrem buschigen Wuchs eignet sie sich als prächtige Solitärstaude im Beet.'
  },
  {
    image: '/images/Kornelkirsche.jpg',
    title: 'Die Kornelkirsche',
    text: 'Die Kornelkirsche oder auch Tierlibaum ist ein sommergrüner, aufrechter, breiter und verzweigter Grossstrauch, der herrliche mittelgrüne, eiförmige Blätter mit gewelltem Rand trägt. Im Herbst begeistert das Laub wiederum mit orangegelben Farben. Die Blütezeit liegt zwischen März-April, dann trägt sie goldgelbe Blüten mit leichtem Duft. Zu August gehen daraus essbare Früchte hervor, die durch ihre rote Farbe ein Blickfang an diesem Gehölz sind. Besonders gut entwickelt sich dieses Laubgehölz in durchlässigem, humosem, kalkhaltigem, lehmigem Boden in sonnigen bis halbschattigen Lagen.'
  },
  {
    image: '/images/Fichte.jpg',
    title: 'Die Fichte',
    text: 'Die Fichte (Picea abies) ist ein immergrüner Nadelbaum, der in Europa weit verbreitet ist. Sie gehört zur Familie der Kieferngewächse und kann eine Höhe von bis zu 50 Metern erreichen. Die Fichte hat schmale, hängende Nadeln und zylindrische Zapfen, die im Herbst reifen und ihre Samen freisetzen. Ihr Holz ist von hoher wirtschaftlicher Bedeutung und wird in der Bauindustrie sowie für die Papierherstellung verwendet. Fichtenwälder sind typische Landschaftselemente in gemäßigten Klimazonen und bieten zahlreichen Tieren Lebensraum.'
  },
];

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [faunaIndex, setFaunaIndex] = useState(0);
  const [floraIndex, setFloraIndex] = useState(0);
  const [backgroundClass, setBackgroundClass] = useState('grayscale-0'); // Graustufen-Effekt
  const [backgroundColor, setBackgroundColor] = useState('transparent'); // Hintergrundfarbe
  const [secondaryBackgroundColor, setSecondaryBackgroundColor] = useState('transparent');
  const [imageTransparency, setImageTransparency] = useState(0); // Bildtransparenz

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % attractionCardData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + attractionCardData.length) % attractionCardData.length);
  };

  const handleNextFauna = () => {
    setFaunaIndex((prevIndex) => (prevIndex + 1) % FaunaCardData.length);
  };

  const handlePrevFauna = () => {
    setFaunaIndex((prevIndex) => (prevIndex - 1 + FaunaCardData.length) % FaunaCardData.length);
  };

  const handleNextFlora = () => {
    setFloraIndex((prevIndex) => (prevIndex + 1) % FloraCardData.length);
  };

  const handlePrevFlora = () => {
    setFloraIndex((prevIndex) => (prevIndex - 1 + FloraCardData.length) % FloraCardData.length);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = scrollY / windowHeight;

      if (progress >= 0 && progress <= 1.8) {
        const grayscaleValue = Math.min(progress, 1);
        setBackgroundClass(`grayscale-${grayscaleValue}`);
        setBackgroundColor('transparent');
        setImageTransparency(0);
      } else {
        setBackgroundClass('grayscale-0');
        setBackgroundColor('white');
        setSecondaryBackgroundColor('darkgreen');
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
        backgroundImage: "url('/images/wald_hintergrundbild.jpg')",
        filter: `grayscale(${backgroundClass.includes('grayscale') ? backgroundClass.split('-')[1] : 0})`,
        transition: 'filter 0.1s linear',
      }}
    >
      <div
        className="h-full w-full backdrop-blur-sm"
        style={{
          backgroundColor,
          transition: 'background-color 0.5s ease-in-out',
        }}
      >
        <div className="flex flex-col items-center w-full h-screen">
          <div className="flex flex-row py-3 px-2 h-1/4 text-black w-full">
            <div className="flex flex-col h-full w-1/3 p-1 justify-center">
              <img
                src="/images/Logo_finished.png"
                alt="Waldlogo"
                className="object-cover w-1/3 bg-opacity-20"
              />
            </div>
          </div>

          <div id='home' className="flex flex-col h-3/4 w-full">
            <nav className="flex flex-row w-full bg-green-700 border-black border-2 text-white">
              <a
                href="#home"
                className="flex items-center justify-center py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100"
              >
                Home
              </a>
              <a
                href="#story"
                className="flex items-center justify-center py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100"
              >
                Über den Wald
              </a>
              <a
                href="#life"
                className="flex items-center justify-center py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100"
              >
                Flora und Fauna
              </a>
              <a
                href="#tourism"
                className="flex items-center justify-center py-2 px-6 w-1/4 hover:border-b-2 hover:border-white hover:bg-green-600 transition-all duration-100"
              >
                Nutzung und Sehenswürdigkeiten
              </a>
            </nav>
            <div className="flex flex-row h-full w-full items-center py-9 px-10">
              <div className="h-full w-1/2 bg-white bg-opacity-80">
                <iframe
                  width="100%"  // Optional: Passt die Breite des Videos an den Container an
                  height="100%"  // Optional: Passt die Höhe des Videos an den Container an
                  src="https://youtu.be/1NzSzBkjYp8?feature=shared" // Ersetze DEIN_VIDEO_ID mit der tatsächlichen Video-ID
                  frameBorder="0"  // Optional: Entfernt den Rand um das Video
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen  // Ermöglicht die Vollbildansicht des Videos
                ></iframe>
              </div>
              <div className="h-full w-1/2 py-5 px-8 bg-gradient-to-r from-green-300 via-green-200 to-green-100 rounded-lg shadow-lg">
                <p className="text-2xl font-semibold text-gray-800 mb-4">
                  Der Oberwinterthurer Wald ist ein grünes Paradies, das zum Wandern und Entspannen einlädt. Mit seinen jahrhundertealten Bäumen, klaren Waldbächen und einer reichen Tierwelt bietet er Erholung und Abenteuer inmitten der Natur.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  In diesem Wald verschmelzen Geschichte und Natur – alte Pfade und traditionelle Hütten erzählen von vergangenen Zeiten. Ob für einen ruhigen Spaziergang oder eine ausgedehnte Wanderung, der Oberwinterthurer Wald ist der perfekte Rückzugsort für Naturfreunde.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id='story' className="flex flex-col pt-5 h-screen w-full">
          <h1 className="flex mb-3 justify-center">Geschichte</h1>
          <div className="flex flex-row h-full w-full">
            <div className="flex flex-col justify-center h-full w-1/3">
              <img src="images/Roemer_schweiz.jpeg" alt="" className="mb-4 rounded-lg shadow-md" />
              <img src="images/Vitudurum.jpeg" alt="" className="rounded-lg shadow-md" />
            </div>
            <div className="flex justify-center h-full w-1/3 p-6 bg-gray-100 rounded-lg shadow-md">
              <p className="text-lg font-medium text-gray-800 leading-relaxed">
                Die Römer hinterließen auch in Winterthur ihre Spuren. Im ersten Jahrhundert nach Christus war Vindonissa im Aargau ein wichtiges römisches Zentrum. In der Umgebung von Winterthur gab es römische Villen und landwirtschaftliche Siedlungen. Archäologische Funde wie Münzen und Keramiken belegen ihre Präsenz. Ihre Verbesserung des Straßennetzes und der Infrastruktur prägte die Region nachhaltig.
              </p>
            </div>
            <div className="flex justify-center h-full w-1/3">
              <img src="images/Rom_krieg.webp" alt="" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>

        <div id='tourism' className="flex flex-col items-center w-full h-screen" style={{ backgroundColor: `${secondaryBackgroundColor}`, opacity: `${imageTransparency}`, transition: 'background-color 0.5s ease-in-out, opacity 0.5 ease-in-out' }}>
          <div className="flex justify-between w-full h-4/5 px-12">
            <div className="relative w-1/2 flex justify-center items-center">
              {attractionCardData.map((item, index) => {
                const offset = (index - activeIndex + attractionCardData.length) % attractionCardData.length;
                const zIndex = -Math.abs(offset) + 2;

                // Skalierungs- und Transformationswerte
                const scale = Math.pow(0.8, Math.abs(offset));
                const opacity = Math.pow(0.7, Math.abs(offset));
                const translateX = `${offset * 60}px`;
                const translateY = `${-offset * 20}px`;

                const finalOpacity = opacity * imageTransparency;

                return (
                  <div
                    key={index}
                    className="absolute w-2/3 rounded-lg shadow-md mr-10 transition-transform duration-500"
                    style={{
                      transform: `translateX(${translateX}) translateY(${translateY}) scale(${scale})`,
                      zIndex,
                      opacity: finalOpacity,
                      transition: 'all 0.5s ease-in-out'
                    }}
                  >
                    {/* Container mit einheitlichem Seitenverhältnis */}
                    <div className="relative w-full pb-[75%] overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={`Image ${index}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative w-1/2 flex justify-center items-center">
              {attractionCardData.map((item, index) => {
                const offset = (index - activeIndex + attractionCardData.length) % attractionCardData.length;
                const zIndex = -Math.abs(offset) + 2;
                const scale = Math.pow(0.7, offset);
                const opacity = Math.pow(0.7, offset);
                const translateX = -offset * 100;
                const translateY = -offset * 20;

                const finalOpacity = opacity * imageTransparency;

                return (
                  <div
                    key={index}
                    className="absolute bg-white p-6 ml-10 rounded-lg shadow-md transition-transform duration-500"
                    style={{
                      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                      zIndex,
                      opacity: `${finalOpacity}`,
                      transition: `all 0.5s ease-in-out`
                    }}
                  >
                    <h3 className="text-xl font-semibold text-center mb-4">{item.title}</h3>
                    <p className="text-base text-center">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={handlePrev}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md transition-all"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md transition-all"
            >
              →
            </button>
          </div>
        </div>
        {/* Fauna und Flora Karussell-Abschnitt */}
        <div id='life' className="flex flex-row w-full h-full mt-80"> {/* Hinzugefügter Abstand hier */}
          {/* Fauna Karussell */}
          <div className="relative w-1/2 flex justify-center items-center">
            {FaunaCardData.map((item, index) => {
              const offset = (index - faunaIndex + FaunaCardData.length) % FaunaCardData.length;
              const scale = Math.pow(0.8, Math.abs(offset));  // Skalierung beibehalten, um Karten kleiner zu machen
              const opacity = Math.pow(0.7, Math.abs(offset));
              const translateX = offset * -60;
              const translateY = offset * 20;
              return (
                <div
                  key={index}
                  className="absolute w-3/4 rounded-lg shadow-md transition-transform duration-500"
                  style={{
                    transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                    zIndex: -Math.abs(offset) + 2,
                    opacity,
                  }}
                >
                  <div className="relative w-full pb-[75%] overflow-hidden rounded-lg">
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="w-full h-1/3 p-4 flex flex-col justify-center items-center text-center bg-white rounded-b-lg">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-base">{item.text}</p>
                  </div>
                </div>
              );
            })}
            {/* Pfeile unter Fauna */}
            <div className="absolute bottom-[-400px] flex justify-center w-full px-8"> {/* Abstand nach unten vergrößert */}
              <button
                onClick={handlePrevFauna}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md"
              >
                ←
              </button>
              <button
                onClick={handleNextFauna}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md"
              >
                →
              </button>
            </div>
          </div>

          {/* Flora Karussell */}
          <div className="relative w-1/2 flex justify-center items-center">
            {FloraCardData.map((item, index) => {
              const offset = (index - floraIndex + FloraCardData.length) % FloraCardData.length;
              const scale = Math.pow(0.8, Math.abs(offset));  // Skalierung beibehalten
              const opacity = Math.pow(0.7, Math.abs(offset));
              const translateX = offset * 60;
              const translateY = offset * 20;
              return (
                <div
                  key={index}
                  className="absolute w-3/4 rounded-lg shadow-md transition-transform duration-500"
                  style={{
                    transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                    zIndex: -Math.abs(offset) + 2,
                    opacity,
                  }}
                >
                  <div className="relative w-full pb-[75%] overflow-hidden rounded-lg">
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="w-full h-1/3 p-4 flex flex-col justify-center items-center text-center bg-white rounded-b-lg">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-base">{item.text}</p>
                  </div>
                </div>
              );
            })}
            {/* Pfeile unter Flora */}
            <div className="absolute bottom-[-400px] flex justify-center w-full px-8"> {/* Abstand nach unten vergrößert */}
              <button
                onClick={handlePrevFlora}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md"
              >
                ←
              </button>
              <button
                onClick={handleNextFlora}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full shadow-md"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
