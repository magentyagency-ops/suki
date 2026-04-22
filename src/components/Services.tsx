import { motion } from 'framer-motion';
import { Smartphone, TrendingUp, Scissors, Camera } from 'lucide-react';

const services = [
  {
    title: "Vidéos Verticales",
    desc: "Reels, Shorts et TikToks rythmés et esthétiques qui mettent en valeur vos plats et l'ambiance.",
    icon: <Smartphone size={28} />
  },
  {
    title: "Croissance Organique",
    desc: "Des stratégies conçues pour les algorithmes actuels. Générez de l'attention sans dépenser en publicité.",
    icon: <TrendingUp size={28} />
  },
  {
    title: "Direction Artistique",
    desc: "Captation premium. Nous transcendons l'image de la restauration asiatique avec des plans façon cinéma.",
    icon: <Camera size={28} />
  },
  {
    title: "Montage Dynamique",
    desc: "Un sound design immersif et des transitions millimétrées pour capter l'attention dès la première seconde.",
    icon: <Scissors size={28} />
  }
];

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };
  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
  };

  return (
    <section id="services" className="section-padding container">
      <div className="sv__header">
        <motion.span
          className="sv__tag"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          Notre Expertise
        </motion.span>
        <motion.h2
          className="sv__heading"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.08 }}
        >
          L'Arme de Croissance <br />
          <span className="text-gold-gradient" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}>Massive</span>
        </motion.h2>
      </div>

      <motion.div
        className="sv__grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {services.map((s, i) => (
          <motion.div key={i} variants={item} className="sv__card">
            <div className="sv__icon">{s.icon}</div>
            <h3 className="sv__title">{s.title}</h3>
            <p className="sv__desc">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .sv__header {
          text-align: center;
          margin-bottom: 4.5rem;
        }
        .sv__tag {
          color: var(--color-primary);
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 0.85rem;
        }
        .sv__heading {
          font-size: clamp(2rem, 4vw, 3.2rem);
          margin-top: 0.8rem;
        }
        .sv__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .sv__card {
          background: white;
          border: 1px solid rgba(0,0,0,0.04);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s;
        }
        .sv__card:hover {
          transform: translateY(-10px);
          box-shadow: 0 18px 40px rgba(200,16,46,0.07);
        }
        .sv__icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          color: var(--color-primary);
          background: linear-gradient(135deg, rgba(200,16,46,0.1), rgba(200,16,46,0.02));
          margin-bottom: 1.5rem;
        }
        .sv__title {
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
          color: var(--color-text);
        }
        .sv__desc {
          color: var(--color-text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        @media (max-width: 576px) {
          .sv__card { padding: 2rem 1.5rem; }
        }
      `}</style>
    </section>
  );
}
