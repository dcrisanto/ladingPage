import { Picture } from './shared';
export interface GeneralData {
  title: string;
  name: string;
  phone: string;
  header: HeaderData;
  socialLinks: Array<{
    icon: Picture;
    href: string;
    isExternal: boolean;
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
