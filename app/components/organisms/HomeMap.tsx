"use client"
import { useGenerals } from '@/app/context/generals.context'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

interface HomeMapProps {
    id?: string,
    title: string,
    list: string
}

export const HomeMap = ({ title, list }: HomeMapProps) => {
    const { general } = useGenerals()
    return(
        <section className='section_home-map'>
            
            <div className="container__home-services-areas">
                <div className='container__title-icon-services'>
                    <p className='title__services'>{title}</p>
                    <div className='container__icon-services'>
                        <Image
                            src='/assets/icons/icon-services.svg'
                            width={30}
                            height={30}
                            alt='icon_services'
                        ></Image>
                    </div>
                </div>
                
                <div className="homeMap__Area-list">
                    <ReactMarkdown>{list}</ReactMarkdown>
                </div>
            </div>

            <div className="container__home-map">
                <iframe
                    src={general.map_url}
                    loading="lazy"
                    style={{ border: 0 }}
                    className="map__home-map"
                />
            </div>

        </section>
    )
}

