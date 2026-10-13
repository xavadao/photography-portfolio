'use client';

import { useState, useEffect } from 'react';
import { Link, useLocation } from '@/lib/router-compat';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const overHero = location.pathname === '/' && !scrolled;
  const inactiveColor = overHero ? 'var(--gray-light)' : 'var(--gray-mid)';

  useEffect(() => {
    if (!menuOpen) return;
    const menu = document.getElementById('mobile-navigation');
    const links = Array.from(menu?.querySelectorAll<HTMLAnchorElement>('a[href]') ?? []);
    const previous = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    links[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setMenuOpen(false); }
      if (event.key === 'Tab' && links.length) {
        if (event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); links.at(-1)?.focus(); }
        else if (!event.shiftKey && document.activeElement === links.at(-1)) { event.preventDefault(); links[0].focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = oldOverflow; previous?.focus(); };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/work', label: 'Work' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1.5rem clamp(1.5rem, 5vw, 5rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background-color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), backdrop-filter 0.5s ease',
          background: scrolled ? 'rgba(10,10,10,0.92)' : overHero ? 'linear-gradient(180deg, rgba(10,10,10,.78), rgba(10,10,10,.48))' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.1rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: 'var(--white)',
            textTransform: 'uppercase',
          }}
        >
          Lumière
        </Link>

        {/* Desktop links */}
        <ul
          style={{
            display: 'flex',
            gap: '3rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="nav-desktop"
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: location.pathname === to ? 'var(--white)' : inactiveColor,
                  transition: 'color 0.25s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--white)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    location.pathname === to ? 'var(--white)' : inactiveColor;
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '1px',
              backgroundColor: 'var(--white)',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '1px',
              backgroundColor: 'var(--white)',
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '1px',
              backgroundColor: 'var(--white)',
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div id="mobile-navigation" role="navigation" aria-label="Mobile navigation" aria-hidden={!menuOpen} inert={!menuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          backgroundColor: 'var(--black)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        className="nav-mobile-overlay"
      >
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 700,
              color: location.pathname === to ? 'var(--white)' : inactiveColor,
              letterSpacing: '-0.02em',
              transition: 'color 0.25s ease',
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
