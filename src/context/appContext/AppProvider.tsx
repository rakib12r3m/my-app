'use client';
import React, { useState } from 'react';
import { createContext } from 'react';


export const AppContext = createContext({});
const AppProvider = ({children}) => {

  const [installedApp, setInstalledApp] = useState([]);
  const appState = {
    installedApp,
    setInstalledApp
  }
  return <AppContext.Provider value={appState}>
    {children}
  </AppContext.Provider>
};

export default AppProvider;