'use client';

import { useRef } from 'react';
import { Link } from '@/lib/router-compat';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Curated Unsplash editorial photography images
const heroImage =
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=2400&q=85&auto=format&fit=crop';

const selectedWork = [
  {
    id: 'silence-in-motion',
    title: 'Silence in Motion',
    category: 'Editorial',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80&auto=format&fit=crop',
    size: 'large',
  },
  {
    id: 'golden-hour',
    title: 'Golden Hour',
    category: 'Portrait',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 'urban-geometry',
    title: 'Urban Geometry',
    category: 'Architecture',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format&fit=crop',
    size: 'small',
  },
  {
    id: 'the-unseen',
    title: 'The Unseen',
    category: 'Fine Art',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80&auto=format&fit=crop',
    size: 'medium',
  },
  {
    id: 'raw-light',
    title: 'Raw Light',
    category: 'Fashion',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop',
    size: 'medium',
  },
];

const services = [
  {
    number: '01',
    title: 'Editorial',
    description:
      'Magazine spreads, lookbooks, and campaign imagery that commands attention and tells a story.',
  },
  {
    number: '02',
    title: 'Portrait',
    description:
      'Intimate, revealing portraiture that captures the essence of a person beyond the surface.',
  },
  {
    number: '03',
    title: 'Commercial',
    description:
      'Brand photography that elevates product and identity with cinematic precision.',
  },
  {
    number: '04',
    title: 'Fine Art',
    description:
      'Limited edition prints and gallery-ready works exploring light, form, and emotion.',
  },
];

