import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  glassmorphism = false,
  ...props 
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300';
  
  const glassStyles = glassmorphism 
    ? 'backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10' 
    : 'bg-white dark:bg-gray-800 shadow-lg';
    
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;