import Image from 'next/image'
import Link from 'next/link'


const Banner = () => {
  return (
    <div className='relative h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src="/black.jpg" layout='fill' objectFit='cover' />

        <div className='absolute top-72 right-0 left-0 mr-auto ml-auto width-[100px]
         text-white w-40 h-40 border rounded-full shadow-xl shadow-gray-200 hover:shadow-lg
         active:scale-90 transition duration-150 animate-pulse'>
          <Link href="/about" target="_blank" >
            <button className="" >
                <Image className='rounded-full' src="/centerLogo.jpg" layout='fill' />
            </button>
          </Link>
        </div>
    </div>
  )
}

export default Banner