import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Avatar from './Avatar'
import HamburgerMenu from "./HamburgerMenu";
import Profile from './Profile'



function Header() {
    const { data: session } = useSession()

  return (
    <header className="flex justify-between p-5 lg:px-12 max-w-full mx-auto">
        <div className="flex space-x-5">
            <Link href="/">
                <img className="w-14 h-14 rounded-md object-contain cursor-pointer active:animate-ping" 
                    src="/asarLogo.jpg" alt="azhar icon" /> 
            </Link>
            
            <div className="hidden md:flex flex-row items-center space-x-5 p-0 m-0">
                <div className="hover:scale-150 transition duration-150">
                    <SocialIcon style={{ height: 42, width: 42, }} bgColor="#ffffff" fgColor="rgb(36,36,36)" network="youtube" url="https://youtube.com/c/AzharBinAbdulAziz" target="_blank"/>
                </div>
                <div className="hover:scale-150 transition duration-150">
                    <SocialIcon style={{ height: 42, width: 42, }} bgColor="#ffffff" fgColor="rgb(36,36,36)" network="linkedin" url="https://linkedin.com/in/ashar-abdul-aziz-18130135" target="_blank"/>
                </div>
                <div className="hover:scale-150 transition duration-150">
                    <SocialIcon style={{ height: 42, width: 42, }} bgColor="#ffffff" fgColor="rgb(36,36,36)" network="facebook" url="https://facebook.com/azharbinabdulaziz" target="_blank"/>
                </div>
                <div className="hover:scale-150 transition duration-150">
                    <SocialIcon style={{ height: 42, width: 42, }} bgColor="#ffffff" fgColor="rgb(36,36,36)" network="instagram" url="https://instagram.com/azhar_bin_abdul_aziz" target="_blank"/>                   
                </div>
            </div>

            {/* Search Box */}
            <form className='flex items-center border-2 w-[250px] sm:w-[370px] lg:w-[340px] xl:w-[500px]
            rounded-full border-gray-200 bg-gray-100 px-3 py-1'>
                <input className='flex-grow outline-none bg-transparent' 
                type="text" 
                placeholder='Search..'
                />
                <MagnifyingGlassCircleIcon className='h-10 w-10 text-gray-400 cursor-pointer active:scale-90 transition duration-150'/>
                <button type='submit' />
            </form>           

        </div>

        <div className="hidden lg:flex items-center space-x-3 text-[rgb(36,36,36)]">
            <Link href="/blog" target="_blank">
                <h3 className="cursor-pointer hover:text-blue-500">Blog</h3>
            </Link>
            <Link href="/downloads" target="_blank">
                <h3 className="cursor-pointer hover:text-blue-500">Downloads</h3>
            </Link>
            <Link href="/about" target="_blank">
                <h3 className="cursor-pointer hover:text-blue-500">About</h3>
            </Link>

            {session ? (
                    <div onClick={()=>signOut()} className='hidden cursor-pointer items-center border 
                    border-gray-100 p-1 lg:flex space-x-2'>
                        <div className='relative w-7 h-7 flex-shrink-0'>
                            {session?.user?.image ? (
                                <Image
                                    objectFit='contain'
                                    src={session?.user?.image}
                                    layout='fill'  
                                />
                            )
                            :(
                                <div className='-mt-1 '>
                                    <Avatar seed={session?.user?.name} />
                                </div>
                            )
                            }

                        </div>

                        <div className='flex-1 text-xs p-1'>
                            <p className='truncate'>{session?.user?.name}</p>
                            <p className='text-gray-400 font-bold'>Sign Out</p>
                        </div>

                    </div>
                ):(
                    <div onClick={()=>signIn()} className="">
                        <h3 className="border rounded-full border-[rgb(36,36,36)] px-4 py-1 cursor-pointer hover:bg-green-200 hover:text-blue-500">
                            Sign In
                        </h3>
                    </div>
                )

                }

        </div> 

        {session ? (
            <div className="pr-2 lg:hidden"><Profile /></div>
        ):(
            <div className="pr-2 lg:hidden"><HamburgerMenu /></div>                          
        )} 


    </header>

    )

}

export default Header;
