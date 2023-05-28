import React from 'react'

const Advertisement = () => {
  return (
    <div className='border rounded-md overflow-hidden'>
        <h1 className='font-bold text-2xl text-center py-10'>Want to contact me?</h1>
        <div className='flex pb-10 m-2 space-x-7 justify-center'>
            <a href="https://www.instagram.com/ajmal_codes/" target="_blank">
              <img className='w-10 h-10 lg:h-10' src="/instagram.png" alt="" />
            </a>
            <a href="https://twitter.com/ajmal_codes" target="_blank">
              <img className='w-10 h-10 lg:h-10' src="/twitter.png" alt="" />
            </a>
            <a href="https://github.com/ajmalbinabdulaziz" target="_blank">
              <img className='w-10 h-10 lg:h-10' src="/github.png" alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UCo1Jsx_Gho_FGMqlxtVGQog" target="_blank">
              <img className='w-10 h-10 lg:h-10' src="/youtube.png" alt="" />
            </a>
        </div>
    </div>
  )
}

export default Advertisement