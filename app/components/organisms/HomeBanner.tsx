import type { HomeBanner } from '@/app/interfaces/home';
import Image from 'next/image';

interface HomeBannerProps {
  data: HomeBanner;
}

const HomeBanner = ({ data }: HomeBannerProps) => {
  const imgBanner = data.desktopImage.url;

  return (
    <section
      className="home_banner relative"
      style={{
        backgroundImage: imgBanner ? `url(${imgBanner})` : undefined,
      }}
    >
      <div className="container__img-banner">
        <Image
          className="img__banner h-[50vh] w-full"
          priority
          src={new URL(imgBanner, process.env.NEXT_PUBLIC_STRAPI_URL).href}
          width={120}
          height={70}
          alt="imgagen-banner"
          quality={100} // Asegura la mejor calidad posible
        />
      </div>

      <div className="home__banner-content-principal">
        <div className="home_banner-content">
          <h1 className="title__home-banner p-4 text-white bg-secundary">
            {data?.title}
          </h1>
          <h2 className="subtitle__home-banner text-white">{data?.subtitle}</h2>
          <p className="description__home-banner text-white">
            {data?.description}
          </p>
        </div>

        <div className="home_banner-form-contact">{/* <Form /> */}</div>
      </div>
    </section>
  );
};

export default HomeBanner;
