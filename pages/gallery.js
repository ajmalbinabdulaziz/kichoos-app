import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'
import { getGalleryImages } from '../services/index'



const gallery = ({ images }) => {

  return (
    <section>

      <Head>
        <title>Azhar | Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-4xl p-8 mx-8 mt-14 font-bold text-center font-exo'>Gallery</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3
      md:gap-6 p-5 md:px-1 max-w-6xl mx-auto mb-7'>
        {images.map((image) => (
          <Link key={image._id} href={`/gallery/${image.name}`}>
            <a>
              <div className='border p-1 group cursor-pointer overflow-hidden'>

                <img className='h-48 w-full object-center group-hover:scale-105
                  transition-transform duration-200 ease-in-out' src={urlFor(image.image)} alt="" />
        
                <div className="h-16">
                  <p className='text-lg text-center pt-1 font-bold'>{image.name}</p>
                </div>

              </div>
            </a>
          </Link>
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