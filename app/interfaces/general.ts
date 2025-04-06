import { Picture } from './shared';
export interface GeneralData {
<<<<<<< HEAD
  id: number;
  phone: string;
  schedule: string;
  email: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  map_url: string;
  frame_url: string;
  pixel_facebook: string;
  tag_manager: string;
  facebook_id: string;
  social_networks: SocialNetwork[];
  logo: Logo;
}

export interface Logo {
  id: number;
=======
  title: string;
>>>>>>> origin/feat/strapi-api
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

export interface Icon {
  width?: number;
  height?: number;
  color?: string;
}
