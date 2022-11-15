import React from 'react'

const Categories = ({ categories }) => {
  return (
        <div className='grid grid-cols-1 m-12 md:m-24 lg:m-28 sm:grid-cols-2 lg:grid-cols-3 gap-3
        md:gap-6 p-10 md:p-4 border rounded-md'>
        {categories.map(category => (
            
            <a key={category._id} href={`/post/${category.title}`} target="_blank" >
                <div className='border rounded-sm cursor-pointer overflow-hidden lg:m-12 object-cover group-hover:scale-125
                transition-transform duration-200 ease-in-out'>
                
                {category.mainImage ? (
                    <div className='relative p-20'>
                        <Image
                        src={urlFor(category.mainImage).url()}
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
                
                </div>
                    
                <div className='p-2 -mt-2 bg-white'>
                    <p className='text-sm '>{category.title}</p>
                </div>   
            </a>
        ))}
        </div>

  )
}

export default Categories


export const getServerSideProps = async () => {
  
    const query = `*[_type == "category"]{
      _id,
      title,
      mainImage,
      "status": *[_type=="status"][0],
    }` 
  
    const categories = await sanityClient.fetch(query)
  
    return {
      props: {
        categories
      }
    }
  }