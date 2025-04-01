"use client";

import Image from "next/image";
import { useState } from "react";

interface HomeBannerProps {
    data: any; // Reemplázalo con un tipo más preciso si tienes la estructura
  }

  interface CardItem {
    title: string;
    text: string;
    description: string;
    image: any
  }


const HomeSpecialized = ({ data }: HomeBannerProps) => {
    console.log(data);
    const baseApi = process.env.NEXT_PUBLIC_STRAPI_URL;
    // Usamos un estado para cada tarjeta para controlar el overlay individualmente
    const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

    // Función para alternar entre mostrar y ocultar la superposición
    const handleIconClick = (index: number) => {
        // Si ya hay un overlay activo, lo ocultamos; de lo contrario, mostramos el overlay para la tarjeta clickeada
        setActiveCardIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    
    // Icono de más (para mostrar)
    const PlusIcon = ({ onClick }: { onClick: () => void })  => (
        <div 
        onClick={onClick} // Asocia el clic al manejador de estado
        className="p-2 shadow-md mx-2 flex items-center justify-center sm:hidden border-2 border-white cursor-pointer">
          <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <rect x="10" y="4" width="4" height="16" /> {/* Vertical line of the plus */}
            <rect x="4" y="10" width="16" height="4" /> {/* Horizontal line of the plus */}
          </svg>
        </div>
    );

    // Icono de menos (para ocultar)
    const MinusIcon = ({ onClick }: { onClick: () => void }) => (
        <div
        onClick={onClick} // Al hacer clic, oculta el overlay
        className="p-2 shadow-md mx-2 flex items-center justify-center sm:hidden cursor-pointer border-2 border-white"
        >
        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <rect x="4" y="12" width="16" height="2" />
        </svg>
        </div>
    );

    return (
        <section className="home__services w-full bg-primary/10 p-10">
          <p className="text-secundary text-center sm:text-[40px] font-bold mb-6">{data.title}</p>
    
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
            {data.card.map((item: CardItem, index: number) => (
                <div
                key={index}
                className="relative flex flex-col items-center text-center bg-white/10 w-full border-2 border-white"
              >
                {/* Contenedor de la imagen y la superposición */}
                <div className="relative w-full h-auto">
                  {item.image && item.image.url && (
                    <Image
                      className="w-full h-auto"
                      priority
                      src={`${baseApi}${item.image.url}`}
                      width={0}
                      height={0}
                      alt={item.title || "Logo"}
                    />
                  )}
              
                  {/* Efecto hover en desktop */}
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/80 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 sm:block p-4">
                        {item.description && (
                        <div className="text-start text-white text-justify">
                            {item.description.split("\n").map((line, index) => (
                            <p key={index} className="p-2">{line}</p>
                            ))}
                        </div>
                        )}
                    </div>
              
                  {/* Overlay en mobile (activado por clic en icono) */}
                  {activeCardIndex === index && (
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/80 text-white flex items-center justify-center opacity-100 transition-opacity duration-300 sm:hidden">
                        {item.description && (
                        <div className="text-start text-white p-4">
                            {item.description.split("\n").map((line, index) => (
                            <p key={index} className="p-2">{line}</p>
                            ))}
                        </div>
                        )}
                    </div>
                  )}
                </div>
              
                {/* Contenedor del texto y el icono, ahora está FUERA del contenedor de la imagen */}
                <div className="card__text flex items-center justify-between sm:justify-center bg-secundary p-10 w-full text-center min-h-[40px] sm:max-h-[60px]">
                  <p className="text-white font-bold text-ellipsis overflow-hidden whitespace-nowrap sm:whitespace-normal">
                    {item.title}
                  </p>
              
                  {/* Icono que cambia entre "+" y "-" */}
                  {activeCardIndex === index ? (
                    <MinusIcon onClick={() => handleIconClick(index)} />
                  ) : (
                    <PlusIcon onClick={() => handleIconClick(index)} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    };
    

export default HomeSpecialized;
