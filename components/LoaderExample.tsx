'use client';

import React from 'react';
import { useLoaderContext } from '@/contexts/LoaderContext';

const LoaderExample: React.FC = () => {
  const { showLoader, hideLoader, setLoading } = useLoaderContext();

  const handleShowLoader = () => {
    showLoader('Loading data...');
    // Simulate async operation
    setTimeout(() => {
      hideLoader();
    }, 3000);
  };

  const handleShowLoaderWithMessage = () => {
    showLoader('Processing your request...');
    // Simulate async operation
    setTimeout(() => {
      hideLoader();
    }, 2000);
  };

  const handleToggleLoader = () => {
    setLoading(true, 'Toggling loader...');
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Lottie Loader Examples</h2>
      
      <div className="space-y-2">
        <button
          onClick={handleShowLoader}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Show Loader (3 seconds)
        </button>
        
        <button
          onClick={handleShowLoaderWithMessage}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors ml-2"
        >
          Show Loader with Message
        </button>
        
        <button
          onClick={handleToggleLoader}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors ml-2"
        >
          Toggle Loader
        </button>
      </div>
    </div>
  );
};

export default LoaderExample;
