import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Hero from '../components/sections/Hero';
import ProjectCard from '../components/sections/ProjectCard';
import CTASection from '../components/sections/CTASection';
import Container from '../components/ui/Container';
import PageTransition from '../components/animations/PageTransition';
import { projects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

const ProjectsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sectionMobile} 0;
  }
`;

export default function Projekte() {
  const { language, t } = useLanguage();

  return (
    <PageTransition>
      <Helmet>
        <title>{t('meta.projekte.title')}</title>
        <meta name="description" content={t('meta.projekte.description')} />
      </Helmet>

      <Hero
        title={t('projekte.hero.title')}
        subtitle={t('projekte.hero.subtitle')}
        compact
      />

      <ProjectsSection>
        <Container>
          {projects[language].map((project, i) => (
            <ProjectCard key={project.id} project={project} showDetails showImage delay={i * 0.15} />
          ))}
        </Container>
      </ProjectsSection>

      <CTASection
        title={t('projekte.cta.title')}
        subtitle={t('projekte.cta.subtitle')}
        buttonText={t('projekte.cta.title')}
        buttonLink="/kontakt"
      />
    </PageTransition>
  );
}
