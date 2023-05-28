import Image from "next/image"
import { urlFor } from '../sanity'
import Link from "next/link"
// import Highlight from 'react-highlight'
// import Lowlight from 'react-lowlight'
// import javascript from 'highlight.js/lib/languages/javascript'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";




export const myPortableTextComponents = {
  types: {
    image: ({value}) => {
      return(
        <div className="relative w-full h-96 m-7 mx-auto">
          <Image 
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            layout="fill"
          />
        </div>
      )},
  },


  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <Link href={value.href} rel={rel} className="underline decoration-[#F7AB0A] hover:decoration-black" >
          {children}
        </Link>
      )
    },
    code: ({children}) => {
      return(
        <div className='py-6'>
        <div className='p-4 border border-red-500 rounded-md bg-slate-900 text-green-400 
          font-mono font' >
            {children}
        </div>
        
        </div>
      )

    },
  },

  block: {
    normal: ({children}) => <h1 className="font-serif py-2">{children}</h1>,
    h1: ({children}) => <h1 className="font-semibold text-2xl text-center py-4">{children}</h1>,
    h2: ({children}) => <h1 className="text-xl py-2">{children}</h1>,
    h3: ({children}) => <h1 className="text-lg py-2">{children}</h1>,
    h4: ({children}) => <h1 className="text-md py-2">{children}</h1>,
    sm: ({children}) => <h1 className="text-sm py-2">{children}</h1>,
    xs: ({children}) => <h1 className="text-xs py-2">{children}</h1>,
    blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({children}) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),

  },

  list: {
    bullet: ({children}) => <ul className="mt-xl">{children}</ul>,
    number: ({children}) => <ol className="mt-lg">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
  },

  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({children}) => <li style={{listStyleType: 'disclosure-closed'}}>{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({children}) => <li>✅ {children}</li>,
  },

}
  