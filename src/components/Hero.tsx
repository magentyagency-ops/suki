import React from 'react';
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
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

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
          gap: '4rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ height: '2px', width: '40px', background: 'var(--color-primary)' }}></span>
              <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 'bold' }}>Suki Agency</span>
            </motion.div>

            <motion.h1 variants={itemVariants} style={{ 
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', 
              marginBottom: '1rem',
              lineHeight: 1.05
            }}>
              L'art d'être <br />
              <span className="text-gradient" style={{ fontStyle: 'italic', paddingRight: '10px' }}>Incontournable</span>
            </motion.h1>

            <motion.p variants={itemVariants} style={{ 
              fontSize: '1.15rem', 
              color: 'var(--color-text-muted)', 
              marginBottom: '2.5rem',
              maxWidth: '85%',
              lineHeight: 1.7,
              fontWeight: 400
            }}>
              Nous propulsons les restaurants asiatiques avec un contenu vidéo vertical organique à fort impact. Démarquez-vous avec élégance.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                Créer l'impact
              </a>
              <a href="#showcase" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600, transition: 'color 0.3s' }} className="play-btn">
                <span style={{ 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '56px', height: '56px', borderRadius: '50%',
                  border: '1px solid var(--color-text)',
                  background: 'transparent'
                }}>
                  <Play size={22} fill="currentColor" />
                </span>
                Voir nos réalisations
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hero-image-container"
            style={{ position: 'relative' }}
          >
            {/* Mockup d'un téléphone montrant un reel */}
            <div className="floating glass" style={{ 
              width: '100%', 
              maxWidth: '350px', 
              aspectRatio: '9/16', 
              margin: '0 auto',
              borderRadius: '35px', 
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
              border: '6px solid white'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=800" 
                alt="Sushi Cinematic" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '2.5rem 1.5rem 1.5rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                color: 'white'
              }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ background: 'var(--color-primary)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>2.4M Vues</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', margin: 0, fontFamily: 'var(--font-body)' }}>@SukiAgency</h3>
              </div>
            </div>

            {/* Decoration Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8, type: "spring" }}
              className="glass"
              style={{
                position: 'absolute',
                bottom: '15%',
                left: '-15%',
                padding: '1.2rem',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', fontWeight: 'bold' }}>
                ⛩️
              </div>
              <div style={{ paddingRight: '10px' }}>
                <p style={{ margin: 0, fontWeight: 700, color: 'var(--color-text)', fontSize: '1.1rem' }}>Haut de gamme</p>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 500 }}>Sushis & Wok</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child p {
            margin: 0 auto 2.5rem;
          }
          .hero-grid > div:first-child > div:first-child,
          .hero-grid > div:first-child > div:last-child {
            justify-content: center;
          }
          .hero-image-container {
            margin-top: 3rem;
          }
        }
        @media (max-width: 576px) {
          .hero-section {
            padding-top: 100px !important;
          }
          .hero-grid h1 {
            font-size: 2.8rem !important;
          }
          .hero-grid p {
            font-size: 1rem !important;
            max-width: 100% !important;
          }
          .hero-image-container .floating.glass {
            max-width: 280px !important;
          }
          .play-btn {
            width: 100%;
            justify-content: center;
            margin-top: -1rem;
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

