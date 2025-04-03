"use client";

import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface HomeBannerProps {
  data: {
    title: string;
    card: CardItem[];
  };
}

interface CardItem {
  title: string;
  text?: string;
  description: string;
}

const HomeSolve = ({ data }: HomeBannerProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Ícono de Igual
  const EqualIcon = () => (
    <div className="bg-primary p-2 rounded-full shadow-md mx-2 flex items-center justify-center">
      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="10" width="16" height="2" />
        <rect x="4" y="14" width="16" height="2" />
      </svg>
    </div>
  );

  // Revisar el estado del scroll
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
  };

  // Mover el scroll horizontalmente
  const scrollBy = (offset: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    setTimeout(checkScroll, 300);
  };

  // Revisar el scroll al montar el componente
  useEffect(() => {
    checkScroll();
  }, []);

  return (
    <section className="home_problems_solve px-4 py-8 md:px-8 lg:px-16 relative">
      {/* Título */}
      <p className="title__home-solve text-center text-secundary">{data.title}</p>

      {/* Flecha Izquierda (Solo en Mobile) */}
      <button
        onClick={() => scrollBy(-window.innerWidth)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md z-10 lg:hidden"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Contenedor con Scroll SOLO en Mobile, SIN Scroll en Desktop */}
      <div
  ref={scrollRef}
  className="flex w-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar 
  md:flex-wrap md:justify-center md:gap-6 md:overflow-visible"
  onScroll={checkScroll}
>
  {data.card.map((item: CardItem, index: number) => (
    <div
      key={index}
      className="w-[90%] min-w-[90%] md:w-[calc(33.333%_-_24px)] md:min-w-[300px] 
      flex-shrink-0 bg-white shadow-md rounded-xl p-6 border border-gray-200 
      hover:shadow-lg transition duration-300 snap-center"
    >
      {/* Contenedor en fila para los dos span */}
      <div className="flex justify-center items-center mb-2 text-primary">
        <span className="title__card-home-solve text-sm font-bold">{item.title}</span>
        {item.text && <EqualIcon />}
        <span className="text__card-home-solve text-sm font-bold sm:text-md">{item.text}</span>
      </div>

      {/* Línea divisoria */}
      <hr className="border-primary mb-2" />

      {/* Descripción */}
      <p className="description__card-home-solve text-gray-700">{item.description}</p>
    </div>
  ))}
</div>


      {/* Flecha Derecha (Solo en Mobile) */}
      {showRightArrow && (
        <button
          onClick={() => scrollBy(window.innerWidth)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md z-10 lg:hidden"
        >
          <FaChevronRight size={20} />
        </button>
      )}
    </section>
  );
};

export default HomeSolve;

