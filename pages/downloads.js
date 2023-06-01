import React from 'react'
import { getDownloads } from '../services';
import Link from 'next/link';
import { urlFor } from '../sanity'
import Head from 'next/head';
import Image from "next/image";
import { ArrowDownIcon, EyeDropperIcon, EyeIcon, EyeSlashIcon, } from '@heroicons/react/24/solid'





const downloads = ({ downloads }) => {
  return (
    <>
      <Head>
        <title>Ajmal Codes | Downloads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-4xl p-8 mx-8 mt-24 font-bold text-center'>All Downloads</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3
      md:gap-6 p-5 md:px-1 max-w-4xl mx-auto mb-7'>
        {downloads?.map((download) => (
              <div className='border border-blue-400 p-1 group cursor-pointer overflow-hidden'>

        
                <div className="flex-col items-stretch p-2 border-8 border-pink-700">

                  <div className='flex-col text-center'>
                    <p className='text-lg pt-1 font-bold'>{download?.title}</p>
                    <p className='text-xs '>{download?.filename}</p>
                  </div>

                  <div className='flex justify-between'>
                    <div>
                      <Link key={download?._id} href={`${download?.fileurl}`} target="_blank">
                        <a>
                          <EyeIcon className='h-7 w-7 cursor-pointer active:scale-90 transition duration-150'/>
                          <p className='text-xs text-center'>Show</p>
                        </a>
                      </Link>
                    </div>

                    <div>
                      <Link key={download?._id} href={`${download?.fileurl}?dl=`} target="_blank">
                        <a>
                          <ArrowDownIcon className='h-7 w-7 cursor-pointer active:scale-90 transition duration-150'/>
                          <p className='text-xs text-center'>Download</p>
                        </a>
                      </Link>
                    </div>

                  </div>

                </div>

              </div>
        ))}
      </div>

    </>

  )
}

export default downloads


export const getStaticProps = async () => {

  const downloads = await getDownloads()

  if (!downloads) {
    return {
      notFound: true,
    };
  }

  return {
    props: { downloads },
    // revalidate: 60,
  };
};