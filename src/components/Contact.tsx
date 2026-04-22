import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding container">
      <motion.div
        className="ct__card glass"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="ct__heading">
          Demander Un <span className="text-gradient">Audit Visuel</span>
        </h2>
        <p className="ct__desc">
          Prêt à passer au niveau supérieur ? Contactez‑nous directement.
        </p>

        <div className="ct__grid">
          <motion.a href="tel:0769908686" className="ct__box glass" whileHover={{ y: -6 }}>
            <div className="ct__icon ct__icon--red"><Phone size={32} /></div>
            <p className="ct__label">Téléphone</p>
            <p className="ct__value">07 69 90 86 86</p>
          </motion.a>

          <motion.div className="ct__box glass" whileHover={{ y: -6 }}>
            <div className="ct__icon ct__icon--green"><MessageCircle size={32} /></div>
            <p className="ct__label">WeChat</p>
            <p className="ct__value">yangchcha</p>
          </motion.div>
        </div>

        <p className="ct__footer">
          Bureaux à Paris et Rouen · Disponibles du lundi au samedi
        </p>
      </motion.div>

      <style>{`
        .ct__card {
          max-width: 780px;
          margin: 0 auto;
          padding: 5rem 3rem;
          border-radius: 30px;
          text-align: center;
          background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6));
          box-shadow: 0 20px 50px rgba(0,0,0,0.04);
          border: 1px solid rgba(255,255,255,0.8);
        }
        .ct__heading {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 0.75rem;
          color: var(--color-text);
        }
        .ct__desc {
          color: var(--color-text-muted);
          font-size: 1.15rem;
          margin-bottom: 3.5rem;
        }
        .ct__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          max-width: 520px;
          margin: 0 auto;
        }
        .ct__box {
          padding: 2.5rem 1.5rem;
          border-radius: 20px;
          background: white;
          display: flex; flex-direction: column; align-items: center;
          gap: 1rem;
          transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s;
        }
        .ct__box:hover {
          box-shadow: 0 18px 40px rgba(0,0,0,0.08) !important;
        }
        .ct__icon { font-size: 0; }
        .ct__icon--red { color: var(--color-primary); }
        .ct__icon--green { color: #07C160; }
        .ct__label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          color: var(--color-text-muted);
        }
        .ct__value {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-text);
        }
        .ct__footer {
          margin-top: 3.5rem;
          font-size: 0.88rem;
          font-style: italic;
          color: var(--color-text-muted);
        }

        @media (max-width: 576px) {
          .ct__card { padding: 3rem 1.5rem; }
          .ct__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
