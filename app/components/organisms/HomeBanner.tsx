import Form from "../molecules/Form";

interface HomeBannerProps {
    data: any; // Reemplázalo con un tipo más preciso si tienes la estructura
  }

  const baseApi = process.env.NEXT_PUBLIC_STRAPI_URL;

  const HomeBanner = ({ data }: HomeBannerProps) => {
    console.log(data);
  
    // Aseguramos que `img_desktop` tiene al menos una imagen
    const imgBanner =
      data?.img_desktop?.length > 0
        ? `${baseApi}${data.img_desktop[0].url}`
        : "";
  
    return (
      <section
        className="home_banner"
        style={{
          backgroundImage: imgBanner ? `url(${imgBanner})` : undefined,
        }}
      >
        <div className="home__banner-content-principal">
          <div className="home_banner-content">
            <h1 className="title__home-banner p-4 text-white bg-secundary">{data?.title}</h1>
            <h2 className="subtitle__home-banner text-white">{data?.subtitle}</h2>
            <p className="description__home-banner text-white">{data?.description}</p>
          </div>

          <div className="home_banner-form-contact">
              <Form />
          </div>
        </div>
        
      </section>
    );
  };
  
  export default HomeBanner;
  
