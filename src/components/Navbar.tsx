import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Expertise', href: '#services' },
    { label: 'Réalisations', href: '#showcase' },
    { label: "L'Agence", href: '#about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`nav ${scrolled ? 'nav--scrolled glass' : ''}`}
    >
      <div className="container nav__wrap">
        <a href="#" className="nav__logo">
          <img src="/assets/suk.png" alt="Suki" className={`nav__logo-img ${scrolled ? 'nav__logo-img--sm' : ''}`} />
        </a>

        {/* Desktop links */}
        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="nav__link">{l.label}</a></li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary nav__cta">Nous contacter</a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="nav__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Fullscreen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav__mobile-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary" style={{ width: '100%', maxWidth: 240, marginTop: '1rem' }} onClick={() => setOpen(false)}>
              Nous contacter
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; width: 100%;
          z-index: 100;
          padding: 1.2rem 0;
          transition: padding 0.3s, background 0.3s;
        }
        .nav--scrolled { padding: 0.5rem 0; }
        .nav__wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav__logo { position: relative; z-index: 110; }
        .nav__logo-img {
          height: 70px;
          width: auto;
          transition: height 0.3s;
        }
        .nav__logo-img--sm { height: 50px; }

        /* Desktop */
        .nav__links {
          display: flex;
          align-items: center;
          gap: 2.2rem;
        }
        .nav__link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--color-text);
          position: relative;
        }
        .nav__link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -4px;
          width: 0; height: 2px;
          background: var(--color-primary);
          transition: width 0.3s;
        }
        .nav__link:hover::after { width: 100%; }
        .nav__cta { padding: 0.55rem 1.5rem; font-size: 0.9rem; }
        .nav__toggle { display: none; }

        /* Mobile */
        @media (max-width: 768px) {
          .nav__logo-img { height: 50px; }
          .nav__logo-img--sm { height: 40px; }
          .nav__links { display: none; }
          .nav__toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px; height: 44px;
            border-radius: 50%;
            border: none;
            background: var(--color-primary);
            color: white;
            cursor: pointer;
            position: relative;
            z-index: 110;
          }
        }
        .nav__mobile {
          position: fixed;
          inset: 0;
          z-index: 105;
          background: rgba(253,251,247,0.97);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.8rem;
          padding: 2rem;
        }
        .nav__mobile-link {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--color-text);
        }
      `}</style>
    </motion.nav>
  );
}
