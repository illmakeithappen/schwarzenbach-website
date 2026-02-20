import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import theme from './theme';
import GlobalStyles from './globalStyles';
import { LanguageProvider } from './i18n/LanguageContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <ScrollToHash />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}
