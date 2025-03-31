interface HomeBannerProps {
    data: any; // Reemplázalo con un tipo más preciso si tienes la estructura
  }

  interface CardItem {
    title: string;
    text: string;
    description: string;
  }

const HomeSolve = ({ data }: HomeBannerProps)  => {
    console.log(data);

    const EqualIcon = () => (
        <div className="bg-primary p-2 rounded-full shadow-md mx-2 flex items-center justify-center">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <rect x="4" y="10" width="16" height="2" />
            <rect x="4" y="14" width="16" height="2" />
            </svg>
        </div>
      );
    
    return(
        <section className="home_problems_solve px-4 py-8 md:px-8 lg:px-16">
            <p className="text-xl font-semibold text-center mb-6 text-secundary">{data.title}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.card.map((item: CardItem, index: number) => (
                <div 
                key={index} 
                className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
                >
                    {/* Contenedor en fila para los dos span */}
                    <div className="flex justify-center items-center mb-2 text-primary">
                        <span className="text-sm font-bold">{item.title}</span>
                        {/* Solo muestra el icono si item.text existe */}
                    {item.text && <EqualIcon />}
                        <span className="text-sm font-bold">{item.text}</span>
                    </div>
        
                    {/* Línea divisoria */}
                    <hr className="border-primary mb-2" />
            
                    {/* Descripción */}
                    <p className="text-gray-700">{item.description}</p>
                </div>
            ))}
            </div>
        </section> 
    )
}

export default HomeSolve;
