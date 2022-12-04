import { sanityClient } from "../sanity";


// Query to Get the Similar Posts
export const getSimilarPosts = async ({slug, category}) => {
    const query = `*[_type=="post" && slug.current!=$slug && $category in categories[]->title]{
      _id,
      title, 
      slug,
      categories[0]->{
        title
      },
      mainImage
    }`
  
    const result = await sanityClient.fetch(query, { slug, category });
  
  
    return result
  }


export const getCategory = async ()=>{
    const query = `*[_type=="category" ]{
        title, 
      
      }`

    const categories = await sanityClient.fetch(query)

    return categories
      
}


export const getPosts = async ()=>{
  const query = `*[_type=="post"]{
    _id,
    slug {
      current
    },
  }`
 
  const posts = await sanityClient.fetch(query)
  return posts
}

export const getPostDetails = async (slug) => {
  const query = `*[_type=="post" && slug.current==$slug][0]{
    _id,
    _createdAt,
    title,
    description,
    author -> {
        name,
        image,
    },
    'comments': *[
      _type == "comment" &&
      post._ref == ^._id],
    mainImage,
    slug,
    body
  }`;


  const postDetails = await sanityClient.fetch(query, { slug })

  return postDetails
    
}

// Query to get the server side props 

export const getServerSide = async ()=> {
  const query = `*[_type=="post"]{
    _id,
    title,
    description,
    slug,
    author -> {
        name,
        image,
        bio
    },
    mainImage
  }
  `
  const result = await sanityClient.fetch(query)
  return result
}

// Query to get the static props 

export const getStaticSide = async ()=> {
  const query = `*[_type=="post"]{
    _id,
    title,
    description,
    slug,
    author -> {
        name,
        image,
        bio
    },
    mainImage
  }
  `
  const result = await sanityClient.fetch(query)
  return result
}



export const getGalleryImages = async ()=>{
  const query = `*[_type == "gallery"]{
    name,
    image,
  }`
 
  const images = await sanityClient.fetch(query)
  return images
}


