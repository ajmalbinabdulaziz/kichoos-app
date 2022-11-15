import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import Avatar from './Avatar'
import MenuBox from './MenuBox'


const Profile = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession()
  console.log(session)

  return (
      <div onClick={()=>setIsOpen(!isOpen)} className="flex relative">
        {session?.user?.image ? (
          <div className='flex-row w-10 h-10 border rounded-full flex-shrink-0 lg:hidden'>

          <Image
              objectFit='contain'
              src={session?.user?.image}
              layout='fill'  
          />
        </div>
        ): (
          <div className=''>
            <Avatar seed={session?.user?.name} />
          </div>
        )}

            <ChevronDownIcon  className=' absolute bottom-0 -ml-1 bg-white border rounded-full h-4 w-4 text-[rgb(36,36,36)]'/>
            <h1 className='absolute text-xs mt-9 -ml-4 truncate'>{session?.user?.name}</h1>
          { isOpen && 
              <div className='absolute z-50 overflow-visible -mb-28 -ml-28 mt-6'>
                <MenuBox />
              </div>
          }

      </div>
  )
}

export default Profile