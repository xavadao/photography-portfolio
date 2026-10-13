'use client';

import { useEffect, useRef } from 'react';
import { Link } from '@/lib/router-compat';

const awards = [
  { year: '2024', title: 'World Press Photo — Honorable Mention' },
  { year: '2023', title: 'PDN Photo Annual — Portrait Category Winner' },
  { year: '2023', title: 'Magnum Foundation Grant Recipient' },
  { year: '2022', title: 'IPA International Photography Awards — Gold' },
  { year: '2021', title: 'Sony World Photography Awards — Finalist' },
];

const clients = [
  'Vogue', "Harper's Bazaar", 'Dior', 'Chanel', 'The New York Times',
  'Apple', 'Nike', 'Hermès', 'W Magazine', 'Vanity Fair',
];

/** Attach IntersectionObserver to direct .reveal / .reveal-fade children */
function useRevealSection() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>('.reveal, .reveal-fade');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const heroRef    = useRevealSection();
  const splitRef   = useRevealSection();
  const awardsRef  = useRevealSection();
  const clientsRef = useRevealSection();

  return (
    <div style={{ backgroundColor: 'var(--black)', paddingTop: '7rem' }}>

      {/* ── HERO STATEMENT ── */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        style={{ padding: '0 0 var(--section-padding)' }}
      >
        <div className="section-container">
          <p className="eyebrow reveal" style={{ marginBottom: '2rem' }}>
            About
          </p>
          <h1
            className="reveal reveal-delay-1"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 7vw, 7.5rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: 'var(--white)',
              maxWidth: '900px',
            }}
          >
            I make images
            <br />
            that{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gray-mid)' }}>refuse</em>
            <br />
            to be forgotten.
          </h1>
        </div>
      </section>

      {/* ── PORTRAIT (left) + BIO (right) ── */}
      <section
        ref={splitRef as React.RefObject<HTMLElement>}
        style={{ borderTop: '1px solid var(--gray-dark)', padding: 'var(--section-padding) 0' }}
      >
        <div className="section-container">
          <div className="about-split">

            {/* ── LEFT: Portrait ── */}
            <div className="about-portrait-col">
              <div className="reveal-fade about-portrait-wrap">
                {/* Cinematic grain overlay */}
                <div className="about-portrait-grain" />
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=85&auto=format&fit=crop&crop=faces"
                  alt="Alexandre Moreau — photographer"
                  loading="eager"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                {/* Bottom caption bar */}
                <div className="about-portrait-caption">
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(245,245,245,0.5)', textTransform: 'uppercase' }}>
                    Alexandre Moreau — Paris, 2024
                  </span>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Bio ── */}
            <div className="about-bio-col">
              <h2
                className="reveal"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.025em',
                  color: 'var(--white)',
                  marginBottom: '2.5rem',
                }}
              >
                Alexandre Moreau
              </h2>

              {/* Stats row */}
              <div
                className="reveal reveal-delay-1"
                style={{
                  display: 'flex',
                  gap: '2.5rem',
                  marginBottom: '2.5rem',
                  flexWrap: 'wrap',
                }}
              >
                {[
                  { label: 'Based', value: 'Paris / New York' },
                  { label: 'Experience', value: '12 Years' },
                  { label: 'Projects', value: '200+' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="eyebrow" style={{ marginBottom: '0.35rem' }}>{label}</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 500, color: 'var(--white)' }}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="divider reveal reveal-delay-2" style={{ marginBottom: '2.5rem' }} />

              {/* Bio paragraphs — each reveals independently */}
              {[
                {
                  text: 'I came to photography through painting — through the obsession with how light falls on a surface, how shadow creates depth, how a single frame can hold an entire emotional universe.',
                  color: 'var(--gray-light)',
                  delay: '0.15s',
                },
                {
                  text: "Over twelve years, I've worked across editorial, fashion, and fine art — shooting for the world's most demanding publications and brands, while maintaining a personal practice rooted in intimacy and observation.",
                  color: 'var(--gray-mid)',
                  delay: '0.25s',
                },
                {
                  text: 'My approach is slow, deliberate, and deeply collaborative. I believe the best images emerge from trust — between photographer and subject, between intention and accident.',
                  color: 'var(--gray-mid)',
                  delay: '0.35s',
                },
                {
                  text: "I'm currently accepting commissions for editorial, portrait, and commercial projects. If you have a vision that demands uncompromising visual storytelling, let's talk.",
                  color: 'var(--gray-mid)',
                  delay: '0.45s',
                },
              ].map(({ text, color, delay }, i) => (
                <p
                  key={i}
                  className="reveal"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    lineHeight: 1.9,
                    color,
                    marginBottom: '1.4rem',
                    transitionDelay: delay,
                  }}
                >
                  {text}
                </p>
              ))}

              <div className="reveal" style={{ marginTop: '3rem', transitionDelay: '0.55s' }}>
                <Link to="/contact" className="btn-primary">
                  Work Together
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section
        ref={awardsRef as React.RefObject<HTMLElement>}
        style={{ borderTop: '1px solid var(--gray-dark)', padding: 'var(--section-padding) 0' }}
      >
        <div className="section-container">
          <p className="eyebrow reveal" style={{ marginBottom: '3rem' }}>
            Recognition
          </p>
          <div>
            {awards.map((award, i) => (
              <div
                key={i}
                className="reveal about-award-row"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span className="about-award-year">{award.year}</span>
                <p className="about-award-title">{award.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section
        ref={clientsRef as React.RefObject<HTMLElement>}
        style={{ borderTop: '1px solid var(--gray-dark)', padding: 'var(--section-padding) 0' }}
      >
        <div className="section-container">
          <p className="eyebrow reveal" style={{ marginBottom: '3rem' }}>
            Clients &amp; Publications
          </p>
          <div
            className="reveal reveal-delay-1"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 2.5rem' }}
          >
            {clients.map((client) => (
              <span
                key={client}
                className="about-client"
                onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = 'var(--white)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = 'var(--gray-dark)'; }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ── Split layout ── */
        .about-split {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(3rem, 6vw, 8rem);
          align-items: start;
        }

        /* ── Portrait column ── */
        .about-portrait-col {
          position: sticky;
          top: 8rem;
        }

        .about-portrait-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: var(--gray-dark);
        }

        /* Subtle grain texture via pseudo-element */
        .about-portrait-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 2;
          mix-blend-mode: overlay;
        }

        .about-portrait-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem 1.25rem;
          background: linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 100%);
          z-index: 3;
        }

        /* ── Bio column ── */
        .about-bio-col {
          padding-top: 0.5rem;
        }

        /* ── Award rows ── */
        .about-award-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.75rem 0;
          border-bottom: 1px solid var(--gray-dark);
          gap: 2rem;
        }

        .about-award-year {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--gray-mid);
          flex-shrink: 0;
        }

        .about-award-title {
          font-family: var(--font-serif);
          font-size: clamp(1rem, 2vw, 1.4rem);
          font-weight: 700;
          color: var(--white);
          flex: 1;
          text-align: right;
        }

        /* ── Client names ── */
        .about-client {
          font-family: var(--font-serif);
          font-size: clamp(1.2rem, 2.5vw, 2rem);
          font-weight: 700;
          color: var(--gray-dark);
          letter-spacing: -0.01em;
          transition: color 0.3s ease;
          cursor: default;
        }

        /* ── reveal-fade: opacity only, no translate ── */
        .reveal-fade {
          opacity: 0;
          transition: opacity 1.1s var(--ease-cinematic);
        }
        .reveal-fade.visible {
          opacity: 1;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .about-split {
            grid-template-columns: 1fr;
          }
          .about-portrait-col {
            position: static;
          }
          .about-portrait-wrap {
            aspect-ratio: 4 / 5;
          }
        }
      `}</style>
    </div>
  );
}
