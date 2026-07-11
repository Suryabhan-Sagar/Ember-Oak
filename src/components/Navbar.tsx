import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Story', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Reservations', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(217,119,6,0.4)] group-hover:bg-amber-500 transition-colors">
              <span className="font-serif text-xl font-bold italic text-white">E</span>
            </div>
            <span className="font-serif text-2xl italic tracking-wider text-white">
              Ember & Oak
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-white/60">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/menu"
              className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-lg text-[10px] font-bold shadow-[0_10px_30px_rgba(217,119,6,0.2)] transition-all"
            >
              Order Online
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white/60 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#070707] border-b border-white/5 shadow-xl"
        >
          <div className="px-4 py-4 flex flex-col gap-4 text-xs uppercase tracking-[0.2em] font-medium text-white/60">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-white transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/menu"
              className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-3 rounded-lg text-[10px] font-bold text-center mt-2 shadow-[0_10px_30px_rgba(217,119,6,0.2)]"
            >
              Order Online
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
