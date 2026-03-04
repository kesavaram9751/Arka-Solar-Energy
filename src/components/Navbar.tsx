import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COLORS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import arkaLogo from '../assets/arka Solar Logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img src={arkaLogo} alt="Arka Solar Energy logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-display font-bold text-lg leading-none text-solar-red">ARKA SOLAR ENERGY</span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-black-700">Your Solar Partner</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-solar-red ${location.pathname === link.path ? 'text-solar-red' : 'text-dark-charcoal'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-solar-red text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-solar-red/90 transition-all shadow-lg shadow-solar-red/20"
            >
              <Phone size={16} />
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-dark-charcoal" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-3 text-base font-medium rounded-md ${location.pathname === link.path ? 'bg-solar-red/5 text-solar-red' : 'text-dark-charcoal hover:bg-gray-50'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="w-full bg-solar-red text-white px-5 py-3 rounded-xl text-center font-semibold flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
