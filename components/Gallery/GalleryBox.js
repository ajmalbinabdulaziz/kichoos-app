import Image from 'next/image'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'


const GalleryBox = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    
    <div>

        <h1 className='font-bold font-exo text-lg'>Gallery</h1>
        <div className='embla cursor-pointer border rounded-md w-80 h-48 overflow-hidden' ref={emblaRef}>
        <Link href="/gallery">        
        <div className="embla__container">
            <div className="embla__slide relative w-72 h-48 border-4 border-[rgb(36,36,36)] p-4">
                <Image src="/library.jpg" layout='fill' />
            </div>
            <div className="embla__slide relative w-72 h-48 border-4 border-[rgb(36,36,36)] p-4">
                <Image src="/casual.jpg" layout='fill' />
            </div>
            <div className="embla__slide relative w-72 h-48 border-4 border-[rgb(36,36,36)] p-4">
                <Image src="/football.jpg" layout='fill' />
            </div>
        </div>
        </Link>    
        </div>  

    </div>

  )
}

export default GalleryBox