export default function Home() {
  const workRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const philosophyRef = useScrollReveal();
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ backgroundColor: 'var(--black)' }}>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '600px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            transform: 'scale(1.05)',
            transition: 'transform 8s ease-out',
          }}
          className="hero-bg"
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.2) 100%)',
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: 'clamp(3rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)',
            maxWidth: 'var(--container-max)',
            width: '100%',
            margin: '0 auto',
          }}
        >
          <div style={{ maxWidth: '900px' }}>
            <p
              className="eyebrow"
              style={{
                marginBottom: '1.5rem',
                color: 'var(--white)',
                textShadow: '0 1px 3px rgba(0,0,0,.85)',
                opacity: 0,
                animation: 'heroFadeUp 1s 0.3s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
              }}
            >
              Photography & Visual Art
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3.5rem, 9vw, 9rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: 'var(--white)',
                marginBottom: '2.5rem',
                opacity: 0,
                animation: 'heroFadeUp 1s 0.5s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
              }}
            >
              Light is the
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--gray-light)' }}>language</em>
              <br />I speak.
            </h1>
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'center',
                flexWrap: 'wrap',
                opacity: 0,
                animation: 'heroFadeUp 1s 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
              }}
            >
              <Link to="/work" className="btn-primary">
                View Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/about" className="btn-ghost">
                About the Artist
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              position: 'absolute',
              right: 'clamp(1.5rem, 5vw, 5rem)',
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
              opacity: 0,
              animation: 'heroFadeUp 1s 1.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--gray-mid)',
                writingMode: 'vertical-rl',
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: '1px',
                height: '60px',
                background: 'linear-gradient(to bottom, var(--gray-mid), transparent)',
                animation: 'scrollLine 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section
        ref={workRef as React.RefObject<HTMLElement>}
        style={{
          padding: 'var(--section-padding) 0',
          backgroundColor: 'var(--black)',
        }}
      >
        <div className="section-container">
          {/* Section header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
            }}
          >
            <div>
              <p className="eyebrow reveal" style={{ marginBottom: '1rem' }}>
                Selected Work
              </p>
              <h2
                className="reveal reveal-delay-1"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  color: 'var(--white)',
                }}
              >
                Recent Projects
              </h2>
            </div>
            <Link
              to="/work"
              className="btn-ghost reveal reveal-delay-2"
              style={{ flexShrink: 0 }}
            >
              View All
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Asymmetric grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gridTemplateRows: 'auto',
              gap: '1rem',
            }}
            className="work-grid"
          >
            {/* Large item — spans 7 cols, tall */}
            <Link
              to={`/work/${selectedWork[0].id}`}
              className="gallery-item reveal"
              style={{
                gridColumn: '1 / 8',
                gridRow: '1 / 3',
                height: 'clamp(400px, 55vw, 700px)',
              }}
            >
              <img
                src={selectedWork[0].image}
                alt={selectedWork[0].title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="overlay">
                <p className="eyebrow" style={{ marginBottom: '0.5rem', color: 'var(--gray-light)' }}>
                  {selectedWork[0].category} — {selectedWork[0].year}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    fontWeight: 700,
                    color: 'var(--white)',
                    lineHeight: 1.1,
                  }}
                >
                  {selectedWork[0].title}
                </h3>
              </div>
            </Link>

            {/* Top-right small */}
            <Link
              to={`/work/${selectedWork[1].id}`}
              className="gallery-item reveal reveal-delay-1"
              style={{
                gridColumn: '8 / 13',
                gridRow: '1 / 2',
                height: 'clamp(200px, 26vw, 340px)',
              }}
            >
              <img
                src={selectedWork[1].image}
                alt={selectedWork[1].title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="overlay">
                <p className="eyebrow" style={{ marginBottom: '0.5rem', color: 'var(--gray-light)' }}>
                  {selectedWork[1].category}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                  }}
                >
                  {selectedWork[1].title}
                </h3>
              </div>
            </Link>

            {/* Bottom-right small */}
            <Link
              to={`/work/${selectedWork[2].id}`}
              className="gallery-item reveal reveal-delay-2"
              style={{
                gridColumn: '8 / 13',
                gridRow: '2 / 3',
                height: 'clamp(200px, 26vw, 340px)',
              }}
            >
              <img
                src={selectedWork[2].image}
                alt={selectedWork[2].title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="overlay">
                <p className="eyebrow" style={{ marginBottom: '0.5rem', color: 'var(--gray-light)' }}>
                  {selectedWork[2].category}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                  }}
                >
                  {selectedWork[2].title}
                </h3>
              </div>
            </Link>

            {/* Bottom row — two medium items */}
            <Link
              to={`/work/${selectedWork[3].id}`}
              className="gallery-item reveal reveal-delay-1"
              style={{
                gridColumn: '1 / 7',
                height: 'clamp(220px, 28vw, 380px)',
              }}
            >
              <img
                src={selectedWork[3].image}
                alt={selectedWork[3].title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="overlay">
                <p className="eyebrow" style={{ marginBottom: '0.5rem', color: 'var(--gray-light)' }}>
                  {selectedWork[3].category}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                  }}
                >
                  {selectedWork[3].title}
                </h3>
              </div>
            </Link>

            <Link
              to={`/work/${selectedWork[4].id}`}
              className="gallery-item reveal reveal-delay-2"
              style={{
                gridColumn: '7 / 13',
                height: 'clamp(220px, 28vw, 380px)',
              }}
            >
              <img
                src={selectedWork[4].image}
                alt={selectedWork[4].title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="overlay">
                <p className="eyebrow" style={{ marginBottom: '0.5rem', color: 'var(--gray-light)' }}>
                  {selectedWork[4].category}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                  }}
                >
                  {selectedWork[4].title}
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        ref={servicesRef as React.RefObject<HTMLElement>}
        style={{
          padding: 'var(--section-padding) 0',
          borderTop: '1px solid var(--gray-dark)',
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: 'clamp(3rem, 6vw, 8rem)',
              alignItems: 'start',
            }}
            className="services-layout"
          >
            {/* Left label */}
            <div>
              <p className="eyebrow reveal" style={{ marginBottom: '1rem' }}>
                Services
              </p>
              <h2
                className="reveal reveal-delay-1"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(3.5rem, 7vw, 7rem)',
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: '-0.03em',
                  color: 'var(--white)',
                }}
              >
                What I
                <br />
                <em style={{ fontStyle: 'italic', color: 'var(--gray-light)' }}>Create</em>
              </h2>
            </div>

            {/* Right — service list */}
            <div>
              {services.map((service, i) => (
                <div
                  key={service.number}
                  className="reveal"
                  style={{
                    transitionDelay: `${i * 0.1}s`,
                    padding: '2rem 0',
                    borderBottom: '1px solid var(--gray-dark)',
                    display: 'grid',
                    gridTemplateColumns: '3rem 1fr',
                    gap: '2rem',
                    alignItems: 'start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.65rem',
                      fontWeight: 500,
                      letterSpacing: '0.15em',
                      color: 'var(--gray-mid)',
                      paddingTop: '0.25rem',
                    }}
                  >
                    {service.number}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                        fontWeight: 700,
                        color: 'var(--white)',
                        marginBottom: '0.75rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        color: 'var(--gray-mid)',
                        maxWidth: '480px',
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section
        ref={philosophyRef as React.RefObject<HTMLElement>}
        style={{
          borderTop: '1px solid var(--gray-dark)',
          overflow: 'hidden',
        }}
      >
        <div
          className="philosophy-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '45fr 55fr',
            minHeight: 'clamp(560px, 70vw, 820px)',
          }}
        >
          {/* Left — large image, always visible, no animation hiding it */}
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: 'clamp(420px, 60vw, 820px)',
              backgroundColor: 'var(--gray-dark)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=85&auto=format&fit=crop"
              alt="Photographer composing a cinematic shot"
              loading="eager"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 30%',
              }}
            />

            {/* Bottom caption bar */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem 2rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gray-mid)',
                }}
              >
                Paris, 2024
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gray-mid)',
                }}
              >
                35mm Film
              </span>
            </div>
          </div>

          {/* Right — text panel, vertically centered */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 'clamp(3rem, 6vw, 7rem) clamp(2rem, 5vw, 5rem)',
              backgroundColor: 'var(--black)',
            }}
          >
            <p className="eyebrow reveal" style={{ marginBottom: '2rem' }}>
              Philosophy
            </p>

            {/* Large decorative quote mark */}
            <div
              className="reveal reveal-delay-1"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '6rem',
                lineHeight: 0.6,
                color: 'var(--gray-dark)',
                marginBottom: '1rem',
                userSelect: 'none',
              }}
            >
              "
            </div>

            <blockquote
              className="reveal reveal-delay-1"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)',
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                color: 'var(--white)',
                margin: '0 0 2rem 0',
                fontStyle: 'italic',
              }}
            >
              Every frame is a decision. Every shadow, a choice. I don't capture moments — I compose them.
            </blockquote>

            <div
              className="reveal reveal-delay-2"
              style={{
                width: '2.5rem',
                height: '1px',
                backgroundColor: 'var(--gray-mid)',
                marginBottom: '2rem',
              }}
            />

            <p
              className="reveal reveal-delay-2"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                lineHeight: 1.85,
                color: 'var(--gray-mid)',
                marginBottom: '2.5rem',
              }}
            >
              Based between Paris and New York, I work at the intersection of fashion, fine art, and documentary — creating images that linger long after the shutter closes.
            </p>

            <Link to="/about" className="btn-ghost reveal reveal-delay-3" style={{ alignSelf: 'flex-start' }}>
              Read More
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section
        style={{
          padding: 'var(--section-padding) 0',
          borderTop: '1px solid var(--gray-dark)',
          textAlign: 'center',
        }}
      >
        <div className="section-container">
          <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>
            Let's Collaborate
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 7vw, 7rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: 'var(--white)',
              marginBottom: '3rem',
            }}
          >
            Have a project
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gray-mid)' }}>in mind?</em>
          </h2>
          <Link to="/contact" className="btn-primary">
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(0.6); }
        }
        .hero-bg {
          animation: heroScale 12s ease-out forwards;
        }
        @keyframes heroScale {
          from { transform: scale(1.08); }
          to   { transform: scale(1.0); }
        }
        @media (max-width: 900px) {
          .work-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .work-grid > a:nth-child(1) {
            grid-column: 1 / 3 !important;
            grid-row: auto !important;
          }
          .work-grid > a:nth-child(2),
          .work-grid > a:nth-child(3) {
            grid-column: auto !important;
            grid-row: auto !important;
          }
          .work-grid > a:nth-child(4),
          .work-grid > a:nth-child(5) {
            grid-column: auto !important;
          }
          .services-layout {
            grid-template-columns: 1fr !important;
          }
          .philosophy-layout {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .work-grid {
            grid-template-columns: 1fr !important;
          }
          .work-grid > a {
            grid-column: 1 / 2 !important;
            grid-row: auto !important;
            height: 280px !important;
          }
        }
      `}</style>
    </div>
  );
}
