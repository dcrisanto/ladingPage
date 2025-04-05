import { Card, MetaSEO, Picture } from "./shared";

export interface IHome {
  data: HomeData;
}

export interface HomeData {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  home_banner: HomeBanner;
  home_map: IHomeMap;
  /*   home_companies: IHomeCompanies;
  home_services: HomeServices;
  home_projects: HomeProjects;
  home_choose: HomeChoose;
  home_about: HomeAbout;
  Seo: MetaSEO; */
}

//++++++HOMEBANNER INTERFACES+++++++++++++//

export interface HomeBanner {
  id: number;
  subtitle: string;
  title: string;
  /*   img: Media;
  video_desktop: Media;
  video_tablet: Media;
  video_mobile: Media;
  pre_title: string; */
}

export interface IHomeMap {
  id?: string;
  title: string;
  list: string;
}

export interface IHomeAbout {
  id?: string;
  title: string;
  desktopImage: Picture;
  description: string;
  title_values: string;
  valuesCards: Card[];
  meetOurTeam: IMeetOurTeam;
}

export interface IMeetOurTeam {
  id?: string;
  title: string;
  images: Picture[];
}

/* export interface IHomeCompanies {
  id: number
  title: string
  companies: Picture[]
}

export interface Media {
  id: number
  name: string
  alternativeText: null
  caption: null
  width: null
  height: null
  formats: null
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: string
  updatedAt: string
}

//++++++HOMESERVICES_INTERFACES+++++++++++++//

export interface HomeServices {
  id: number
  title: string
  subtitle: string
  text: string
  service_card: ServiceCard[]
}

export interface ServiceCard {
  id: number
  text: string
  title: string
  image: Picture
  image_mobile: Picture
}

//++++++HOMEMIDDLE_INTERFACES+++++++++++++//

//++++++HOME PROJECTS_INTERFACES+++++++++++++//

export interface HomeProjects {
  id: number
  subtitle: string
  title: string
  bg_image: Picture
  images: Images[]
  project_card: IProjectCard[]
}

export interface IProjectCard {
  id: number
  title: string
  text: string
}

export interface Images {
  id: number
  image: Picture
}

//++++++HOMEBENEFITS_INTERFACES+++++++++++++//

export interface HomeChoose {
  id: number
  subtitle: string
  title: string
  text: string
  choose_card: ChooseCard[]
  img: Picture
}
export interface ChooseCard {
  id: number
  title: string
  text: string
  image: Picture
}
//++++++HOMEABOUT_INTERFACES+++++++++++++//

export interface HomeAbout {
  id: number
  subtitle: string
  title: string
  text: string
  img: Picture
}

//++++++HOMEMAP_INTERFACES+++++++++++++//

export interface HomeMap {
  id: number
  title: string
  text: string
  cities: string
}
 */
