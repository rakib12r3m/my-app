'use client';
import AppCards from '@/components/shared/AppCards';
import { AppContext } from '@/context/appContext/AppProvider';
import { TApp } from '@/types/apps.type';
import React, { useContext } from 'react';


const InstallationPage = () => {

  const {installedApp, setInstalledApp} = useContext(AppContext);
  console.log(installedApp, "from installation page");
  // const allInstalledApps = installedApp.map((app)=> {
  //   return app;
  // })
  
  return (
    <div className='border-t py-7 bg-slate-200'>
      <h3 className='text-center text-4xl font-bold py-5'>Our All Applications</h3>
      <p className='text-center pb-5'>Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className='container mx-auto grid grid-cols-4 gap-4 py-7 text-[#627382]'>
        {
          installedApp.map((app: TApp) => {
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

export default InstallationPage;