import { FieldData, Picture } from "./shared";

export interface IHome {
  data: HomeData;
}
export interface HomeData {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
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

export type HomeProblemsWeSolve = HomeGenericSection;

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
