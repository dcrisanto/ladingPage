"use client";

import Image from "next/image";
import { useState } from "react";

interface HomeBannerProps {
    data: any; // Reemplázalo con un tipo más preciso si tienes la estructura
  }

  interface CardItem {
    title: string;
    text: string;
    description: string;
    image: any
  }


const HomeServices = ({ data }: HomeBannerProps) => {
    const baseApi = process.env.NEXT_PUBLIC_STRAPI_URL;

    return (
        <section className="section__home-services">
          <p className="title__home-services">{data.title}</p>
    
          <div className="cards__home-services">
            {data.card.map((item: CardItem, index: number) => (
                <div
                key={index}
                className=""
              >

                <div className="relative w-full h-auto">
                  {item.image && item.image.url && (
                    <Image
                      className="w-full h-auto"
                      priority
                      src={`${baseApi}${item.image.url}`}
                      width={0}
                      height={0}
                      alt={item.title || "Image Serice"}
                    />
                  )}
              
                    <div className="card__home-services">
                        {item.description && (
                        <div className="card__home-service">
                            {item.description.split("\n").map((line, index) => (
                            <p key={index} className="p-2">{line}</p>
                            ))}
                        </div>
                        )}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    };
    

export default HomeServices;
