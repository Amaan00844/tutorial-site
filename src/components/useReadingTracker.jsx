"use client";
import { useEffect } from 'react';

const useReadingTracker = (pageKey) => {
  useEffect(() => {
    console.log(pageKey)
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const endTime = Date.now();
      const timeSpentInSeconds = Math.floor((endTime - startTime) / 1000); // in seconds

      // Get existing data or initialize an empty object
      const storedData = JSON.parse(localStorage.getItem('readingStats')) || {};

      // Add time spent to the correct page
      storedData[pageKey] = (storedData[pageKey] || 0) + timeSpentInSeconds;

      // Save back to localStorage
      localStorage.setItem('readingStats', JSON.stringify(storedData));
    };

    // Listen for page unload or reload
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup on component unmount or route change
    return () => {
      handleBeforeUnload(); // track time on navigation
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pageKey]);
};

export default useReadingTracker;
