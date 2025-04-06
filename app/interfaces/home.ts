<<<<<<< HEAD
import { Card, MetaSEO, Picture } from "./shared";
=======
import { FieldData, Picture } from './shared';
>>>>>>> origin/feat/strapi-api

export interface IHome {
  data: HomeData;
}

export interface HomeData {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
<<<<<<< HEAD
  home_banner: HomeBanner;
  home_map: IHomeMap;
  /*   home_companies: IHomeCompanies;
  home_services: HomeServices;
  home_projects: HomeProjects;
  home_choose: HomeChoose;
  home_about: HomeAbout;
  Seo: MetaSEO; */
=======
  banner: HomeBanner;
  problemsWeSolve: HomeProblemsWeSolve;
  ourServicesImpact: HomeOurServicesImpact;
  services: HomeServices;
  specializedServices: HomeSpecializedServices;
  about: HomeAbout;
  projects: HomeProjects;
  testimonials: HomeTestimonials;
  contact: HomeContact;
  map: HomeMap;
  quoteRequestForm: HomeQuoteRequestForm;
>>>>>>> origin/feat/strapi-api
}
export interface HomeGenericSection {
  title: string;
  cards: Array<{
    title: string;
    description: string;
  }>;
}
export interface HomeBanner {
  title: string;
  subtitle: string;
  description: string;
  desktopImage: Picture;
}

<<<<<<< HEAD
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
=======
export type HomeProblemsWeSolve = HomeGenericSection;
>>>>>>> origin/feat/strapi-api

export type HomeOurServicesImpact = HomeGenericSection;

export type HomeServices = HomeGenericSection;

export type HomeSpecializedServices = HomeGenericSection;
export interface HomeAbout {
  title: string;
  desctiption: string;
  valuesCards: Array<{
    title: string;
    description: string;
  }>;
  meetOurTeam: {
    title: string;
  };
}
export interface HomeProjects {
  title: string;
  description: string;
}
export interface HomeTestimonials extends HomeGenericSection {
  description: string;
}
export interface HomeContact {
  title: string;
  description: string;
  locationUrl: string;
}
export interface HomeMap {
  title: string;
  servicesAreas: Array<{
    name: string;
    coordinates: {
      lat: number;
      lon: number;
    };
  }>;
}

export interface HomeQuoteRequestForm {
  title: string;
  cta: string;
  description: string;
  fields: {
    name: FieldData;
    phone: FieldData;
    service: FieldData;
    email: FieldData;
    preferredDateTime: FieldData;
  };
}
