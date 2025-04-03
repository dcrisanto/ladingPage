"use client";

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

  // Ícono de Igual
  const EqualIcon = () => (
    <div className="container__icon">
      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="10" width="16" height="2" />
        <rect x="4" y="14" width="16" height="2" />
      </svg>
    </div>
  );


  return (
    <section className="section__home_problems_solve">
      {/* Título */}
      <p className="title__home-problems-solve">{data.title}</p>

      <div className="cards__home-problems-solve">
      {data.card.map((item: CardItem, index: number) => (
          <div
              key={index}
              className="card__home-problems-solve"
            >
              {/* Contenedor en fila para los dos span */}
              <div className="container__title-card">
                <span className="title__card-home-solve">{item.title}</span>
                {item.text && <EqualIcon />}
                <span className="text__card-home-solve">{item.text}</span>
              </div>

              {/* Línea divisoria */}
          {/*     <hr className="line" /> */}

              {/* Descripción */}
              <p className="description__card-home-solve">{item.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default HomeSolve;

