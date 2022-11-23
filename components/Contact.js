import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col w-80 overflow-hidden mt-20'>

        <input 
            className='bg-gray-100 border rounded-lg w-auto m-2 p-4 font-sans'
            placeholder='yourname@email.com'
        > 

        </input>

        <button className='bg-[rgb(36,36,36)] border rounded-lg w-auto m-2 p-4 active:animate-ping'>
            <h1 className='text-white text-md font-bold font-exo'>
                GET UPDATES
            </h1>
        </button>

    </div>
  )
}

export default Contact