interface HomeBannerProps {
    data: any; // Reemplázalo con un tipo más preciso si tienes la estructura
  }

  const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

  const HomeBanner = ({ data }: HomeBannerProps) => {
    console.log(data);
  
    // Aseguramos que `img_desktop` tiene al menos una imagen
    const desktopImageUrl =
      data?.img_desktop?.length > 0
        ? `${process.env.STRAPI_URL}${data.img_desktop[0].url}`
        : "";
  
    return (
      <section
        className="home_banner"
        style={{
          backgroundImage: desktopImageUrl ? `url(${desktopImageUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="home_banner-content">
          <h1>{data?.title}</h1>
          <h2>{data?.subtitle}</h2>
          <p>{data?.description}</p>
        </div>

        <div className="home_banner-form-contact">
            <p>Form</p>
        </div>
      </section>
    );
  };
  
  export default HomeBanner;
  
