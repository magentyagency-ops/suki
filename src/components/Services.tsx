import { motion } from 'framer-motion';
import { Smartphone, TrendingUp, Scissors, Camera } from 'lucide-react';

const services = [
  {
    title: "Vidéos Verticales",
    description: "Reels, Shorts et TikToks rythmés et esthétiques qui mettent en valeur vos plats et l'ambiance.",
    icon: <Smartphone size={32} />
  },
  {
    title: "Croissance Organique",
    description: "Des stratégies conçues pour les algorithmes actuels. Générez de l'attention sans dépenser en publicité.",
    icon: <TrendingUp size={32} />
  },
  {
    title: "Direction Artistique",
    description: "Captation premium. Nous transcendons l'image de la restauration asiatique avec des plans façon cinéma.",
    icon: <Camera size={32} />
  },
  {
    title: "Montage Dynamique",
    description: "Un sound design immersif et des transitions millimétrées pour capter l'attention dès la première seconde.",
    icon: <Scissors size={32} />
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem' }}
        >
          Notre Expertise
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginTop: '1rem' }}
        >
          L'Arme de Croissance <br/>
          <span className="text-gold-gradient" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}>Massive</span>
        </motion.h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="glass service-card"
            style={{
              padding: '3rem 2rem',
              borderRadius: '20px',
              transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease',
              background: 'white' // Brighter cards inside the rice paper background
            }}
          >
            <div style={{
              width: '60px', height: '60px', 
              borderRadius: '15px', 
              background: 'linear-gradient(135deg, rgba(200, 16, 46, 0.1) 0%, rgba(200, 16, 46, 0.02) 100%)',
              color: 'var(--color-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              {service.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>{service.title}</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .service-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(200, 16, 46, 0.08) !important;
        }
        @media (max-width: 576px) {
          .service-card {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
