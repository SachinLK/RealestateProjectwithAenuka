import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const NAV_LINKS = [
  { name: 'Listings', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Architecture', path: '/architecture' },
  { name: 'Sell With Us', path: '/sell' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif tracking-widest flex items-center gap-2 group">
          <span className="gold-gradient-text font-bold">AURA</span>
          <span className="font-light tracking-[0.3em] opacity-80 group-hover:opacity-100 transition-opacity">SPACE</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-[0.2em] transition-all hover:text-brand-gold-dark ${
                location.pathname === link.path ? 'text-brand-gold-dark' : 'text-brand-dark/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/80">
                Hi, {user.name}
              </span>
              <button
                onClick={logout}
                className="px-6 py-2 border border-brand-gold-dark text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-brand-gold-dark hover:text-white transition-all text-brand-dark"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="text-[10px] uppercase tracking-[0.2em] text-brand-dark hover:text-brand-gold-dark transition-all"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2 bg-brand-gold-dark text-white text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-brand-gold-dark/90 transition-all"
              >
                Signup
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-dark/80 hover:text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif tracking-widest text-brand-dark hover:text-brand-gold-dark transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button
               onClick={() => setIsOpen(false)}
               className="absolute top-8 right-6 text-brand-dark/60 hover:text-brand-dark"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
