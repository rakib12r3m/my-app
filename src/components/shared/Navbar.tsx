import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-slate-200'>

      <div className='flex justify-between container mx-auto '>
        <div className='flex justify-between items-center'>
          <Image src={logo} alt='Logo Image' className='h-auto w-[60px]' />
          <p className='text-xs'>HERO.IO</p>
        </div>
       
          <ul className='flex gap-6 items-center justify-center '>
            <li className='hover:text-blue-600 font-bold'><Link href={"/"}>Home</Link></li>
            <li className='hover:text-blue-600 font-bold'><Link href={"/apps"}>Apps</Link></li>
            <li className='hover:text-blue-600 font-bold'><Link href={"/installation"}>Installation</Link></li>
          </ul>
       
    <div className='flex items-center'>
          <button className="btn btn-info ">Contribute</button>
     </div>
      </div>
    </nav>
  );
};

export default Navbar;