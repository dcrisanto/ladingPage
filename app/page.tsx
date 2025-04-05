import { HomeAbout } from "./components/organisms/HomeAbout";
import HomeBanner from "./components/organisms/HomeBanner";
import HomeImpactServices from "./components/organisms/HomeImpactServices";
import { HomeMap } from "./components/organisms/HomeMap";
import HomeServices from "./components/organisms/HomeServices";
import HomeSolve from "./components/organisms/HomeSolve";
import HomeSpecialized from "./components/organisms/HomeSpecialized";
/* import { HomeData } from "./interfaces/home";
 */
const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export default async function Home() { //{ home }: HomeProps

  const res = await fetch(`${API_URL}/api/home?populate[home_banner][populate]=*&populate[home_problems_solve][populate]=*&populate[home_impact_services][populate][card][populate]=image&populate[home_services][populate][card][populate]=image&populate[home_specialized][populate][card][populate]=image&populate[home_about][populate][card_values][populate]=image&populate[home_about][populate]=img_desktop&populate[home_projects][populate]=*&populate[home_testimonials][populate]=*&populate[home_contact][populate]=*&populate[home_map][populate]=*`, {
    cache: "no-store", // O usa "force-cache" si quieres revalidar con ISR
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch home data");
  }
  
  const { data: homeData } = await res.json();
  

  return (
          <main className="">
        {/*    <HomeBanner data={homeData.home_banner} /> */}
            <HomeSolve data={homeData.home_problems_solve} />
            <HomeImpactServices data={homeData.home_impact_services} />
            <HomeAbout data={homeData.home_about} />
            <HomeMap 
              title={homeData.home_map.title}
              list={homeData.home_map.list}
            />
      {/*       <HomeImpactServices data={homeData.home_impact_services} />
            <HomeServices data={homeData.home_services} />
            <HomeSpecialized data={homeData.home_specialized} /> */}
          </main>
  
  );
}


