import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main style={{ paddingTop: '80px' }}>{children}</main>
      <Footer />
    </>
  );
}
