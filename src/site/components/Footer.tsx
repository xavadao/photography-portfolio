'use client';

import { Link } from '@/lib/router-compat';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--gray-dark)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem)',
        backgroundColor: 'var(--black)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          alignItems: 'center',
          gap: '2rem',
        }}
        className="footer-grid"
      >
        {/* Left — nav links */}
        <nav
          style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { to: '/work', label: 'Work' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gray-mid)',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--white)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gray-mid)';
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Center — logo */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--white)',
            }}
          >
            Lumière
          </Link>
        </div>

        {/* Right — social + copyright */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '1rem',
          }}
          className="footer-right"
        >
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Instagram', 'Behance', 'LinkedIn'].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--gray-mid)',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--white)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gray-mid)';
                }}
              >
                {s}
              </a>
            ))}
          </div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              color: 'rgba(136,136,136,0.4)',
            }}
          >
            © {year} Lumière. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-grid nav {
            justify-content: center;
          }
          .footer-right {
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
