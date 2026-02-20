import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../ui/Container';
import { footerNavItems } from '../../data/navigation';
import { useLanguage } from '../../i18n/LanguageContext';

const FooterWrapper = styled.footer`
  padding: 2.5rem 0;
  border-top: 1px solid rgba(245, 230, 211, 0.1);
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const FooterLink = styled(Link)`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <Copyright>{t('footer.copyright')}</Copyright>
          <FooterNav>
            {footerNavItems[language].map((item) => (
              <FooterLink key={item.path} to={item.path}>
                {item.label}
              </FooterLink>
            ))}
          </FooterNav>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
}
