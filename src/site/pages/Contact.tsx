'use client';

import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const bodyRef = useScrollReveal();
  useEffect(() => { if (formState === 'sent') document.getElementById('contact-confirmation')?.focus(); }, [formState]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1200));
    setFormState('sent');
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--gray-dark)',
    padding: '1.25rem 0',
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem',
    color: 'var(--white)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--black)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '7rem',
      }}
    >
      <div
        ref={bodyRef as React.RefObject<HTMLDivElement>}
        className="section-container"
        style={{ paddingTop: 'clamp(3rem, 6vw, 6rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)' }}
      >
        {/* Header */}
        <div style={{ marginBottom: 'clamp(4rem, 8vw, 8rem)' }}>
          <p className="eyebrow reveal" style={{ marginBottom: '1.5rem' }}>
            Contact
          </p>
          <h1
            className="reveal reveal-delay-1"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3.5rem, 9vw, 10rem)',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: 'var(--white)',
              maxWidth: '900px',
            }}
          >
            Let's make
            <br />
            something
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gray-mid)' }}>
              extraordinary.
            </em>
          </h1>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(3rem, 8vw, 10rem)',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left — info */}
          <div className="reveal">
            <div style={{ marginBottom: '3rem' }}>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>
                Direct
              </p>
              <a
                href="mailto:hello@lumiere.photo"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--white)',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.25s ease',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gray-mid)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--white)';
                }}
              >
                hello@lumiere.photo
              </a>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'var(--gray-mid)',
                  lineHeight: 1.6,
                }}
              >
                For commissions, collaborations, and press inquiries.
                <br />
                Response within 48 hours.
              </p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>
                Representation
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  color: 'var(--white)',
                  marginBottom: '0.25rem',
                }}
              >
                Atelier Agency, Paris
              </p>
              <a
                href="mailto:booking@atelier.agency"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
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
                booking@atelier.agency
              </a>
            </div>

            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>
                Follow
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: 'Instagram', handle: '@lumiere.photo' },
                  { label: 'Behance', handle: 'lumiere-photo' },
                  { label: 'LinkedIn', handle: 'Alexandre Moreau' },
                ].map(({ label, handle }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.65rem',
                        fontWeight: 500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--gray-mid)',
                      }}
                    >
                      {label}
                    </span>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.85rem',
                        color: 'var(--white)',
                        transition: 'color 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gray-mid)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = 'var(--white)';
                      }}
                    >
                      {handle}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            {formState === 'sent' ? (
              <div
                style={{
                  padding: '4rem 0',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    border: '1px solid var(--white)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="var(--white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 id="contact-confirmation" tabIndex={-1} role="status"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                    marginBottom: '1rem',
                  }}
                >
                  Demo completed.
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--gray-mid)',
                    lineHeight: 1.7,
                  }}
                >
                  This is a demo form.
                  <br />
                  Your message was not sent or saved.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <input
                    type="text"
                    id="contact-name" name="name" aria-label="Name" autoComplete="name" placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: (e.target as HTMLInputElement).value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderBottomColor = 'var(--white)';
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderBottomColor = 'var(--gray-dark)';
                    }}
                  />
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <input
                    type="email"
                    id="contact-email" name="email" aria-label="Email address" autoComplete="email" spellCheck={false} placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: (e.target as HTMLInputElement).value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderBottomColor = 'var(--white)';
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderBottomColor = 'var(--gray-dark)';
                    }}
                  />
                </div>
                <div style={{ marginBottom: '3rem' }}>
                  <textarea
                    id="contact-message" name="message" aria-label="Project message" placeholder="Tell me about your project..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: (e.target as HTMLTextAreaElement).value })}
                    style={{
                      ...inputStyle,
                      resize: 'none',
                      display: 'block',
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderBottomColor = 'var(--white)';
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderBottomColor = 'var(--gray-dark)';
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={formState === 'sending'}
                  style={{
                    opacity: formState === 'sending' ? 0.6 : 1,
                    cursor: formState === 'sending' ? 'wait' : 'pointer',
                  }}
                >
                  {formState === 'sending' ? 'Sending...' : 'Send Message'}
                  {formState !== 'sending' && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: var(--gray-mid);
          font-family: var(--font-sans);
        }
      `}</style>
    </div>
  );
}
