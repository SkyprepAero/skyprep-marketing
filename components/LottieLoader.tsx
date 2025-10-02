'use client';

import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../public/animations/loading.json';

interface LottieLoaderProps {
  isVisible: boolean;
  size?: 'small' | 'medium' | 'large';
  overlay?: boolean;
  message?: string;
  className?: string;
}

const LottieLoader: React.FC<LottieLoaderProps> = ({
  isVisible,
  size = 'medium',
  overlay = true,
  message,
  className = '',
}) => {
  if (!isVisible) return null;

  const sizeClasses = {
    small: 'w-64 h-64',
    medium: 'w-96 h-96',
    large: 'w-[512px] h-[512px]',
  };

  const loaderContent = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        autoplay={true}
        className={sizeClasses[size]}
      />
      {message && (
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center">
          {message}
        </p>
      )}
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
        {loaderContent}
      </div>
    );
  }

  return loaderContent;
};

export default LottieLoader;
