import React from 'react'
import hero2 from '../assets/hero2.png'

const Hero2 = () => {
  return (
    <div className=''>
        <div 
        // className="h-[800px] bg-center bg-no-repeat mt-16"
         className="h-[800px] bg-no-repeat mt-16"
        style={{ backgroundImage: `url(${hero2})` }}
      >
              <p className='text-center text-5xl font-semibold'>Send money with Pay<span className='text-[#FF6A2B]'>va</span> in </p>
              <p className='text-center text-5xl font-semibold'>3 simple steps</p>

    </div>
    </div>
  )
}

export default Hero2