'use client';

import { useParams, Link, Navigate } from '@/lib/router-compat';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const bodyRef = useScrollReveal(0.1);

  if (!project) return <Navigate to="/work" replace />;

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div style={{ backgroundColor: 'var(--black)' }}>

      {/* ── FULLSCREEN HERO IMAGE ── */}
      <div
        style={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, transparent 40%, rgba(10,10,10,0.8) 100%)',
          }}
        />

        {/* Project title overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(3rem, 6vw, 6rem)',
            left: 'clamp(1.5rem, 5vw, 5rem)',
            right: 'clamp(1.5rem, 5vw, 5rem)',
          }}
        >
          <p
            className="eyebrow"
            style={{ marginBottom: '1rem', color: 'var(--gray-light)' }}
          >
            {project.category} — {project.year}
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3rem, 7vw, 7rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: 'var(--white)',
              maxWidth: '800px',
            }}
          >
            {project.title}
          </h1>
        </div>

        {/* Back button */}
        <Link
          to="/work"
          style={{
            position: 'absolute',
            top: '7rem',
            left: 'clamp(1.5rem, 5vw, 5rem)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gray-light)',
            transition: 'color 0.25s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--white)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gray-light)';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All Work
        </Link>
      </div>

      {/* ── PROJECT BODY ── */}
      <div
        ref={bodyRef as React.RefObject<HTMLDivElement>}
        style={{ padding: 'var(--section-padding) 0' }}
      >
        {/* Description */}
        <div className="section-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: 'clamp(3rem, 6vw, 8rem)',
              marginBottom: 'var(--section-padding)',
              alignItems: 'start',
            }}
            className="project-meta-grid"
          >
            {/* Meta */}
            <div className="reveal">
              <div style={{ marginBottom: '2.5rem' }}>
                <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Category</p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--white)',
                  }}
                >
                  {project.category}
                </p>
              </div>
              <div style={{ marginBottom: '2.5rem' }}>
                <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Year</p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--white)',
                  }}
                >
                  {project.year}
                </p>
              </div>
              <div>
                <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>Tags</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.6rem',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        padding: '0.35rem 0.75rem',
                        border: '1px solid var(--gray-dark)',
                        color: 'var(--gray-mid)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="reveal reveal-delay-1">
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                  fontWeight: 700,
                  lineHeight: 1.4,
                  letterSpacing: '-0.01em',
                  color: 'var(--white)',
                }}
              >
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Image sequence — full bleed storytelling */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {project.images.map((img, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                transitionDelay: `${i * 0.15}s`,
                overflow: 'hidden',
                // Alternate full-bleed and contained
                ...(i % 3 === 0
                  ? { width: '100%', height: 'clamp(400px, 60vw, 800px)' }
                  : i % 3 === 1
                  ? {
                      maxWidth: '80%',
                      marginLeft: 'auto',
                      height: 'clamp(300px, 45vw, 600px)',
                    }
                  : {
                      maxWidth: '65%',
                      marginLeft: 'clamp(1.5rem, 5vw, 5rem)',
                      height: 'clamp(280px, 40vw, 550px)',
                    }),
              }}
            >
              <img
                src={img}
                alt={`${project.title} — ${i + 1}`}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                }}
              />
            </div>
          ))}
        </div>

        {/* ── NEXT PROJECT ── */}
        <div
          style={{
            borderTop: '1px solid var(--gray-dark)',
            marginTop: 'var(--section-padding)',
          }}
        >
          <Link
            to={`/work/${nextProject.id}`}
            style={{
              display: 'block',
              position: 'relative',
              overflow: 'hidden',
              height: 'clamp(300px, 40vw, 500px)',
            }}
          >
            <img
              src={nextProject.coverImage}
              alt={nextProject.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(10,10,10,0.55)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <p className="eyebrow" style={{ color: 'var(--gray-light)' }}>
                Next Project
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  color: 'var(--white)',
                  textAlign: 'center',
                }}
              >
                {nextProject.title}
              </h2>
            </div>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-meta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
