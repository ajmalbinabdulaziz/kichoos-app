import React from 'react'
import Image from 'next/image';


const GalleryBox = () => {
  return (
    <div className='border rounded-md w-80 h-56 overflow-hidden '>

        <div className='relative m-3 w-72 h-48 '>
          <Image src="/library.jpg" layout='fill' />
        </div>

        {/* <ImageSlider effectDelay={500} autoPlayDelay={2000}>

          <Slide>
            <div className='relative m-3 w-72 h-48 '>
              <Image src="/library.jpg" layout='fill' />
            </div>
          </Slide>

          <Slide>
            <div className='relative m-3 w-72 h-48 '>
              <Image src="/football.jpg" layout='fill' />
            </div>
          </Slide>

          <Slide>
            <div className='relative m-3 w-72 h-48 '>
              <Image src="/casual.jpg" layout='fill' />
            </div>
          </Slide>

        </ImageSlider> */}

  </div>
  )
}

export default GalleryBox