import { Picture } from "./shared";

export interface GeneralData {
  title: string;
  name: string;
  phone: string;
  header: HeaderData;
  location: string;
  email: string;
  servicesList: any[];
  socialLinks: Array<{
    icon: Picture;
    href: string;
    isExternal: boolean;
  }>;
  servicesList: Array<{
    label: string;
    value: string;
  }>;
}

export interface HeaderData {
  logo: {
    text: string;
    image: string;
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
