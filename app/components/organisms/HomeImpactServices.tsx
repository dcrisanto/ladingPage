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


const HomeImpactServices = ({ data }: HomeBannerProps) => {
    console.log(data.card);
    const baseApi = process.env.NEXT_PUBLIC_STRAPI_URL;

    return(
        <section className="home_impact-services flex flex-col p-12">
            <p className="text-white text-center text-2xl font-bold mb-6">{data.title}</p>
        
            <div className="flex flex-wrap justify-center gap-5">
            {data.card.map((item: CardItem, index: number) => (
                <div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-white/10 w-[35%] md:w-1/5 border-2 border-white"
                >
                {item.image && item.image.url && (
                    <Image
                    className="mb-2 icon-card"
                    style={{ objectFit: "contain" }}
                    priority
                    src={`${baseApi}${item.image.url}`}
                    width={50}
                    height={50}
                    alt={item.title || "Logo"}
                    />
                )}
                <p className="text-white font-bold">{item.title}</p>
                </div>
            ))}
            </div>
        </section>
      
    )
}

export default HomeImpactServices;
