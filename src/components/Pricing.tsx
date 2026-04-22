import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding container">
      <motion.div
        className="pr__card glass"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="pr__header">
          <span className="pr__tag">Investissement</span>
          <h2 className="pr__heading">
            Une Tarification <span className="text-gradient">Sur-mesure</span>
          </h2>
        </div>

        <div className="pr__content">
          <p className="pr__desc">
            L'excellence ne s'accommode pas de solutions standardisées. Penser qu'il existe une formule universelle serait négliger ce qui fait l'identité de votre établissement.
          </p>
          <p className="pr__desc">
            Nos tarifs sont exclusivement communiqués sur demande. Ils sont <strong>100% adaptés</strong> à vos besoins réels, après une étude minutieuse de votre image actuelle, de votre volume et de vos ambitions de croissance.
          </p>
        </div>

      </motion.div>

      <style>{`
        .pr__card {
          max-width: 800px;
          margin: 0 auto;
          padding: 5rem 4rem;
          border-radius: 30px;
          background: rgba(255,255,255,0.7);
          box-shadow: 0 20px 50px rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.04);
          text-align: center;
        }
        .pr__tag {
          color: var(--color-primary);
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 0.85rem;
          display: block;
          margin-bottom: 0.75rem;
        }
        .pr__heading {
          font-size: clamp(2rem, 4vw, 3.2rem);
          color: var(--color-text);
          margin-bottom: 2.5rem;
        }
        .pr__content {
          max-width: 650px;
          margin: 0 auto;
        }
        .pr__desc {
          color: var(--color-text-muted);
          font-size: 1.15rem;
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }
        .pr__desc strong {
          color: var(--color-text);
          font-weight: 600;
        }

        @media (max-width: 576px) {
          .pr__card {
            padding: 3.5rem 2rem;
          }
          .pr__desc {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
}
