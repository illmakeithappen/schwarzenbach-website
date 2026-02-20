import styled from 'styled-components';
import Badge from '../ui/Badge';
import FadeIn from '../animations/FadeIn';
import type { Project } from '../../data/projects';
import { useLanguage } from '../../i18n/LanguageContext';

const CardWrapper = styled.div<{ $featured?: boolean; $hasImage?: boolean }>`
  background: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.cardText};
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 24px rgba(26, 58, 53, 0.06);
  border: 1px solid rgba(26, 58, 53, 0.06);
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  display: ${({ $hasImage }) => ($hasImage ? 'grid' : 'block')};
  grid-template-columns: ${({ $hasImage }) => ($hasImage ? '1fr 1fr' : '1fr')};

  &:hover {
    box-shadow: 0 16px 48px rgba(26, 58, 53, 0.12);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  min-height: 280px;

  @media (max-width: 768px) {
    min-height: 180px;
    max-height: 220px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.default};
  }

  ${CardWrapper}:hover & img {
    transform: scale(1.03);
  }
`;

const ProjectHeader = styled.div`
  padding: 2.5rem 2.5rem 1.5rem;

  @media (max-width: 480px) {
    padding: 1.5rem 1.5rem 1rem;
  }
`;

const Title = styled.h3`
  margin: 0.75rem 0 0.3rem;
  font-size: 1.5rem;
  letter-spacing: -0.01em;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Location = styled.p`
  font-size: 0.8rem;
  opacity: 0.55;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const ProjectContent = styled.div`
  padding: 0 2.5rem 2.5rem;

  @media (max-width: 480px) {
    padding: 0 1.5rem 1.5rem;
  }
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(26, 58, 53, 0.08);
`;

const DetailItem = styled.div``;

const DetailLabel = styled.span`
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.5;
  margin-bottom: 0.35rem;
`;

const DetailValue = styled.span`
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: -0.01em;
`;

const PriceSection = styled.div`
  margin-bottom: 2rem;

  h4 {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
    opacity: 0.5;
  }
`;

const PriceRange = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: -0.02em;
`;

const PriceSeparator = styled.span`
  font-size: 0.8rem;
  opacity: 0.4;
  font-family: ${({ theme }) => theme.fonts.body};
`;

const Advantages = styled.div`
  margin-bottom: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(26, 58, 53, 0.08);

  h4 {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  ul {
    list-style: none;
    display: grid;
    gap: 0.5rem;
  }

  li {
    font-size: 0.88rem;
    line-height: 1.6;
    padding-left: 1.2rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.55em;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary};
      opacity: 0.2;
    }
  }
`;

const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightBox = styled.div`
  background: rgba(26, 58, 53, 0.04);
  border-radius: 8px;
  padding: 1.25rem;

  h5 {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.8rem;
    opacity: 0.7;
    line-height: 1.6;
  }
`;

interface ProjectCardProps {
  project: Project;
  showDetails?: boolean;
  showImage?: boolean;
  excludeDetails?: string[];
  delay?: number;
}

export default function ProjectCard({ project, showDetails = false, showImage = false, excludeDetails = [], delay = 0 }: ProjectCardProps) {
  const { t } = useLanguage();
  const filteredDetails = excludeDetails.length > 0
    ? project.details.filter(d => !excludeDetails.includes(d.label))
    : project.details;

  return (
    <FadeIn delay={delay}>
      <CardWrapper $featured={project.featured} $hasImage={showImage && !!project.image}>
        {showImage && project.image && (
          <ImageWrapper>
            <img src={project.image} alt={project.imageAlt || project.title} />
          </ImageWrapper>
        )}
        <div>
          <ProjectHeader>
            <Badge $type={project.badgeType}>{project.badge}</Badge>
            <Title>{project.title}</Title>
            <Location>{project.location}</Location>
          </ProjectHeader>
          <ProjectContent>
          <DetailGrid>
            {filteredDetails.map((d) => (
              <DetailItem key={d.label}>
                <DetailLabel>{d.label}</DetailLabel>
                <DetailValue>{d.value}</DetailValue>
              </DetailItem>
            ))}
          </DetailGrid>
          <PriceSection>
            <h4>{t('projects.priceRange')}</h4>
            <PriceRange>
              <span>{project.priceFrom}</span>
              <PriceSeparator>{t('projects.priceTo')}</PriceSeparator>
              <span>{project.priceTo}</span>
            </PriceRange>
          </PriceSection>
          {showDetails && (
            <>
              <Advantages>
                <h4>{t('projects.advantages')}</h4>
                <ul>
                  {project.advantages.map((adv) => (
                    <li key={adv.bold}>
                      <strong>{adv.bold}</strong> – {adv.text}
                    </li>
                  ))}
                </ul>
              </Advantages>
              <Highlights>
                {project.highlights.map((h) => (
                  <HighlightBox key={h.title}>
                    <h5>{h.title}</h5>
                    <p>{h.description}</p>
                  </HighlightBox>
                ))}
              </Highlights>
            </>
          )}
        </ProjectContent>
        </div>
      </CardWrapper>
    </FadeIn>
  );
}
