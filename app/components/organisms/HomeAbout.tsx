"use client"
import { IHomeAbout } from "@/app/interfaces/home"
import { Picture } from "@/app/interfaces/shared"
import Image from 'next/image'
import { useState, useRef } from 'react';

interface HomeAboutProps {
    data: IHomeAbout
}

  interface CardItem {
    title: string;
    text: string;
    description: string;
    image: Picture;
  }



export const HomeAbout = ({data}: HomeAboutProps) => {
    const [currentImage, setCurrentImage] = useState(0);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const baseApi = process.env.NEXT_PUBLIC_STRAPI_URL; // URL del backend
    
    const handleDotClick = (index: number) => {
        setCurrentImage(index);

        // Desplazar el contenedor hacia la imagen correspondiente
        if (imageContainerRef.current) {
            const imageWidth = imageContainerRef.current.children[index].getBoundingClientRect().width;
            imageContainerRef.current.scrollTo({
                left: index * imageWidth, // Mover a la imagen seleccionada
                behavior: 'smooth',
            });
        }
    };

     // Mostrar solo 3 puntos a la vez (ventana deslizante)
     const totalImages = data.meetOurTeam.images.length;
     const maxVisibleDots = 3;
     const startIndex = Math.min(
         Math.max(currentImage - Math.floor(maxVisibleDots / 2), 0),
         Math.max(totalImages - maxVisibleDots, 0)
     );
     const endIndex = Math.min(startIndex + maxVisibleDots, totalImages);
     const visibleDots = data.meetOurTeam.images.slice(startIndex, endIndex);
 

    const imageValues = data.desktopImage.url
    ? `${baseApi}${data.desktopImage.url}`
    : "/default-logo.svg"; 

    return(
        <section className="flex flex-col items-center gap-5 h-full m-10">
            <h2 className="text-primary text-[18px] md:text-[32px] lg:text-[40px]">{data.title}</h2>
            <p className="text-center text-secondary text-[14px] md:text-[22px]  w-[90%] md:w-[80%] lg:w-[70%]">{data.description}</p>
            <div className="flex flex-col md:flex-row md:items-center md:gap-20 md:w-[80%]">
               {/* Imagen con fondo */}
                <div className="relative w-full h-[400px] md:h-[600px] md:w-[50%]">
                    {/* Fondo detrás de la imagen */}
                    <div className="absolute bottom-0 left-0 right-10 bg-primary h-[70%] z-10 rounded-b-xl" />
                    
                    {/* Imagen al frente */}
                    <Image 
                        src={imageValues}
                        fill
                        alt='imageValues'
                        className="object-contain z-20"
                    />
                </div>
                <div className="flex flex-col items-center my-5 md:w-[50%]">
                    <p className="text-[16px] text-secondary md:text-[24px] lg:text-[32px]">Our Values</p>
                        {data.valuesCards.map((item: CardItem, index: number) => (
                            <div
                            key={index}
                            className="w-full shadow-lg m-4 text-[14px]">
                                <div className="card__values flex items-center my-2 p-4 gap-4">
                                    <Image 
                                        src={`${baseApi}${item.image.url}`}
                                        width={40}
                                        height={40}
                                        alt='icon_values'  
                                        className="bg-secondary p-2 h-[40px]"            
                                    />
                                    <div className="w-full flex flex-col justify-center ml-5">
                                        <p className="text-primary md:text-[18px] lg:text-[22px]">{item.title}</p>
                                        <p className="text-secondary md:text-[18px] lg:text-[22px]">{item.description}</p>
                                    </div>
                                </div> 
                            </div>
                        ))}     
                </div>
            </div>
            <div className="w-full flex flex-col items-center md:flex-row justify-center md:w-[80%]">
                <p className="w-[70%] text-[18px] text-white p-8 bg-secondary text-center">{data.meetOurTeam.title}</p>
                {/* Contenedor de imágenes con desplazamiento horizontal */}
                <div className="relative w-full flex overflow-x-auto space-x-4" ref={imageContainerRef}>
                    {data.meetOurTeam.images.map((item) => (
                    <div key={item.id} className="flex-shrink-0 ">
                        <Image 
                            src={`${baseApi}${item.url}`}
                            width={300}
                            height={200}
                            alt='meet'  
                            className="w-[300px] h-[200px] md:w-[500px]"           
                        />
                    </div>
                    ))}
                    
                </div>
                 {/* Indicador de puntos dinámico */}
                <div className="flex justify-center space-x-2 border-2 border-secondary p-4">
                    {visibleDots.map((_, index) => {
                        const realIndex = startIndex + index;
                        return (
                            <span
                                key={realIndex}
                                onClick={() => handleDotClick(realIndex)}
                                className={`space-x-4 w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                                    currentImage === realIndex ? 'bg-primary' : 'bg-secondary'
                                } hover:bg-primary`}
                            ></span>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
