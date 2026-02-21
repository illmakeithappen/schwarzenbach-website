import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import BenefitsAccordion from '../components/sections/BenefitsAccordion';
import ProcessSteps from '../components/sections/ProcessSteps';
import AudienceGrid from '../components/sections/AudienceGrid';
import ProjectCard from '../components/sections/ProjectCard';
import TeamProfileCard from '../components/sections/TeamProfileCard';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import FadeIn from '../components/animations/FadeIn';
import { ButtonLink } from '../components/ui/Button';
import PageTransition from '../components/animations/PageTransition';
import { projects } from '../data/projects';
import { teamMembers } from '../data/team';
import { useLanguage } from '../i18n/LanguageContext';

const ProjectsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sectionMobile} 0;
  }
`;

const ProjectsIntro = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 700px;
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const TeamSection = styled.section`
  padding: 5rem 0 ${({ theme }) => theme.spacing.section};

  @media (max-width: 768px) {
    padding: 4rem 0 ${({ theme }) => theme.spacing.sectionMobile};
  }
`;

const TeamIntro = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 700px;
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamClosing = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 4rem;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  font-style: italic;
`;

export default function Home() {
  const { language, t } = useLanguage();
  const heroTitleParts = t('hero.title').split('\n');

  return (
    <PageTransition>
      <Helmet>
        <title>{t('meta.home.title')}</title>
        <meta name="description" content={t('meta.home.description')} />
      </Helmet>

      <Hero
        heading="Schwarzenbach Wealth Management"
        title={<>{heroTitleParts[0]}<br />{heroTitleParts[1]}</>}
        subtitle={t('hero.subtitle')}
        subtitleBold
        bgImage="/images/hero-pexels.jpg"
      >
        <ButtonLink to="/#team" style={{ marginTop: '1.5rem' }}>
          {t('hero.cta')}
        </ButtonLink>
      </Hero>

      <ServicesGrid />
      <BenefitsAccordion />
      <ProcessSteps />
      <AudienceGrid />

      <ProjectsSection id="projekte">
        <Container>
          <FadeIn>
            <SectionHeading>{t('projects.heading')}</SectionHeading>
            <ProjectsIntro>{t('projects.intro')}</ProjectsIntro>
          </FadeIn>
          {projects[language].map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              showImage
              excludeDetails={language === 'de' ? ['Kaltmiete'] : ['Base rent']}
              delay={i * 0.1}
            />
          ))}
        </Container>
      </ProjectsSection>

      <TeamSection id="team">
        <Container>
          <FadeIn>
            <SectionHeading>{t('team.heading')}</SectionHeading>
            <TeamIntro>{t('team.intro')}</TeamIntro>
          </FadeIn>
          <TeamGrid>
            {teamMembers[language].map((member, i) => (
              <TeamProfileCard key={member.name} member={member} delay={i * 0.1} />
            ))}
          </TeamGrid>
          <FadeIn>
            <TeamClosing>{t('team.closing')}</TeamClosing>
          </FadeIn>
        </Container>
      </TeamSection>


    </PageTransition>
  );
}
