import { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavItems, footerNavItems } from '../../data/navigation';
import { useLanguage } from '../../i18n/LanguageContext';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const MenuLink = styled(Link)<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  color: ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.text)};
  text-decoration: none;
`;

const Divider = styled.div`
  width: 40px;
  height: 1px;
  background: ${({ theme }) => theme.colors.textMuted};
  margin: 0.5rem 0;
`;

const SecondaryLink = styled(Link)`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;
`;

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const handleNavClick = useCallback((e: React.MouseEvent, path: string) => {
    if (path.includes('#')) {
      e.preventDefault();
      const [pagePath, hash] = path.split('#');
      const targetPage = pagePath || '/';
      onClose();

      const scrollToEl = () => {
        const el = document.getElementById(hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 10;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      };

      if (location.pathname === targetPage) {
        setTimeout(scrollToEl, 300);
      } else {
        navigate(targetPage);
        setTimeout(scrollToEl, 400);
      }
    } else {
      onClose();
    }
  }, [location.pathname, navigate, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <CloseBtn onClick={onClose} aria-label={t('header.menuClose')}>
            &times;
          </CloseBtn>
          <NavList>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.02 }}
            >
              <LanguageSwitcher />
            </motion.div>
            <Divider />
            {mainNavItems[language].map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
              >
                <MenuLink
                  to={item.path}
                  $active={location.pathname === item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                >
                  {item.label}
                </MenuLink>
              </motion.div>
            ))}
            <Divider />
            {footerNavItems[language].map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                <SecondaryLink to={item.path} onClick={onClose}>
                  {item.label}
                </SecondaryLink>
              </motion.div>
            ))}
          </NavList>
        </Overlay>
      )}
    </AnimatePresence>
  );
}
