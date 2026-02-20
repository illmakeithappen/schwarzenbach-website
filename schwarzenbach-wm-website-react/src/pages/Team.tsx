import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Hero from '../components/sections/Hero';
import TeamProfileCard from '../components/sections/TeamProfileCard';
import CTASection from '../components/sections/CTASection';
import Container from '../components/ui/Container';
import FadeIn from '../components/animations/FadeIn';
import PageTransition from '../components/animations/PageTransition';
import { teamMembers } from '../data/team';
import { useLanguage } from '../i18n/LanguageContext';

const TeamSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sectionMobile} 0;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ClosingSection = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

const ClosingText = styled.h2`
  max-width: 700px;
  margin: 0 auto;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  color: ${({ theme }) => theme.colors.textMuted};
  font-style: italic;
`;

export default function Team() {
  const { language, t } = useLanguage();

  return (
    <PageTransition>
      <Helmet>
        <title>{t('meta.team.title')}</title>
        <meta name="description" content={t('meta.team.description')} />
      </Helmet>

      <Hero
        title={t('team.hero.title')}
        subtitle={t('team.hero.subtitle')}
        compact
      />

      <TeamSection>
        <Container>
          <TeamGrid>
            {teamMembers[language].map((member, i) => (
              <TeamProfileCard key={member.name} member={member} delay={i * 0.1} />
            ))}
          </TeamGrid>
        </Container>
      </TeamSection>

      <ClosingSection>
        <Container>
          <FadeIn>
            <ClosingText>{t('team.closing')}</ClosingText>
          </FadeIn>
        </Container>
      </ClosingSection>

      <CTASection
        title={t('team.cta.title')}
        subtitle={t('team.cta.subtitle')}
        buttonText={t('team.cta.title')}
        buttonLink="/kontakt"
      />
    </PageTransition>
  );
}
