import Image from "next/image";

interface HomeBannerProps {
    data: any; // Reemplázalo con un tipo más preciso si tienes la estructura
  }

  interface CardItem {
    title: string;
    text: string;
    description: string;
    image: any
  }


const HomeServices = ({ data }: HomeBannerProps) => {
    console.log(data.card);
    const baseApi = process.env.NEXT_PUBLIC_STRAPI_URL;

    return(
        <section className="home__services">
            <p className="text-primary text-center text-2xl font-bold mb-6">{data.title}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
            {data.card.map((item: CardItem, index: number) => (
                <div
                key={index}
                className="flex flex-col items-center text-center bg-white/10 w-full border-2 border-white"
              >
                {item.image && item.image.url && (
                  <Image
                    className="w-full h-auto" // La imagen ocupa el 100% del ancho y ajusta la altura automáticamente
                    priority
                    src={`${baseApi}${item.image.url}`}
                    width={0} // Establecer a 0 para no forzar el tamaño específico
                    height={0} // Establecer a 0 para no forzar el tamaño específico
                    alt={item.title || "Logo"}
                  />
                )}
                <div className="card__text bg-secundary p-10 w-full text-center min-h-[40px] sm:min-h-[80px]">
  <p className="text-white font-bold text-ellipsis overflow-hidden whitespace-nowrap sm:whitespace-normal">
    {item.title}
  </p>
</div>


              </div>
              
          ))}
        </div>
      </section>
      
    )
}

export default HomeServices;
