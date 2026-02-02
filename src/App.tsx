import { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import './index.css';

function App() {
  useEffect(() => {
    // Custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 12 + 'px';
      cursor.style.top = e.clientY - 12 + 'px';
    };

    const scaleCursor = () => {
      cursor.style.transform = 'scale(1.5)';
    };

    const resetCursor = () => {
      cursor.style.transform = 'scale(1)';
    };

    document.addEventListener('mousemove', moveCursor);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', scaleCursor);
      el.addEventListener('mouseleave', resetCursor);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', scaleCursor);
        el.removeEventListener('mouseleave', resetCursor);
      });
      cursor.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;