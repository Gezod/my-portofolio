import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollPosition = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      
      setScrollPosition(scrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, [scrollDirection]);

  const scrollProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    return (scrollPosition / totalHeight) * 100;
  };

  return { scrollPosition, scrollDirection, scrollProgress: scrollProgress() };
};