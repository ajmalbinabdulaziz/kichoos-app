import React, { useState } from 'react'
import MenuBox from './MenuBox'


const HamburgerMenu = () => {
  
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-[rgb(36,36,36)] transition ease transform duration-300`;
    
    return (
        <div className='flex -mr-3'>

            { isOpen && 
            <div className='z-50 overflow-visible -mb-28 -ml-28'>
              <MenuBox />
            </div>
             }

            <button
            className="flex flex-col h-10 w-14 rounded justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
            >
            <div
                className={`${genericHamburgerLine} ${
                isOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "group-hover:bg-gray-300"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : " group-hover:bg-gray-300"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                isOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : " group-hover:bg-gray-300"
                }`}
            />
            </button>

        </div>
    );
}

export default HamburgerMenu