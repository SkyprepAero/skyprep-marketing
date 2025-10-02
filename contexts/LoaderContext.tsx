'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useLoader } from '../hooks/useLoader';

interface LoaderContextType {
  isLoading: boolean;
  showLoader: (message?: string) => void;
  hideLoader: () => void;
  setLoading: (loading: boolean, message?: string) => void;
  loadingMessage: string;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

interface LoaderProviderProps {
  children: ReactNode;
}

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
  const loaderState = useLoader();

  return (
    <LoaderContext.Provider value={loaderState}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoaderContext = (): LoaderContextType => {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error('useLoaderContext must be used within a LoaderProvider');
  }
  return context;
};
