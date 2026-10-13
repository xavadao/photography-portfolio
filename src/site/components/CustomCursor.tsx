'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      if (ring) {
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.opacity = '0.6';
      }
    };

    const onLeaveLink = () => {
      if (ring) {
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.opacity = '1';
      }
    };

    document.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(animate);

    // Expand on interactive elements
    const interactives = document.querySelectorAll('a, button, [data-cursor-expand]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    // Show cursor
    dot.style.opacity = '1';
    ring.style.opacity = '1';

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterLink);
        el.removeEventListener('mouseleave', onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: 0, willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ opacity: 0, willChange: 'transform' }}
      />
    </>
  );
}
