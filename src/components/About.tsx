import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding container">
      <motion.div
        className="ab__card glass"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="ab__glow" />

        <div className="ab__grid">
          {/* Text column */}
          <div className="ab__text">
            <span className="ab__tag">L'Agence</span>
            <h2 className="ab__heading">
              Spécialistes de la <br />
              <span className="text-gold-gradient" style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>
                Gastronomie Asiatique
              </span>
            </h2>
            <p className="ab__p">
              Suki est née d'une passion pour la culture culinaire asiat' et
              d'une expertise pointue en création de contenu vertical.
              L'élégance minimaliste couplée à un ciblage algorithmique parfait.
            </p>
            <p className="ab__p">
              Notre approche organique exclusive transforme des restaurants
              isolés en véritables phénomènes de mode sur les réseaux sociaux.
            </p>
            <div className="ab__locations">
              <div className="ab__loc">
                <MapPin color="var(--color-primary)" size={22} />
                <span>Paris</span>
              </div>
              <div className="ab__loc">
                <MapPin color="var(--color-primary)" size={22} />
                <span>Rouen</span>
              </div>
            </div>
          </div>

          {/* Image column */}
          <motion.div
            className="ab__visual"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800"
              alt="Restaurant Asiatique"
              className="ab__img"
            />
            <div className="ab__stat glass">
              <h3 className="ab__stat-num">+10M</h3>
              <p className="ab__stat-label">Vues Générées</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        .ab__card {
          border-radius: 30px;
          padding: 5rem 4rem;
          position: relative;
          overflow: hidden;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(0,0,0,0.04);
        }
        .ab__glow {
          position: absolute;
          top: -10%; right: -5%;
          width: 320px; height: 320px;
          background: rgba(200,16,46,0.04);
          filter: blur(50px);
          border-radius: 50%;
          pointer-events: none;
        }
        .ab__grid {
          position: relative; z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .ab__tag {
          color: var(--color-primary);
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 0.85rem;
        }
        .ab__heading {
          font-size: clamp(1.8rem, 3.5vw, 3rem);
          margin-top: 0.8rem;
          margin-bottom: 1.5rem;
          color: var(--color-text);
        }
        .ab__p {
          color: var(--color-text-muted);
          line-height: 1.75;
          font-size: 1.05rem;
          margin-bottom: 1.2rem;
        }
        .ab__locations {
          display: flex;
          gap: 2.5rem;
          margin-top: 1.5rem;
        }
        .ab__loc {
          display: flex; align-items: center; gap: 8px;
          font-weight: 700; font-size: 1.15rem;
          color: var(--color-text);
        }
        .ab__visual { position: relative; }
        .ab__img {
          width: 100%;
          border-radius: 20px;
          display: block;
          box-shadow: 0 15px 35px rgba(0,0,0,0.07);
        }
        .ab__stat {
          position: absolute;
          bottom: -24px; left: -24px;
          padding: 1.5rem 2rem;
          border-radius: 20px;
          background: white;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }
        .ab__stat-num {
          font-size: 2.2rem;
          color: var(--color-primary);
          margin: 0;
          font-family: var(--font-heading);
        }
        .ab__stat-label {
          margin: 0;
          font-size: 0.85rem;
          color: var(--color-text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Tablet */
        @media (max-width: 992px) {
          .ab__card { padding: 3rem 2rem; }
          .ab__grid { grid-template-columns: 1fr; gap: 3rem; }
        }
        /* Mobile */
        @media (max-width: 576px) {
          .ab__card { padding: 2.5rem 1.5rem; }
          .ab__stat {
            position: relative;
            bottom: auto; left: auto;
            margin-top: 1.5rem;
            text-align: center;
            display: inline-block;
          }
          .ab__glow { display: none; }
        }
      `}</style>
    </section>
  );
}
