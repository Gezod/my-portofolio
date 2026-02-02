import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiHeart } from 'react-icons/fi';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../../utils/constants';

const Footer = () => {
  const socialIcons = {
    github: FiGithub,
    linkedin: FiLinkedin,
    twitter: FiTwitter,
    instagram: FiInstagram,
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">RLP</span>
              </div>
              <span className="text-xl font-display font-bold">Refangga Lintar Prayoga</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creative developer passionate about building beautiful digital experiences.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <FiMail size={16} />
              <span>{PERSONAL_INFO.email}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {Object.entries(SOCIAL_LINKS).slice(0, 4).map(([platform, url], index) => {
                const IconComponent = socialIcons[platform];
                return IconComponent ? (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 transition-all duration-300"
                  >
                    <IconComponent size={20} />
                  </motion.a>
                ) : null;
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} Refangga Lintar Prayoga. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mx-1 text-red-500"
            >
              <FiHeart size={14} />
            </motion.span>
            and lots of ☕
          </p>
          <p className="text-gray-500 text-xs">
            Designed & Built by Refangga Lintar Prayoga
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;