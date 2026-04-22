import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const logoHeight = isMobile ? (scrolled ? '50px' : '65px') : (scrolled ? '80px' : '120px');

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`navbar ${scrolled ? 'scrolled glass' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        padding: scrolled ? '0.5rem 0' : (isMobile ? '1rem 0' : '1.5rem 0'),
        transition: 'padding 0.3s ease, background 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 60 }}>
          <img 
            src="/assets/suk.png" 
            alt="Suki Logo" 
            style={{ 
              height: logoHeight, 
              width: 'auto',
              transition: 'height 0.3s ease'
            }} 
          />
        </a>

        {/* Desktop Menu */}
        <ul className="desktop-menu" style={{ display: 'none', gap: '2.5rem', alignItems: 'center' }}>
          <li><a href="#services" className="nav-link">Expertise</a></li>
          <li><a href="#showcase" className="nav-link">Réalisations</a></li>
          <li><a href="#about" className="nav-link">L'Agence</a></li>
          <li>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.6rem', fontSize: '0.95rem' }}>
              Démarrer un projet
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          style={{ 
            background: isMobileMenuOpen ? 'transparent' : 'var(--color-primary)', 
            border: 'none', 
            color: isMobileMenuOpen ? 'var(--color-text)' : 'white', 
            cursor: 'pointer', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            position: 'relative',
            zIndex: 60,
            transition: 'background 0.3s'
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu-overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(253, 251, 247, 0.98)', /* Rice paper nearly solid */
              padding: '6rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <a href="#services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Expertise</a>
            <a href="#showcase" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Réalisations</a>
            <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>L'Agence</a>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', maxWidth: '250px' }} onClick={() => setIsMobileMenuOpen(false)}>Démarrer un projet</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu-overlay {
            display: none !important;
          }
        }
        .nav-link {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--color-text);
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--color-primary);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .mobile-nav-link {
          font-size: 2rem;
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--color-text);
          text-decoration: none;
        }
      `}</style>
    </motion.nav>
  );
}
