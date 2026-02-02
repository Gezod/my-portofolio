import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';
import Button from '../UI/Button';
import foto from '../../assets/foto.jpg';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Software Developer',
    'Full-Stack Engineer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex % titles.length];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < currentTitle.length) {
        setDisplayedText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayedText(currentTitle.slice(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deletingInterval);
              setCurrentIndex((prev) => prev + 1);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resume;
    link.download = 'CV_Refangga_Lintar.pdf';
    link.click();
  };

  // Particle animation
  const particles = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-primary-400 dark:bg-primary-300 rounded-full opacity-30"
      animate={{
        x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
        y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  ));

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900/20" />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-10"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full opacity-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="relative mx-auto w-32 h-32 md:w-40 md:h-40"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                <img
                  src={foto}
                  alt="Refangga Lintar Prayoga"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 rounded-full border-2 border-dashed border-primary-400 opacity-30"
            />
          </motion.div>

          {/* Main Content */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300"
            >
              I'm a{' '}
              <span className="text-primary-600 dark:text-primary-400 min-w-[200px] inline-block text-left">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              {PERSONAL_INFO.description}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<FiDownload />}
              onClick={handleDownloadCV}
            >
              Download Resume
            </Button>
            <div className="flex items-center space-x-4">
              <motion.a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <FiGithub size={24} className="text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <FiLinkedin size={24} className="text-gray-700 dark:text-gray-300" />
              </motion.a>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400"
            >
              {/* <span className="text-sm font-medium">Scroll Down</span> */}
              {/* <FiArrowDown size={20} /> */}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;