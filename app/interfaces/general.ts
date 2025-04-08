import { Picture, ServicesList } from "./shared";

export interface GeneralData {
  title: string;
  name: string;
  phone: string;
  header: HeaderData;
  location: string;
  email: string;
  whatsappPhone: string;
  socialLinks: Array<{
    icon: Picture;
    href: string;
    isExternal: boolean;
  }>;
  servicesList: ServicesList[]
}

export interface HeaderData {
  logo: {
    text: string;
    image: Picture;
  };
  navigation: Array<{
    text: string;
    href: string;
    isExternal: boolean;
  }>;
  seo: {
    metaTitle: string;
    metaDescription: string;
    metaImage?: Picture;
  };
}

export interface Icon {
  width?: number;
  height?: number;
  color?: string;
}
