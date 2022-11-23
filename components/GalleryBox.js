import React from 'react'
import Image from 'next/image';


const GalleryBox = () => {
  return (
    <div className='border rounded-md w-80 overflow-hidden '>

        <div className='relative m-5 mx-7 w-auto h-48 bg-gray-400'>
            <Image src="/library.jpg" layout='fill' />
        </div>

  </div>
  )
}

export default GalleryBox