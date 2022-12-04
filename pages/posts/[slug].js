import { urlFor } from "../../sanity";
import PortableText from "react-portable-text";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react"
import Contact from '../../components/Contact'
import GalleryBox from '../../components/GalleryBox'
import { useQuery } from "react-query";
import { getPostDetails } from "../../services";
import Timeago from 'react-timeago';
import Avatar from '../../components/Avatar'
import { ChatBubbleLeftIcon, HandThumbUpIcon, ShareIcon,TrashIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import Image from "next/image";


function PostPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ submitted, setSubmitted ] = useState(false)    
  const [state, setState] = useState()
  const router = useRouter()
  const { slug } = router.query
  const { data: session } = useSession()
  const [ buttonClicked, setButtonClicked ] = useState(false)
  const [inputValue, setInputValue] = useState("");

  const {isLoading, isError, error, isFetched, refetch} =useQuery(['states', slug], ()=>{
    return getPostDetails(slug).then(res => setState(res))
  })

  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  const resetInputField = () => {
    setInputValue("");
  };

  console.log(inputValue)

  const onSubmit = async(data) => {
    setButtonClicked(true)
    await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify({...data,
        _id: state?._id,
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
      }
      ),
    }).then(()=> {
      console.log(data);
      setButtonClicked(false)
      setSubmitted(true);
      refetch()
      reset()      
    }).catch((err) => {
      console.log(err);
      setSubmitted(false);
    })
  } 

  const onDelete = async(data) => {
    setButtonClicked(true)

    await fetch('/api/createComment', {
      method: 'DELETE',
      body: data._id,
    }).then(()=> {
      refetch()
      setButtonClicked(false)
    }).catch((err) => {
      console.log(err);
    })
  } 

  return (
    <main>
      <Head>
        <title>Azhar | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? (
                <div className='mt-20 font-bold text-center text-2xl'>
                    Loading..
                </div>
            ) :
            isError ?
            (
                <div className="mt-20 font-bold text-2xl text-center">
                    {error.message}                   
                </div>
            ):
            (    
            <div className='bg-gray-50 grid grid-cols-1 lg:grid-cols-3 px-10 py-4'>
    
             <article className='flex flex-col col-span-2 lg:pl-4 pr-0 mt-8'>
    
                <h1 className='font-bold text-5xl text-stone-800 py-7' >{state?.title}</h1>
    
                <div className='py-2 flex items-center space-x-2'>
                <img className='w-10 h-10 rounded-full' src={urlFor(state?.author.image).url()} alt="author image" />
                <p>
                    Blog state by <span className='font-bold'>{state?.author.name}</span>  - Published at {" "}
                    {new Date(state?._createdAt).toLocaleString()}
                </p>
                </div>
    
                <hr className=" border-purple-500 mx-12" />
    
                <div className="py-3 mt-8 mb-5">
                <PortableText
                    className=""
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                    content={state?.body}
                    serializers={{
                    h1: (props) => <h1 className="text-2xl font-bold my-5" {...props} />,
                    h2: (props) => <h1 className="text-xl font-bold my-5" {...props} />,
                    li: ({ children }) => <li className="ml-4 list-disc p-1">{children}</li>,
                    link: ({ href, children }) => (
                        <a href={href} className="text-blue-500 hover:underline">
                        {children}
                        </a>
                    ),
                    }}
                />
                </div>
    
                <hr className='max-w-full my-5 mx-10 border border-purple-500 border-t-0'/> 
        
                <div className='mt-1'>
    
                <div className=' rounded-b-md py-5'>
    
                    {state?.comments.map((comment)=>(
                    <div 
                    className='relative flex items-center space-x-2 space-y-5 pr-12'
                    key={comment._id}
                    >
                        {comment.image ? (
                        <div className='z-50 py-2 pt-5 pl-2'>
                            <Image src={comment.image} width={50} height={50} className="rounded-full" /> 
                        </div>
                        )
                        : (
                        <div className='z-50 py-2 pl-4'>
                            <Avatar seed={comment.name} />
                        </div>
                        )}
            
                        <div className="flex">
                            <div className='flex flex-col border border-gray-100 rounded-lg w-full bg-gray-100'>
                                <p className='py-2 text-gray-400 text-xs'>
                                    <span className='font-semibold text-gray-600 text-sm'>
                                    {comment.name}
                                    </span>
                                    . <Timeago className="px-2" date={comment._createdAt}  />
                                </p>
            
                                <p className="p-2">{comment.comment}</p>
                            </div>

                            <div
                                onClick={()=>onDelete(comment)} 
                                className="flex flex-col justify-center p-2 cursor-pointer 
                                    text-gray-400 hover:text-gray-700">
                                {(session?.user.name === comment.name) ? 
                                    (
                                        <TrashIcon height={20} width={20} />                                   
                                        
                                    ) : ""
                                }                               
                            </div>                            
                        </div>                            
                </div>
                ))}    
    
                </div>
                    {!session ? (
                        <div className="w-full">
                            <button
                            onClick={()=>signIn()}
                            type='submit'
                            className='rounded-full bg-red-500 p-4 w-full text-white font-semibold
                            disabled:bg-gray-200'>
                                Login to comment
                            </button>
                        </div>
    
                    ) : (          
                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                        className='flex flex-col space-y-2'
                    >
                        <textarea 
                        {...register('comment')}
                        className='h-24 rounded-lg border border-gray-200 p-2 pl-4 outline-none
                        disabled:bg-gray-100'
                        placeholder={
                            session ? 'Write your comments' : 'Please sign in to comment'
                        }
                        value={inputValue} onChange={handleUserInput}
                        />
            
                        <button
                        disabled={buttonClicked}
                        onClick={resetInputField}
                        type='submit'
                        className='rounded-full bg-red-500 p-3 text-white font-semibold
                        disabled:bg-gray-200'>
                            Comment
                        </button>                 
                    </form>
                    )}                         
                </div>
    
             </article>
    
             <section className='p-5 mt-20 lg:ml-12 lg:p-10 mb-20'>
                <GalleryBox />
                <Contact />
             </section>
           </div>

        )}
  
    </main>
  );
}

export default PostPage;

