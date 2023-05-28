import Head from 'next/head'
import Image from 'next/image';
import { sanityClient, urlFor } from '../sanity'
import { BookOpenIcon } from '@heroicons/react/24/solid'
import { RectangleStackIcon } from '@heroicons/react/24/outline';
import Banner from '../components/Banner';
import { motion } from "framer-motion"



export default function Home({ posts, categories }) {

  return (
    <div className='max-w-full mx-auto font-exo'>
      
      <Head>
        <title>Azhar Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <div className='absolute top-36 p-4 sm:top-40 w-full text-center'>
        {categories?.map((cate, index)=> index <= 0 && (    //running only one time.
          <h1 key={cate?._id} className='text-white text-xl sm:text-2xl lg:text-4xl shadow-lg'>
            <motion.div
                initial={{ opacity: 0,  scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 7, repeat: Infinity, }}
            >
            "{cate?.status?.status}"
            </motion.div> 
          </h1> 
        ))}
      </div>

      <div className='flex-row space-y-4 py-16'>

        {/* DISPLAY POSTS */}
 
          <div className='flex justify-center space-x-2'>
              <BookOpenIcon className='h-10 w-10 text-[rgb(36,36,36)]' />
              <h1 className='text-3xl font-semibold'>My recent posts!</h1>
          </div>
          <div className='grid grid-cols-1 m-12 md:m-24 lg:m-28 sm:grid-cols-2 lg:grid-cols-3 gap-3
          md:gap-6 p-10 md:p-4 border rounded-md font-roboto'>
          {posts.map((post, index) => (
            <a key={post?._id} href={`/posts/${post?.slug.current}`} target="_blank" >
              <div className='border cursor-pointer overflow-hidden lg:m-12 hover:scale-150 transition duration-150'>

                  {post?.mainImage ? (
                    <div className='relative p-20'>
                      <Image
                        src={urlFor(post?.mainImage).url()}
                        layout='fill'
                      />
                    </div>
                  ):(
                      <div className='relative p-20'>
                        <Image
                          src='/asr.jpg'
                          layout='fill'
                        />
                      </div>
                  )}
                                   
                <div className='flex justify-between p-3 -mt-2 bg-white'>
                  
                  <div>
                    <p className='text-lg font-bold'>{post?.title}</p>
                    <p className='text-xs'>
                      {post?.description}
                    </p>
                  </div>

                </div>  

              </div>
            </a>

          ))}
          </div>


         {/* DISPLAY CATEGORIES */}

         <div className='flex justify-center space-x-2 pt-20'>
            <RectangleStackIcon className='h-10 w-10 text-[rgb(36,36,36)]' />
            <h1 className='text-3xl font-semibold'>Download Categories!</h1>
          </div>
          <div className='grid grid-cols-1 m-12 md:m-24 lg:m-28 sm:grid-cols-2 lg:grid-cols-3 gap-3
             md:gap-6 p-10 md:p-4 border rounded-md'>
          {categories?.map(category => (
             
            <a key={category?._id} href={`/post/${category?.title}`} target="_blank" >
              <div className='border cursor-pointer overflow-hidden hover:scale-110 transition duration-150'>

                {!category?.mainImage ? (   
                  <div className='relative p-10'>
                    <Image
                      src='/category.jpg'                    
                      // layout='fill'
                      width={100}
                      height={100}
                    />
                  </div>
                ):(
                  <div className='relative p-10 w-50 h-50'>
                    <img className='' src={urlFor(category?.mainImage).url()} alt="" />
                  </div>                  
                )}
                 
                <div className='p-2 -mt-2 bg-white'>
                  <p className='text-sm '>{category?.title}</p>
                </div>


              </div>
            </a>
          ))}
          </div>

      </div>

    </div>
  )
}


export const getServerSideProps = async () => {

  const query1 = `*[_type == "post"]{
    _id,
     title,
      description,    
      slug,
      author -> {
          name,
          image,
          bio
      },
      mainImage,
  }`

  const query2 = `*[_type == "category"]{
    _id,
    title,
    mainImage,
    "status": *[_type=="status"][0],
  }` 

  const posts = await sanityClient.fetch(query1)
  const categories = await sanityClient.fetch(query2)

  return {
    props: {
      posts, categories
    }
  }
}

