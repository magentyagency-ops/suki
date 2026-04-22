import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding container">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass" style={{
        borderRadius: '35px',
        padding: '6rem 4rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'rgba(255, 255, 255, 0.85)',
        border: '1px solid rgba(0,0,0,0.05)'
      }}>
        {/* Cercles décoratifs clairs (soleil levant subtil) */}
        <div style={{
          position: 'absolute',
          top: '-15%', right: '-5%',
          width: '350px', height: '350px',
          background: 'rgba(200, 16, 46, 0.05)',
          filter: 'blur(50px)',
          borderRadius: '50%',
          zIndex: 0
        }}></div>

        <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '5rem', alignItems: 'center' }} className="about-grid">
          
          <div>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
              L'Agence
            </span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginTop: '1rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
              Spécialistes de la <br /> <span className="text-gold-gradient" style={{ fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>Gastronomie Asiatique</span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Suki est née d'une passion pour la culture culinaire asiat' et d'une expertise pointue en création de contenu vertical. L'élégance minimaliste couplée à un ciblage algorithmique parfait.
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Notre approche organique exclusive permet de transformer des restaurants isolés en véritables phénomènes de mode sur les réseaux sociaux.
            </p>

            <div style={{ display: 'flex', gap: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin color="var(--color-primary)" size={28} />
                <span style={{ fontWeight: 'bold', fontSize: '1.3rem', color: 'var(--color-text)' }}>Paris</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin color="var(--color-primary)" size={28} />
                <span style={{ fontWeight: 'bold', fontSize: '1.3rem', color: 'var(--color-text)' }}>Rouen</span>
              </div>
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3, duration: 0.8 }}
             style={{ position: 'relative' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800" 
              alt="Restaurant Asiatique"
              style={{ width: '100%', borderRadius: '25px', display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
            />
            <div className="glass" style={{
              position: 'absolute',
              bottom: '-30px', left: '-30px',
              padding: '2rem 2.5rem',
              borderRadius: '25px',
              background: 'white',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', margin: 0, fontFamily: 'var(--font-heading)' }}>+10M</h3>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Vues Générées</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-grid > div:last-child {
            margin-top: 3rem;
          }
        }
        @media (max-width: 576px) {
          .glass {
            padding: 3rem 1.5rem !important;
          }
          .about-grid h2 {
            font-size: 2.2rem !important;
          }
          /* Prevent decorative element from overflowing */
          .glass > div:first-child {
            display: none !important;
          }
          .about-grid > div:last-child > div.glass {
            left: 0 !important;
            right: 0 !important;
            bottom: -20px !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
