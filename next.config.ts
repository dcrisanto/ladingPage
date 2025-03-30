import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tu-dominio-strapi.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // O el puerto de Strapi en desarrollo
      },
    ],
  },
};

export default nextConfig;
