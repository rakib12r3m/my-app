import Image from 'next/image';
import React from 'react';
import banner from '@/assets/hero.png'

const Banner = () => {
  return (
    <>
    <div className='flex flex-col items-center bg-gray-200 space-y-4 my-[50px] '>
      <h1 className='text-center font-bold text-6xl'>We Build<br/>
        <span className='text-[#8249EB]'>Productive</span> Apps</h1>
      <p className='text-center text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='flex justify-center gap-4'>
        <button className='btn btn-ghost bg-blue-500'>Google Play</button>
        <button className='btn btn-ghost bg-amber-500'>App Store</button>
      </div>
      <Image src={banner} alt='Banner Image' className='flex justify-center items-center max-w-[700px] h-auto'/>
    </div>
    
    </>
  );
};

export default Banner;