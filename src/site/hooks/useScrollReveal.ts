import { useEffect, useRef } from 'react';

/**
 * Attaches IntersectionObserver to a container element.
 * All children with class "reveal", "reveal-fade", or "reveal-mask"
 * get the "visible" class added when they enter the viewport.
 * Pass a refresh key when filtering can mount new reveal elements.
 */
export function useScrollReveal(threshold = 0.15, refreshKey?: string) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-fade, .reveal-mask'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, refreshKey]);

  return ref;
}

/**
 * Single-element scroll reveal hook.
 */
export function useReveal(threshold = 0.2) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
