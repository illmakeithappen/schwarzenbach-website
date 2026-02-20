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
  margin-bottom: 0.5rem;
`;

const Intro = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 3rem;
  font-size: 0.9rem;
`;

const Block = styled.div`
  margin-bottom: 2.5rem;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
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

export default function Impressum() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <Helmet>
        <title>{t('meta.impressum.title')}</title>
        <meta name="description" content={t('meta.impressum.description')} />
      </Helmet>

      <LegalSection>
        <Container>
          <LegalContainer>
            <FadeIn>
              <Title>{t('impressum.title')}</Title>
              <Intro>{t('impressum.intro')}</Intro>

              <Block>
                <h2>{t('impressum.provider')}</h2>
                <p>
                  <strong>BLACK CREEK GmbH</strong><br />
                  Seestrasse 93<br />
                  6052 Hergiswil (NW)<br />
                  Schweiz
                </p>
                <p>
                  {t('impressum.legalForm')}<br />
                  {t('impressum.seat')}
                </p>
                <p>
                  UID: CHE-408.358.246<br />
                  CH-ID: CH-150-4479014-6
                </p>
              </Block>

              <Block>
                <h2>{t('impressum.contact')}</h2>
                <p>
                  <strong>{t('impressum.email')}</strong>{' '}
                  <a href="mailto:jhl@schwarzenbach-wm.com">jhl@schwarzenbach-wm.com</a>
                  <br />
                  <strong>{t('impressum.phone')}</strong> <a href="tel:+41799195455">+41 79 919 54 55</a>
                </p>
              </Block>

              <Block>
                <h2>{t('impressum.liability.title')}</h2>
                <p>{t('impressum.liability.p1')}</p>
                <p>{t('impressum.liability.p2')}</p>
              </Block>

              <Block>
                <h2>{t('impressum.regulatory.title')}</h2>
                <p>{t('impressum.regulatory.text')}</p>
              </Block>

              <Updated>
                <strong>{t('impressum.updated')}</strong> {t('impressum.updatedDate')}
              </Updated>
            </FadeIn>
          </LegalContainer>
        </Container>
      </LegalSection>
    </PageTransition>
  );
}
