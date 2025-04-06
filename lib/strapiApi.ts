"use server";

import { ContactSignup, QuoteRequest } from "@/app/interfaces/forms";
import { GeneralData } from "@/app/interfaces/general";
import { HomeData } from "@/app/interfaces/home";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;
const apiToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

const createStrapiApiInstance = (
  baseURL: string | undefined,
  apiToken: string | undefined,
) => {
  if (!baseURL) throw new Error("baseUrl no está definido");
  if (!apiToken) throw new Error("apiToken no está definido");

  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });
};

export async function getGeneralData() {
  console.log("BASE URL:", baseURL);
  console.log("TOKEN:", apiToken);

  const populate = {
    header: {
      populate: {
        logo: {
          populate: "*",
        },
        navigation: {
          populate: "*",
        },
      },
    },
    seo: {
      populate: {
        shareImage: {
          populate: true,
        },
      },
    },
    socialLinks: {
      populate: "*",
    },
  };

  const instance = createStrapiApiInstance(baseURL, apiToken);
  const { data: general } = await instance.get<{ data: GeneralData }>(
    "/api/general",
    {
      params: {
        populate,
      },
    },
  );
  console.log(general.data);
  return general.data;
}

export async function getHomeData() {
  const populate = {
    banner: {
      populate: "*",
    },
    problemsWeSolve: {
      populate: "*",
    },
    ourServicesImpact: {
      populate: "*",
    },
    services: {
      populate: "*",
    },
    specializedServices: {
      populate: "*",
    },
    about: {
      populate: "*",
    },
    projects: {
      populate: "*",
    },
    testimonials: {
      populate: "*",
    },
    map: {
      populate: "*",
    },
    contact: {
      populate: "*",
    },
    quoteRequestForm: {
      populate: "*",
    },
  };

  const instance = createStrapiApiInstance(baseURL, apiToken);
  const { data } = await instance.get<{ data: HomeData }>("/api/home", {
    params: { populate },
  });

  return data.data;
}

export const createQuoteRequestData = async (quoteRequest: QuoteRequest) => {
  const instance = createStrapiApiInstance(baseURL, apiToken);
  await instance.post("/api/quote-requests", quoteRequest);
};

export const createContactSignupData = async (contactSignup: ContactSignup) => {
  const instance = createStrapiApiInstance(baseURL, apiToken);
  await instance.post("/api/contact-signups", contactSignup);
};
