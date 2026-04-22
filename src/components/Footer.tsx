export default function Footer() {
  return (
    <footer className="ft">
      <div className="container ft__inner">
        <div className="ft__brand">
          <a href="#">
            <img src="/assets/suk.png" alt="Suki" className="ft__logo" />
          </a>
          <p className="ft__tagline">L'agence créative des restaurants asiatiques.</p>
        </div>

        <div className="ft__cols">
          <div>
            <h4 className="ft__col-title">Bureaux</h4>
            <p>Paris, France</p>
            <p>Rouen, France</p>
          </div>
          <div>
            <h4 className="ft__col-title">Social</h4>
            <p><a href="#" className="ft__link">Instagram</a></p>
            <p><a href="#" className="ft__link">TikTok</a></p>
          </div>
        </div>
      </div>

      <div className="container ft__bottom">
        &copy; {new Date().getFullYear()} Suki Agency. Tous droits réservés.
      </div>

      <style>{`
        .ft {
          border-top: 1px solid rgba(0,0,0,0.06);
          padding: 3rem 0 0;
          margin-top: 2rem;
          background: var(--color-bg);
        }
        .ft__inner {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .ft__logo {
          height: 60px;
          width: auto;
          margin-bottom: 0.5rem;
        }
        .ft__tagline {
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }
        .ft__cols {
          display: flex;
          gap: 3rem;
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }
        .ft__col-title {
          color: var(--color-text);
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        .ft__link {
          transition: color 0.3s;
        }
        .ft__link:hover { color: var(--color-primary); }
        .ft__bottom {
          margin-top: 2.5rem;
          padding: 1.5rem 0;
          border-top: 1px solid rgba(0,0,0,0.06);
          text-align: center;
          color: var(--color-text-muted);
          font-size: 0.8rem;
        }

        @media (max-width: 576px) {
          .ft__inner { flex-direction: column; align-items: center; text-align: center; }
          .ft__cols { flex-direction: column; gap: 1.5rem; }
        }
      `}</style>
    </footer>
  );
}
