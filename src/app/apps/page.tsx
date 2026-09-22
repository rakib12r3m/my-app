import React from 'react';
import { getAllApps } from '../lib/app';
import { TApp } from '@/types/apps.type';
import AppCards from '@/components/shared/AppCards';



const AppsPage = async () => {
  const allApps = await getAllApps();


  return (
    <div className='border-t py-7 bg-slate-200'>
      <h3 className='text-center text-4xl font-bold py-5'>Our All Applications</h3>
      <p className='text-center pb-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className='container mx-auto grid grid-cols-4 gap-4 py-7 text-[#627382]'>
        {
          allApps.map((app: TApp) => {
            return (
              <div key={app.id}>
                <AppCards app={app} />
              </div>
            )
          })
        }
        <h2>Apps Page</h2>
      </div>
    </div>
  );
};

export default AppsPage;