import { TApp } from '@/types/apps.type';
import React from 'react';
import AppCards from '../shared/AppCards';

const getAllApps = async () => {
  const res = await fetch('http://localhost:3000//data.json');
  const data = await res.json();
  return data;
}
const TrendingApps =async () => {
  const data =await getAllApps();
  console.log(data, 'from Trending Apps');
  
  return (
    <div className='container mx-auto'>
      <div className='text-center my-5'>
        <h2 className='font-bold text-3xl'>Trending Apps</h2>
        <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='grid grid-cols-4 gap-4'>
      {
        data.slice(0,8).map((app:TApp,ind:number) => {
          return (
            <div key={ind} >
              <AppCards  app={app}/>
            </div>
          )
        })
      }
      </div>
    </div>
  );
};

export default TrendingApps;