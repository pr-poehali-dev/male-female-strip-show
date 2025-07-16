import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/shows', label: 'Шоу', icon: 'Star' },
    { path: '/artists', label: 'Артисты', icon: 'Users' },
    { path: '/gallery', label: 'Галерея', icon: 'Image' },
    { path: '/booking', label: 'Бронирование', icon: 'Calendar' },
    { path: '/prices', label: 'Цены', icon: 'CreditCard' },
    { path: '/about', label: 'О нас', icon: 'Info' },
    { path: '/contact', label: 'Контакты', icon: 'Phone' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-md border-b border-neon-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-oswald font-bold text-neon-purple">
            NEON<span className="text-neon-pink">CLUB</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                    : 'text-foreground hover:text-neon-pink hover:bg-neon-pink/10'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neon-purple hover:text-neon-pink transition-colors"
          >
            <Icon name={isOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-neon-purple/20"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                      : 'text-foreground hover:text-neon-pink hover:bg-neon-pink/10'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;