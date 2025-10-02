# Lottie Loader Usage Guide

This guide explains how to use the Lottie loader throughout your application.

## Overview

The Lottie loader system consists of:
- `LottieLoader` component - The visual loader component
- `useLoader` hook - For managing loader state in individual components
- `LoaderContext` - For global loader state management
- `useLoaderContext` hook - For accessing global loader state

## Basic Usage

### 1. Using the Global Loader (Recommended)

The global loader is already integrated into your app layout and can be controlled from any component:

```tsx
'use client';

import { useLoaderContext } from '@/contexts/LoaderContext';

export default function MyComponent() {
  const { showLoader, hideLoader, setLoading } = useLoaderContext();

  const handleAsyncOperation = async () => {
    showLoader('Loading data...');
    
    try {
      // Your async operation
      await fetch('/api/data');
    } finally {
      hideLoader();
    }
  };

  return (
    <button onClick={handleAsyncOperation}>
      Load Data
    </button>
  );
}
```

### 2. Using Local Loader

For components that need their own loader:

```tsx
'use client';

import { useLoader } from '@/hooks/useLoader';
import LottieLoader from '@/components/LottieLoader';

export default function MyComponent() {
  const { isLoading, showLoader, hideLoader, loadingMessage } = useLoader();

  const handleOperation = () => {
    showLoader('Processing...');
    setTimeout(() => hideLoader(), 2000);
  };

  return (
    <div>
      <button onClick={handleOperation}>Start Process</button>
      <LottieLoader
        isVisible={isLoading}
        message={loadingMessage}
        size="small"
        overlay={false}
      />
    </div>
  );
}
```

## API Reference

### LottieLoader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isVisible` | boolean | - | Controls loader visibility |
| `size` | 'small' \| 'medium' \| 'large' | 'medium' | Loader size |
| `overlay` | boolean | true | Whether to show as overlay |
| `message` | string | - | Optional loading message |
| `className` | string | '' | Additional CSS classes |

### useLoader Hook

```tsx
const {
  isLoading,        // boolean - current loading state
  showLoader,       // (message?: string) => void
  hideLoader,       // () => void
  setLoading,       // (loading: boolean, message?: string) => void
  loadingMessage    // string - current loading message
} = useLoader();
```

### useLoaderContext Hook

Same API as `useLoader` but for global state management.

## Examples

### Form Submission with Loader

```tsx
'use client';

import { useLoaderContext } from '@/contexts/LoaderContext';
import { useState } from 'react';

export default function ContactForm() {
  const { showLoader, hideLoader } = useLoaderContext();
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    showLoader('Sending message...');
    
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      // Success handling
    } catch (error) {
      // Error handling
    } finally {
      hideLoader();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Send Message</button>
    </form>
  );
}
```

### Page Navigation with Loader

```tsx
'use client';

import { useLoaderContext } from '@/contexts/LoaderContext';
import { useRouter } from 'next/navigation';

export default function NavigationButton() {
  const { showLoader, hideLoader } = useLoaderContext();
  const router = useRouter();

  const handleNavigation = async (path: string) => {
    showLoader('Loading page...');
    
    // Simulate navigation delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    router.push(path);
    hideLoader();
  };

  return (
    <button onClick={() => handleNavigation('/courses')}>
      Go to Courses
    </button>
  );
}
```

### Custom Loader Sizes

```tsx
// Small inline loader
<LottieLoader
  isVisible={isLoading}
  size="small"
  overlay={false}
  className="inline-block"
/>

// Large overlay loader
<LottieLoader
  isVisible={isLoading}
  size="large"
  overlay={true}
  message="Please wait..."
/>
```

## Best Practices

1. **Use Global Loader**: For most cases, use the global loader via `useLoaderContext`
2. **Always Hide Loader**: Ensure you call `hideLoader()` in finally blocks
3. **Meaningful Messages**: Provide descriptive loading messages
4. **Appropriate Sizes**: Use small for inline, medium/large for overlays
5. **Error Handling**: Always hide loader in error scenarios

## File Structure

```
components/
  ├── LottieLoader.tsx          # Main loader component
  ├── LoaderExample.tsx         # Usage examples
contexts/
  ├── LoaderContext.tsx         # Global loader context
hooks/
  ├── useLoader.ts              # Local loader hook
public/
  └── animations/
      └── loading.json          # Your Lottie animation file
```

The loader is now ready to use throughout your application!
