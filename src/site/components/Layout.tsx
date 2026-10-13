'use client';

import { useEffect } from 'react';
import { useLocation } from '@/lib/router-compat';
import Nav from './Nav';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export default function Layout({ children, hideFooter = false }: LayoutProps) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
      <CustomCursor />
      <Nav />
      <main
        className="page-enter"
        key={location.pathname}
        style={{ minHeight: '100vh' }}
      >
        {children}
      </main>
      {!hideFooter && <Footer />}
    </>
  );
}
