import { IHomeAbout } from "@/app/interfaces/home"
import { Picture } from "@/app/interfaces/shared"
import Image from 'next/image'

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
    const baseApi = process.env.NEXT_PUBLIC_STRAPI_URL; // URL del backend

    const imageValues = data.img_desktop.url
    ? `${baseApi}${data.img_desktop.url}`
    : "/default-logo.svg"; 

    return(
        <section className="section__home-about flex flex-col items-center gap-5 h-full my-10 mx-4">
            <h2 className="text-primary text-[18px]">{data.title}</h2>
            <p className="text-center text-secondary text-[14px]">{data.description}</p>
            <div className="relative container__img-values flex flex-col items-center">
                {/* Contenedor de la imagen */}
                <div className="relative w-full z-20">
                     {/* Fondo detrás de la imagen */}
                    <div className="absolute bottom-0 left-0 right-0 bg-primary h-[30%] z-10" />
                    <Image 
                        src={imageValues}
                        width={260}
                        height={290}
                        alt='imageValues'   
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="container__values flex flex-col items-center my-5">
                    <p className="text-[16px] text-secondary">{data.title_values}</p>
                    {data.card_values.map((item: CardItem, index: number) => (
                        <div
                         key={index}
                         className="cards__values w-full shadow-lg m-4 text-[14px]">
                            <div className="card__values flex items-center my-2 p-4 gap-4">
                                <Image 
                                    src={`${baseApi}${item.image.url}`}
                                    width={40}
                                    height={40}
                                    alt='icon_values'  
                                    className="bg-secondary p-2 h-[40px]"            
                                />
                                <div className="w-full flex flex-col justify-center ml-5">
                                    <p className="text-primary">{item.title}</p>
                                    <p className="text-secondary">{item.description}</p>
                                </div>
                            </div> 
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
