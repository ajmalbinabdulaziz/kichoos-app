import React from 'react'
import Image from 'next/image'



const Image = () => {
  return (
    <main>
      <Head>
        <title>Azhar | Image</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>Image</h1>
        <div className='relative'>
            <Image src="/library.jpg" layout="fill" />
        </div>

    </main>
  )
}

export default Image