'use client';
import { AppContext } from "@/context/appContext/AppProvider";
import React, { useContext } from "react";

const AppDetailsPageButton = ({app}) => {
  const {installedApp, setInstalledApp} =useContext(AppContext);
  const handleInstallationApp = () => {
        setInstalledApp([...installedApp,app])
  }
  console.log(installedApp, 'trigard Insatall button');
  

  return <button onClick={handleInstallationApp} className="btn btn-primary mt-6"> Install App </button>;
};

export default AppDetailsPageButton;
