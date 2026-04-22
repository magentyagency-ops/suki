import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
  };

  return (
    <section className="hero-section" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      overflow: 'hidden'
    }}>
      {/* Background with lighter subtle gradient */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at 70% 30%, rgba(200, 16, 46, 0.05) 0%, transparent 60%)',
        zIndex: -2,
      }}></div>

      {/* Abstract Animated Shapes (Lighter & subtler) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 60%)',
          filter: 'blur(40px)',
          zIndex: -1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%', textAlign: 'center' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '900px', margin: '0 auto' }}
        >
          <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ height: '2px', width: '40px', background: 'var(--color-primary)' }}></span>
            <span style={{ textTransform: 'uppercase', letterSpacing: '6px', fontSize: '1rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>Suki Agency</span>
            <span style={{ height: '2px', width: '40px', background: 'var(--color-primary)' }}></span>
          </motion.div>

          <motion.h1 variants={itemVariants} style={{ 
            fontSize: 'clamp(4rem, 10vw, 8rem)', 
            marginBottom: '1.5rem',
            lineHeight: 1,
            fontWeight: 700
          }}>
            L'art d'être <br />
            <span className="text-gradient" style={{ fontStyle: 'italic', paddingRight: '10px' }}>Incontournable</span>
          </motion.h1>

          <motion.p variants={itemVariants} style={{ 
            fontSize: '1.4rem', 
            color: 'var(--color-text-muted)', 
            marginBottom: '3.5rem',
            maxWidth: '750px',
            margin: '0 auto 3.5rem',
            lineHeight: 1.8,
            fontWeight: 400
          }}>
            Nous propulsons les restaurants asiatiques avec un contenu vidéo vertical organique à fort impact. Démarquez-vous avec élégance et viralité.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '1.4rem 3.5rem', fontSize: '1.2rem', borderRadius: '50px' }}>
              Créer l'impact
            </a>
            <a href="#showcase" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontWeight: 600, transition: 'color 0.3s', fontSize: '1.1rem' }} className="play-btn">
              <span style={{ 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '60px', height: '60px', borderRadius: '50%',
                border: '1px solid var(--color-text)',
                background: 'transparent'
              }}>
                <Play size={24} fill="currentColor" />
              </span>
              Nos Projets
            </a>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 120px !important;
          }
          .hero-section h1 {
            font-size: 3.5rem !important;
          }
          .hero-section p {
            font-size: 1.1rem !important;
            margin-bottom: 2.5rem !important;
          }
          .play-btn {
            width: 100%;
            justify-content: center;
          }
        }
        .play-btn:hover {
          color: var(--color-primary) !important;
        }
        .play-btn:hover span {
          border-color: var(--color-primary) !important;
          background: rgba(200, 16, 46, 0.05) !important;
        }
      `}</style>
    </section>
  );
}


