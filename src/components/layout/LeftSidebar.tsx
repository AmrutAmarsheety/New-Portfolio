import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { HomeIcon, UserIcon, FolderIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const LeftSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'About', href: '/about', icon: UserIcon },
    { name: 'Projects', href: '/projects', icon: FolderIcon },
    { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
  ];

  return (
    <motion.div
      className="fixed left-0 top-0 h-full z-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ width: 54 }}
      animate={{ width: isHovered ? 300 : 54 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-full bg-white dark:bg-zinc-900 shadow-lg">
        <div className="p-4">
          <div className="grid grid-cols-[54px_2fr] gap-4 mb-8">
            <motion.img
              className="w-10 h-10 rounded-full bg-indigo-500"
              src="https://i.ibb.co/hFsB6JDy/Whats-App-Image-2025-05-22-at-2-06-09-PM.jpg"
              alt='Profile-Img'
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
            >
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Amrut Amarshetty</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Civil Engineer</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-[54px_2fr] gap-4 mb-4">
            <div />
            <div className="flex justify-start">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-6 h-6 text-yellow-500" />
                ) : (
                  <MoonIcon className="w-6 h-6 text-zinc-700" />
                )}
              </motion.button>
            </div>
          </div>
          <nav>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={item.href}
                    className="grid grid-cols-[54px_2fr] items-center text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                  >
                    <div className="flex justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      className="whitespace-nowrap py-2"
                    >
                      {item.name}
                    </motion.span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default LeftSidebar; 