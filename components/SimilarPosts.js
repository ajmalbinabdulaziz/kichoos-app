import React, { useEffect, useState } from 'react'
import { getSimilarPosts } from '../services'
import { sanityClient, urlFor } from '../sanity'


export default function SimilarPosts({ slug, category }) {
  // console.log(slug, category)
  const [state, setState] = useState([])


  useEffect(() => {
    getSimilarPosts(slug, category).then((result) => {
      setState(result)
    })

  }, [slug]);


  return (

    <div className='border rounded-md overflow-hidden'>

      <h1 className='font-bold text-2xl text-center py-10'>Similar Posts</h1>

      {state?.map((cate) => (
        <div key={cate._id} className='flex justify-between p-5 bg-white'>

          <div>
            <p className='text-lg font-bold'>{cate.title}</p>
          </div>

          <img className='w-12 h-12 rounded-full' src={urlFor(cate.mainImage).url()} alt="" />

        </div>

      ))}

    </div>
  )

}

