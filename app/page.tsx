import HomeBanner from "./components/organisms/HomeBanner";
import HomeImpactServices from "./components/organisms/HomeImpactServices";
import HomeServices from "./components/organisms/HomeServices";
import HomeSolve from "./components/organisms/HomeSolve";
import HomeSpecialized from "./components/organisms/HomeSpecialized";
/* import { HomeData } from "./interfaces/home";
 */
const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

/* interface HomeProps {
  home: HomeData
} */


export default async function Home() { //{ home }: HomeProps

  const res = await fetch(`${API_URL}/api/home?populate[home_banner][populate]=*&populate[home_problems_solve][populate]=*&populate[home_impact_services][populate][card][populate]=image&populate[home_services][populate][card][populate]=image&populate[home_specialized][populate][card][populate]=image&populate&populate[home_about][populate]=*&populate[home_projects][populate]=*&populate[home_testimonials][populate]=*&populate[home_contact][populate]=*&populate[home_map][populate]=*`, {
    cache: "no-store", // O usa "force-cache" si quieres revalidar con ISR
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch home data");
  }
  
  const { data: homeData } = await res.json();

  console.log(homeData);
  

  return (
          <main className="">
        {/*    <HomeBanner data={homeData.home_banner} /> */}
            <HomeSolve data={homeData.home_problems_solve} />
            <HomeImpactServices data={homeData.home_impact_services} />
      {/*       <HomeImpactServices data={homeData.home_impact_services} />
            <HomeServices data={homeData.home_services} />
            <HomeSpecialized data={homeData.home_specialized} /> */}
          </main>
  
  );
}


