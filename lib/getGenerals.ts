"use server"; // ✅ Esto fuerza que solo se ejecute en el servidor
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getGenerals() {
  try {
    if (!baseURL) throw new Error("NEXT_PUBLIC_STRAPI_URL no está definido");

    const responses = await Promise.all([
      axios.get(`${baseURL}/general?populate=*`),
      axios.get(`${baseURL}/multilanguage?populate=*`),
    ]);

    const [{ data: general }, { data: multilanguage }] = responses;

    return {
      general: general?.data || null,
      multilanguage: multilanguage?.data || null,
    };
  } catch (error: any) {
    console.error("Error fetching generals:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
    return { general: null, multilanguage: null };
  }
}
