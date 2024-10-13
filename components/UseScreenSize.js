import { useState, useEffect } from 'react';

// Custom Hook to track screen size
export default function UseScreenSize() {
  const [screenSize, setScreenSize] = useState('');

  // Define Tailwind's breakpoints (similar to Tailwind defaults)
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Check current width and assign corresponding breakpoint
      if (width >= breakpoints['2xl']) {
        setScreenSize('2xl');
      } else if (width >= breakpoints.xl) {
        setScreenSize('xl');
      } else if (width >= breakpoints.lg) {
        setScreenSize('lg');
      } else if (width >= breakpoints.md) {
        setScreenSize('md');
      } else if (width >= breakpoints.sm) {
        setScreenSize('sm');
      } else {
        setScreenSize('xs');
      }
    };

    // Set the initial screen size when component mounts
    handleResize();

    // Add event listener for window resizing
    window.addEventListener('resize', handleResize);

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}