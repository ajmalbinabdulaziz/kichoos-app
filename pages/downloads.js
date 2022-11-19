import React from 'react'
import { getStaticSide } from '../services';
import Link from 'next/link';
import { urlFor } from '../sanity'
import Head from 'next/head';
import Image from "next/image";




const downloads = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Ajmal Codes | Downloads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-4xl p-8 mx-8 mt-24 font-bold text-center'>All Blog Posts</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3
      md:gap-6 p-5 md:px-1 max-w-6xl mx-auto mb-7'>
        {posts.map((post) => (
          <Link key={post._id} href={`/posts/${post.slug.current}`} target="_blank">
            <a>
              <div className='border p-1 group cursor-pointer overflow-hidden'>

                {/* <img className='h-48 w-full object-cover group-hover:scale-105
                  transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage)} alt="" /> */}

                  <div className='relative h-48 w-full object-cover group-hover:scale-105
                  transition-transform duration-200 ease-in-out'>
                    <Image 
                      src={urlFor(post.mainImage).url()}
                      // width={250}
                      // height={150}
                      layout="fill"
                    />
                  </div>
        
                <div className="h-16">
                  <p className='text-lg text-center pt-1 font-bold'>{post.title}</p>
                  <p className='text-xs px-2'>
                      {post.description}
                    </p>
                </div>

              </div>
            </a>
          </Link>
        ))}
      </div>

    </>

  )
}

export default downloads


export const getStaticProps = async () => {

  const posts = await getStaticSide()

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    // revalidate: 60,
  };
};