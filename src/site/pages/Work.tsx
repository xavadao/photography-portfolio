'use client';

import { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';

const categories = ['All', 'Editorial', 'Portrait', 'Fashion', 'Fine Art', 'Architecture', 'Documentary', 'Landscape'];

// Asymmetric height pattern for masonry feel
const heightPattern = ['tall', 'short', 'short', 'medium', 'tall', 'medium', 'short', 'tall'];

function getHeight(index: number): string {
  const pattern = heightPattern[index % heightPattern.length];
  if (pattern === 'tall') return 'clamp(380px, 45vw, 580px)';
  if (pattern === 'short') return 'clamp(260px, 30vw, 380px)';
  return 'clamp(320px, 38vw, 480px)';
}

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');
  const gridRef = useScrollReveal(0.05);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) =>
        p.category === activeCategory || p.tags.includes(activeCategory)
      );

  return (
    <div style={{ backgroundColor: 'var(--black)', paddingTop: '7rem' }}>

      {/* ── HEADER ── */}
      <section style={{ padding: '0 0 clamp(3rem, 5vw, 5rem)' }}>
        <div className="section-container">
          <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>
            Portfolio
          </p>
          <h1
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
            Selected
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gray-mid)' }}>Work</em>
          </h1>

          {/* Category filter */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              borderBottom: '1px solid var(--gray-dark)',
              paddingBottom: '1.5rem',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  padding: '0.5rem 1.25rem',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--white)' : 'var(--gray-dark)',
                  backgroundColor: activeCategory === cat ? 'var(--white)' : 'transparent',
                  color: activeCategory === cat ? 'var(--black)' : 'var(--gray-mid)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--gray-mid)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'var(--white)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--gray-dark)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'var(--gray-mid)';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section
        ref={gridRef as React.RefObject<HTMLElement>}
        style={{ padding: '0 0 var(--section-padding)' }}
      >
        <div className="section-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
            }}
            className="work-gallery-grid"
          >
            {filtered.map((project, i) => (
              <Link
                key={project.id}
                to={`/work/${project.id}`}
                className="gallery-item reveal"
                style={{
                  height: getHeight(i),
                  transitionDelay: `${(i % 3) * 0.1}s`,
                  // Occasional full-width feature
                  gridColumn: i === 0 ? '1 / 3' : 'auto',
                }}
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="overlay">
                  <p
                    className="eyebrow"
                    style={{ marginBottom: '0.5rem', color: 'var(--gray-light)' }}
                  >
                    {project.category} — {project.year}
                  </p>
                  <h2
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                      fontWeight: 700,
                      color: 'var(--white)',
                      lineHeight: 1.1,
                    }}
                  >
                    {project.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '6rem 0',
                color: 'var(--gray-mid)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .work-gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .work-gallery-grid > a:first-child {
            grid-column: 1 / 3 !important;
          }
        }
        @media (max-width: 600px) {
          .work-gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .work-gallery-grid > a:first-child {
            grid-column: auto !important;
          }
          .work-gallery-grid > a {
            height: 280px !important;
          }
        }
      `}</style>
    </div>
  );
}
