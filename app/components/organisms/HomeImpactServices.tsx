import { Card, Picture } from "@/app/interfaces/shared";
import Image from "next/image";

interface HomeImpactServicesProps {
    data: any; // Reemplázalo con un tipo más preciso si tienes la estructura
  }

  interface CardItem {
     title: string;
     text: string;
     description: string;
     image: Picture;
  }


const HomeImpactServices = ({ data }: HomeImpactServicesProps) => {
    console.log(data);
    const baseApi = process.env.NEXT_PUBLIC_STRAPI_URL;

    return(
        <section className="section__home-impact-services">
            <div className="overlay"></div> {/* Este es el overlay */}
            <p className="title__home-impact-services">{data.title}</p>
        
            <div className="cards__home-impact-services">
            {data.card.map((item: CardItem, index: number) => (
                <div
                key={index}
                className="card__home-impact-services"
                >
                {item.image && item.image.url && (
                    <Image
                    className="icon__card-home-impact-services"
                    priority
                    src={`${baseApi}${item.image.url}`}
                    width={50}
                    height={50}
                    alt={item.title || "icon"}
                    />
                )}
                <p className="title__card-home-impact-services">{item.title}</p>
                </div>
            ))}
            </div>
        </section>
      
    )
}

export default HomeImpactServices;
