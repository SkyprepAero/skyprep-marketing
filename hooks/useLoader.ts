'use client';

import { useState, useCallback } from 'react';

interface UseLoaderReturn {
  isLoading: boolean;
  showLoader: (message?: string) => void;
  hideLoader: () => void;
  setLoading: (loading: boolean, message?: string) => void;
  loadingMessage: string;
}

export const useLoader = (): UseLoaderReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const showLoader = useCallback((message?: string) => {
    setLoadingMessage(message || '');
    setIsLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    setIsLoading(false);
    setLoadingMessage('');
  }, []);

  const setLoading = useCallback((loading: boolean, message?: string) => {
    if (loading) {
      setLoadingMessage(message || '');
    } else {
      setLoadingMessage('');
    }
    setIsLoading(loading);
  }, []);

  return {
    isLoading,
    showLoader,
    hideLoader,
    setLoading,
    loadingMessage,
  };
};
