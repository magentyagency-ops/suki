export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      padding: '3rem 0',
      marginTop: '4rem',
      background: 'var(--color-bg)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <a href="#" style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <img src="/assets/suk.png" alt="Suki Logo" style={{ height: '90px', width: 'auto' }} />
          </a>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
            L'Agence créative des restaurants asiatiques.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '2rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          <div>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '0.5rem' }}>Bureaux</h4>
            <p>Paris, France</p>
            <p>Rouen, France</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '0.5rem' }}>Social</h4>
            <p><a href="#" style={{ transition: 'color 0.3s' }} className="footer-link">Instagram</a></p>
            <p><a href="#" style={{ transition: 'color 0.3s' }} className="footer-link">TikTok</a></p>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
        &copy; {new Date().getFullYear()} Suki Agency. Tous droits réservés.
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--color-primary);
        }
      `}</style>
    </footer>
  );
}
