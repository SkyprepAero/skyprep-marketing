'use client';

import React from 'react';
import { useLoaderContext } from '@/contexts/LoaderContext';
import LottieLoader from './LottieLoader';

const GlobalLoader: React.FC = () => {
  const { isLoading, loadingMessage } = useLoaderContext();
  
  return (
    <LottieLoader
      isVisible={isLoading}
      message={loadingMessage}
      size="medium"
      overlay={true}
    />
  );
};

export default GlobalLoader;
