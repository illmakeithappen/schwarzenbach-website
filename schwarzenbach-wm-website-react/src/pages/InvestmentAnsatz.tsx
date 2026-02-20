import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Hero from '../components/sections/Hero';
import ProcessSteps from '../components/sections/ProcessSteps';
import AudienceGrid from '../components/sections/AudienceGrid';
import CTASection from '../components/sections/CTASection';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import FadeIn from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerChildren';
import PageTransition from '../components/animations/PageTransition';
import { benefits } from '../data/services';
import { useLanguage } from '../i18n/LanguageContext';

const IntroSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sectionMobile} 0;
  }
`;

const IntroText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 800px;
  line-height: 1.9;
  margin-bottom: 3rem;
  font-size: 1.05rem;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitTitle = styled.h3`
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
`;

const BenefitDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
`;

export default function InvestmentAnsatz() {
  const { language, t } = useLanguage();

  return (
    <PageTransition>
      <Helmet>
        <title>{t('meta.investmentAnsatz.title')}</title>
        <meta name="description" content={t('meta.investmentAnsatz.description')} />
      </Helmet>

      <Hero
        title={t('investmentAnsatz.hero.title')}
        subtitle={t('investmentAnsatz.hero.subtitle')}
        compact
      />

      <IntroSection>
        <Container>
          <FadeIn>
            <IntroText>{t('investmentAnsatz.intro')}</IntroText>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading>{t('benefits.heading')}</SectionHeading>
          </FadeIn>
          <StaggerContainer>
            <BenefitsGrid>
              {benefits[language].map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <Card>
                    <BenefitTitle>{benefit.title}</BenefitTitle>
                    <BenefitDesc>{benefit.description}</BenefitDesc>
                  </Card>
                </StaggerItem>
              ))}
            </BenefitsGrid>
          </StaggerContainer>
        </Container>
      </IntroSection>

      <ProcessSteps />
      <AudienceGrid />

      <CTASection
        title={t('investmentAnsatz.cta.title')}
        subtitle={t('investmentAnsatz.cta.subtitle')}
        buttonText={t('investmentAnsatz.cta.title')}
        buttonLink="/kontakt"
      />
    </PageTransition>
  );
}
