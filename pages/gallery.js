import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { urlFor } from '../sanity'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { getGalleryImages, x } from '../services/index'



const gallery = ({ images }) => {

  const [open, setOpen] = useState(true)
  const [slider, setSlider] = useState(0)

  const handleOpen = (slider) =>{
    setSlider(slider)
    setOpen(true)
  }

  const handlePrev = (slider) =>{
    slider === 0 ? setSlider( images.length - 1 ) : setSlider(slider - 1)
  }

  const handleNext = (slider) =>{
    slider + 1 === images.length ? setSlider(0) : setSlider(slider + 1)
  }

  return (
    <section>

      <Head>
        <title>Azhar | Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-4xl lg:p-8 mx-8 mt-2 lg:mt-8 font-bold text-center font-exo'>Gallery</h1>

      { open &&

      <div className='flex'>

          <ChevronLeftIcon 
          onClick={()=>handlePrev(slider)}
          className='mt-64 lg:ml-20 border rounded-full 
           hover:bg-white h-10 w-10 text-black 
          cursor-pointer active:scale-90 transition duration-150'/>


          <div className='relative ml-8 w-full h-screen'>     
           <Image src={urlFor(images[slider].image).url()} layout='fill' objectFit='contain' />
          </div>           

          <XMarkIcon 
          onClick={()=>setOpen(false)}
          className='mt-0 border rounded-full hover:bg-white 
           text-black h-10 w-10 cursor-pointer active:scale-90 transition duration-150'/>

          <ChevronRightIcon 
          onClick={()=>handleNext(slider)}
          className='mt-64 lg:mr-20 border rounded-full 
           hover:bg-white h-10 w-10 text-black 
          cursor-pointer active:scale-90 transition duration-150'/>


      </div>
        
     
      }


      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3
      md:gap-6 p-5 md:px-1 max-w-6xl mx-auto mb-7`}>
        {images.map((image, index) => (
          // <Link key={image._id} href={`/gallery/${image.name}`}>
              <div className='mx-auto border p-2 group cursor-pointer overflow-hidden'>

                <div key={index} className='relative h-48 w-48  object-center group-hover:scale-105
                transition-transform duration-200 ease-in-out'>
                  <Image 
                  onClick={()=>handleOpen(index)}
                  src={urlFor(image.image).url()} layout="fill"/>
                </div>              
    
              </div>
              
          // </Link>
        ))}
      </div>

    </section>
  )
}

export default gallery


export const getStaticProps = async () => {

    const images = await getGalleryImages()
  
    if (!images) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: { images },
      revalidate: 60,
    };
  };