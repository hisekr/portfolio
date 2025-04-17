import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className='w-full mx-auto font-bold flex items-center flex-col bg-gray-900 text-white py-28 gap-6'>
        <h1 className='text-3xl md:text-4xl'>Hi,</h1>
        <h1 className='text-3xl md:text-4xl'>I'm <span className='text-6xl md:text-9xl'>Abhishek</span> </h1>
        <h1 className='text-3xl md:text-4xl'>Full stack Developer</h1>
        <div className='border-2 border-black'>
          <Image 
            src="/avatar.png"
            width={100}
            height={60}
           
          />
        </div>
      </div>
    </>
  )
}

export default Hero