"use client";

import { EqualIcon } from "@/app/icons/Equal";

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
  return (
    <section className="section__home_problems_solve">
      <svg className="icon__top-left" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" />
      </svg>
      {/* Título */}
      <p className="title__home-problems-solve">{data.title}</p>

      <div className="cards__home-problems-solve">
        {data.card.map((item: CardItem, index: number) => (
          <div key={index} className="card__home-problems-solve">
            {/* Contenedor en fila para los dos span */}
            <div className="container__title-card">
              <span className="title__card-home-solve">{item.title}</span>
              {item.text && <EqualIcon />}
              <span className="text__card-home-solve">{item.text}</span>
            </div>

            {/* Descripción */}
            <p className="description__card-home-solve">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSolve;
