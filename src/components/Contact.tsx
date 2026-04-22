import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding container">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass" style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '5rem 3rem',
        borderRadius: '35px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
        border: '1px solid rgba(255,255,255,0.8)'
      }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3rem)', marginBottom: '1rem', color: 'var(--color-text)' }}>
          Demander Un <span className="text-gradient">Audit Visuel</span>
        </h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '4rem', fontSize: '1.2rem' }}>
          Prêt à passer au niveau supérieur ? Contactez-nous directement pour discuter de votre projet.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2.5rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <motion.a 
            href="tel:0769908686"
            whileHover={{ y: -5 }}
            className="contact-card glass"
            style={{
              padding: '2.5rem 2rem',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              background: 'white'
            }}
          >
            <div style={{ color: 'var(--color-primary)' }}>
              <Phone size={40} />
            </div>
            <div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: '0.5rem' }}>
                Téléphone
              </p>
              <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text)' }}>07 69 90 86 86</p>
            </div>
          </motion.a>

          <motion.div 
            whileHover={{ y: -5 }}
            className="contact-card glass"
            style={{
              padding: '2.5rem 2rem',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              background: 'white'
            }}
          >
            <div style={{ color: '#07C160' }}> {/* WeChat Green */}
              <MessageCircle size={40} />
            </div>
            <div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, marginBottom: '0.5rem' }}>
                WeChat
              </p>
              <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text)' }}>yangchcha</p>
            </div>
          </motion.div>
        </div>
        
        <div style={{ marginTop: '4rem' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>
            Bureaux basés à Paris et Rouen. Disponibles du Lundi au Samedi.
          </p>
        </div>
      </motion.div>

      <style>{`
        .contact-card {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
        }
        .contact-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08) !important;
          border-color: var(--color-primary) !important;
        }
      `}</style>
    </section>
  );
}
