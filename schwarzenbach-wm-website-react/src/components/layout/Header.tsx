import { useState, useCallback, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useScrollPosition from '../../hooks/useScrollPosition';
import { mainNavItems } from '../../data/navigation';
import { useLanguage } from '../../i18n/LanguageContext';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import MobileMenu from './MobileMenu';

const HeaderWrapper = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: box-shadow ${({ theme }) => theme.transitions.default};
  padding: 0.4rem 0;
  padding-top: calc(0.4rem + env(safe-area-inset-top, 0px));
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ $scrolled, theme }) => ($scrolled ? theme.shadows.nav : 'none')};
`;

const Nav = styled.nav`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;

  img {
    height: 60px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.text)};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  position: relative;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
    transition: width ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};

    &::after {
      width: 100%;
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const DesktopOnly = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: ${({ theme }) => theme.colors.text};
    transition: all ${({ theme }) => theme.transitions.default};
  }
`;

export default function Header() {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const scrolled = scrollY > 60;
  const navItems = mainNavItems[language];

  // Scroll spy: detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') {
        setActiveSection('');
        return;
      }

      const sections = ['philosophie', 'projekte', 'team'];
      const scrollPosition = window.scrollY + 200;

      if (window.scrollY < 300) {
        setActiveSection('/');
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`/#${sectionId}`);
            return;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = useCallback((e: React.MouseEvent, path: string) => {
    e.preventDefault();

    if (path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      }
    } else if (path.includes('#')) {
      const [pagePath, hash] = path.split('#');
      const targetPage = pagePath || '/';

      const scrollToEl = () => {
        const el = document.getElementById(hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 10;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      };

      if (location.pathname === targetPage) {
        scrollToEl();
      } else {
        navigate(targetPage);
        setTimeout(scrollToEl, 100);
      }
    } else {
      navigate(path);
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <HeaderWrapper $scrolled={scrolled}>
        <Nav>
          <Logo to="/" onClick={(e) => handleNavClick(e, '/')}>
            <img src="/images/logo-white.svg" alt="Schwarzenbach Wealth Management" />
          </Logo>
          <NavMenu>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  $active={
                    item.path === '/'
                      ? activeSection === '/' && location.pathname === '/'
                      : item.path.includes('#')
                      ? activeSection === item.path
                      : location.pathname === item.path
                  }
                  onClick={(e) => handleNavClick(e, item.path)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </NavMenu>
          <NavActions>
            <DesktopOnly>
              <LanguageSwitcher />
            </DesktopOnly>
            <Hamburger onClick={() => setMenuOpen(true)} aria-label={t('header.menuOpen')}>
              <span />
              <span />
              <span />
            </Hamburger>
          </NavActions>
        </Nav>
      </HeaderWrapper>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
