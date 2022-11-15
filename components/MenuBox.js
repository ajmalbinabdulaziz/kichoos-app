import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'


const MenuBox = () => {

  const { data: session } = useSession()

    return (
        <div className='flex-row min-w-full items-center bg-gray-300 border rounded-sm mt-4'>  
          <div className='flex font-bold border-black border-b px-4 py-1 cursor-pointer hover:bg-green-400'>
            {session ? (
              <div onClick={()=>signOut()}>Sign Out</div>
            ):(
              <div onClick={()=>signIn()}>Sign In</div>
            )}
          </div>
          <Link href="/downloads">
            <a className="flex font-bold border-black border-b px-4 py-1 cursor-pointer hover:bg-green-400">Downloads</a>
          </Link>

          <Link href="/blog">
            <a className="flex font-bold border-black border-b px-4 py-1 cursor-pointer hover:bg-green-400">Blog</a>
          </Link>
    
          <Link href="/contact">
            <a className="flex font-bold border-black border-b px-4 py-1 cursor-pointer hover:bg-green-400">Contact</a>
          </Link>  
       
        </div> 
      )
}

export default MenuBox