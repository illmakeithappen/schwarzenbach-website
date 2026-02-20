import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Container from '../components/ui/Container';
import FadeIn from '../components/animations/FadeIn';
import PageTransition from '../components/animations/PageTransition';
import { useLanguage } from '../i18n/LanguageContext';

const LegalSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sectionMobile} 0;
  }
`;

const LegalContainer = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  margin-bottom: 3rem;
`;

const Block = styled.div`
  margin-bottom: 2.5rem;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.8;
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Updated = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
  margin-top: 3rem;
`;

export default function Datenschutz() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <Helmet>
        <title>{t('meta.datenschutz.title')}</title>
        <meta name="description" content={t('meta.datenschutz.description')} />
      </Helmet>

      <LegalSection>
        <Container>
          <LegalContainer>
            <FadeIn>
              <Title>{t('datenschutz.title')}</Title>

              <Block>
                <h2>{t('datenschutz.responsible.title')}</h2>
                <p>
                  <strong>BLACK CREEK GmbH</strong><br />
                  Seestrasse 93<br />
                  6052 Hergiswil (NW)<br />
                  Schweiz
                </p>
                <p>
                  {t('impressum.email')} <a href="mailto:jhl@schwarzenbach-wm.com">jhl@schwarzenbach-wm.com</a>
                </p>
              </Block>

              <Block>
                <h2>{t('datenschutz.processing.title')}</h2>
                <p>{t('datenschutz.processing.p1')}</p>
                <p>{t('datenschutz.processing.p2')}</p>
              </Block>

              <Block>
                <h2>{t('datenschutz.legal.title')}</h2>
                <p>{t('datenschutz.legal.text')}</p>
              </Block>

              <Block>
                <h2>{t('datenschutz.cookies.title')}</h2>
                <p>{t('datenschutz.cookies.text')}</p>
              </Block>

              <Block>
                <h2>{t('datenschutz.rights.title')}</h2>
                <p>{t('datenschutz.rights.text')}</p>
              </Block>

              <Updated>
                <strong>{t('datenschutz.updated')}</strong> {t('datenschutz.updatedDate')}
              </Updated>
            </FadeIn>
          </LegalContainer>
        </Container>
      </LegalSection>
    </PageTransition>
  );
}
