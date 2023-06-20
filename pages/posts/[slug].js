import { urlFor } from "../../sanity";
import Head from "next/head";
import { useSession, signIn } from "next-auth/react"
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "../../components/PortableTextComponent";
import { usePost } from "../../contexts/PostContext";
import CommentForm from "../../components/comment/commentForm";
import CommentList from "../../components/comment/commentList";
import GalleryBox from "../../components/GalleryBox"
import Contact from "../../components/Contact"



function PostPage() {

  const { post, slug, rootComments, comments } = usePost()
  console.log(post)

  const { data: session } = useSession()

  return (
    <main>
      <Head>
        <title>Azhar | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>  

            <div className='bg-gray-50 grid grid-cols-1 lg:grid-cols-3 px-10 py-4 pb-36'>
    
             <article className='flex flex-col col-span-2 lg:pl-4 pr-0 mt-8'>
    
                <h1 className='font-bold text-5xl text-stone-800 py-7' >{post?.title}</h1>
    
                <div className='py-2 flex items-center space-x-2'>
                <img className='w-10 h-10 rounded-full' src={urlFor(post?.author?.image).url()} alt="author image" />
                <p>
                    Blog state by <span className='font-bold'>{post?.author?.name}</span>  - Published at {" "}
                    {new Date(post?._createdAt).toLocaleString()}
                </p>
                </div>
    
                <hr className=" border-purple-500 mx-12" />
    
                <div className="py-3 mt-8 mb-5">
                  <PortableText value={post?.body} components={myPortableTextComponents} />
                </div>
    
                <hr className='max-w-full my-5 mx-10 border border-purple-500 border-t-0'/> 
        
                <div className='mt-1'>
    
                  <div className=' rounded-b-md py-5'>

                  {/* COMMENT SECTION */}   

                  {session ? (
                      <div>
                      <div className="py-6">
                        <CommentForm postId={post?._id} user={session?.user?.name} email={session?.user?.email} 
                            userImage={session?.user?.image}/>
                      </div>

                      <div>
                          {rootComments && rootComments.length> 0 && (
                            <CommentList comments={rootComments}/> 
                          )}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <button
                              onClick={()=>signIn()}
                              type='submit'
                              className='rounded-full bg-red-500 p-4 w-full text-white font-semibold
                              disabled:bg-gray-200 my-4'>
                                  Sign In to comment
                        </button>
                        <div>
                          {rootComments && rootComments.length> 0 && (
                            <CommentList comments={rootComments}/> 
                          )}
                        </div>
                      </div>
                    )}         
        
                  </div>
                                      
                </div>
    
             </article>
    
             <section className='p-5 mt-20 lg:ml-12 lg:p-10 mb-20'>
                <GalleryBox />
                <Contact />
             </section>
           </div>        
  
    </main>
  );
}

export default PostPage;

