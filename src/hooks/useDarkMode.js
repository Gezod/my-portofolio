import { useState, useEffect, useCallback } from 'react';

export const useDarkMode = () => {
  // Inisialisasi state langsung dari localStorage/OS preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false; // SSR safety
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark;
  });

  useEffect(() => {
    // Menerapkan tema ke elemen HTML
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = useCallback(() => {
    setIsDark(prev => !prev);
  }, []);

  return { isDark, toggleDarkMode };
};