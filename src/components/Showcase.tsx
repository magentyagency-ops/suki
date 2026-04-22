import { motion } from 'framer-motion';

const works = [
  {
    id: 1,
    title: "Dim Sum Delight",
    category: "Reels Instagram",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=800",
    size: "large"
  },
  {
    id: 2,
    title: "Le Geste du Chef",
    category: "TikTok Viral",
    image: "https://images.unsplash.com/photo-1558985250-27a406d64cb3?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: 3,
    title: "Sushi Art",
    category: "Shorts YouTube",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: 4,
    title: "Ambiance Izakaya",
    category: "Campagne Organique",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&q=80&w=800",
    size: "wide"
  }
];

export default function Showcase() {
  return (
    <section id="showcase" className="section-padding container">
      <div className="sc__header">
        <div>
          <span className="sc__tag">Portfolio</span>
          <h2 className="sc__heading">
            On Mange Avec <span className="text-gradient">Les Yeux</span>.
          </h2>
        </div>
      </div>

      <div className="sc__grid">
        {works.map((work, i) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            className={`sc__item sc__item--${work.size}`}
          >
            <img src={work.image} alt={work.title} className="sc__img" />
            <div className="sc__overlay" />
            <div className="sc__caption">
              <span className="sc__cat">{work.category}</span>
              <h3 className="sc__title">{work.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .sc__header {
          margin-bottom: 4rem;
        }
        .sc__tag {
          color: var(--color-primary);
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 0.85rem;
        }
        .sc__heading {
          font-size: clamp(2rem, 4vw, 3.2rem);
          margin-top: 0.5rem;
        }

        /* Grid */
        .sc__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 260px;
          gap: 1.25rem;
        }
        .sc__item {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
        }
        .sc__item--large  { grid-column: span 2; grid-row: span 2; }
        .sc__item--small  { grid-column: span 1; grid-row: span 1; }
        .sc__item--wide   { grid-column: span 2; grid-row: span 1; }

        .sc__img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .sc__item:hover .sc__img { transform: scale(1.06); }

        .sc__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%);
        }
        .sc__caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 1.5rem;
          z-index: 2;
          color: white;
        }
        .sc__cat {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 700;
          opacity: 0.85;
        }
        .sc__title {
          font-size: 1.35rem;
          margin-top: 0.35rem;
          color: white;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .sc__grid { grid-template-columns: repeat(2, 1fr); }
          .sc__item--large, .sc__item--wide { grid-column: span 2; }
        }
        @media (max-width: 576px) {
          .sc__grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 200px;
          }
          .sc__item--large, .sc__item--wide, .sc__item--small {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
      `}</style>
    </section>
  );
}
