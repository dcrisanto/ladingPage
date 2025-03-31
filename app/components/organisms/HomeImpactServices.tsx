import Image from "next/image";

interface HomeBannerProps {
    data: any; // Reemplázalo con un tipo más preciso si tienes la estructura
  }

  interface CardItem {
    title: string;
    text: string;
    description: string;
    img: any
  }


const HomeImpactServices = ({ data }: HomeBannerProps) => {
    const EqualIcon = () => (
        <div className="bg-gray-200 p-2 rounded-full shadow-md mx-2 flex items-center justify-center">
          <Image src="/icons/equal.svg" alt="Equal Icon" width={20} height={20} />
        </div>
      );

    return(
        <section className="home_impact-services">
            <p className="text-white">{data.title}</p>
            <div>
            {data.card.map((item: CardItem, index: number) => (
                <div 
                key={index} 
                className="grid"
                >
                    <EqualIcon />
                    <p className="text-white font-bold">{item.title}</p>
                </div>
            ))}
            </div>
        </section> 
    )
}

export default HomeImpactServices;
