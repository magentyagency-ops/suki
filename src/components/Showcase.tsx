import React from 'react';
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <span style={{ color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            Portfolio
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginTop: '0.5rem' }}>
            On Mange Avec <span className="text-gradient">Les Yeux</span>.
          </h2>
        </div>
        <a href="#" className="btn btn-outline" style={{ display: 'none' }}>Voir tout</a>
      </div>

      <div className="bento-grid">
        {works.map((work, index) => (
          <motion.div
            key={work.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`bento-item ${work.size}`}
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 15px 35px rgba(0,0,0,0.06)'
            }}
          >
            <div className="overlay" style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 40%, transparent 100%)',
              zIndex: 1,
              transition: 'opacity 0.4s ease'
            }} />
            
            <img 
              src={work.image} 
              alt={work.title}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'block'
              }}
              className="bento-img"
            />

            <div style={{
              position: 'absolute',
              bottom: 0, left: 0,
              padding: '2.5rem 2rem',
              zIndex: 2,
              width: '100%'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {work.category}
              </span>
              <h3 style={{ fontSize: '1.6rem', marginTop: '0.5rem', color: 'var(--color-text)' }}>{work.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 280px;
          gap: 1.5rem;
        }

        .bento-item.large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .bento-item.small {
          grid-column: span 1;
          grid-row: span 1;
        }

        .bento-item.wide {
          grid-column: span 2;
          grid-row: span 1;
        }

        .bento-item:hover .bento-img {
          transform: scale(1.08);
        }

        @media (max-width: 992px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bento-item.large, .bento-item.wide {
            grid-column: span 2;
          }
          .bento-item.small {
            grid-column: span 1;
          }
        }
        
        @media (max-width: 576px) {
          .bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 220px;
          }
          .bento-item.large, .bento-item.wide, .bento-item.small {
            grid-column: span 1;
            grid-row: span 1; /* override large making it 2 rows on mobile */
          }
        }
      `}</style>
    </section>
  );
}
