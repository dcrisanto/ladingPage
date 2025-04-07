import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormattedImageUrl(url?: string): string | null {
  if (!url) return null;

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const baseApi = process.env.NEXT_PUBLIC_STRAPI_URL || "";
  return `${baseApi}${url}`;
}
