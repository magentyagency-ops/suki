import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.15 } }
  };
  const fade = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section id="hero" className="hero">
      {/* subtle decorative glow */}
      <div className="hero__glow" />

      <motion.div
        className="hero__inner container"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero__badge" variants={fade}>
          <span className="hero__line" />
          <span>Suki Agency</span>
          <span className="hero__line" />
        </motion.div>

        <motion.h1 className="hero__title" variants={fade}>
          L'art d'être{' '}
          <span className="text-gradient hero__accent">Incontournable</span>
        </motion.h1>

        <motion.p className="hero__desc" variants={fade}>
          Nous propulsons les restaurants asiatiques avec du contenu vidéo
          vertical organique à fort impact. Démarquez‑vous avec élégance.
        </motion.p>

        <motion.div className="hero__cta" variants={fade}>
          <a href="#contact" className="btn btn-primary hero__btn">
            Créer l'impact
          </a>
          <a href="#showcase" className="hero__play">
            <span className="hero__play-circle">
              <Play size={20} fill="currentColor" />
            </span>
            Nos Projets
          </a>
        </motion.div>
      </motion.div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 0 80px;
          overflow: hidden;
        }
        .hero__glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 40%, rgba(200,16,46,0.06) 0%, transparent 65%);
          pointer-events: none;
        }
        .hero__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 2;
          max-width: 880px;
        }

        /* ── Badge ── */
        .hero__badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 5px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .hero__line {
          display: block;
          width: 36px;
          height: 2px;
          background: var(--color-primary);
        }

        /* ── Title ── */
        .hero__title {
          font-size: clamp(3rem, 8vw, 6.5rem);
          line-height: 1.05;
          margin-bottom: 1.5rem;
        }
        .hero__accent {
          display: block;
          font-style: italic;
        }

        /* ── Description ── */
        .hero__desc {
          font-size: 1.2rem;
          max-width: 620px;
          color: var(--color-text-muted);
          line-height: 1.75;
          margin-bottom: 3rem;
        }

        /* ── CTA row ── */
        .hero__cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .hero__btn {
          padding: 1.1rem 2.8rem;
          font-size: 1.05rem;
        }
        .hero__play {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
          font-size: 1rem;
          color: var(--color-text);
          transition: color 0.3s;
        }
        .hero__play:hover {
          color: var(--color-primary);
        }
        .hero__play-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1.5px solid currentColor;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s, border-color 0.3s;
        }
        .hero__play:hover .hero__play-circle {
          border-color: var(--color-primary);
          background: rgba(200,16,46,0.06);
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .hero {
            padding: 110px 0 60px;
          }
          .hero__badge { letter-spacing: 3px; font-size: 0.75rem; }
          .hero__desc { font-size: 1.05rem; }
          .hero__cta { width: 100%; }
          .hero__btn { width: 100%; text-align: center; }
          .hero__play {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
