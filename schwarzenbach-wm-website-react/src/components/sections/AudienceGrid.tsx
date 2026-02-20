import styled from 'styled-components';
import { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../animations/FadeIn';
import { audienceSegments } from '../../data/services';
import { useLanguage } from '../../i18n/LanguageContext';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
  background: linear-gradient(135deg, #1a3a35 0%, #2d5550 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sectionMobile} 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const GridContainer = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  position: relative;

  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`;

const CentralHub = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, #d4a574);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    inset: -20px;
    border-radius: 50%;
    border: 2px dashed rgba(232, 196, 168, 0.3);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HubText = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.5;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 16rem;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
  }
`;

const AudienceCard = styled.div<{ $active: boolean }>`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1.5rem 2.25rem;
  box-shadow: ${({ $active }) => ($active ? '0 12px 32px rgba(0, 0, 0, 0.25)' : '0 4px 16px rgba(0, 0, 0, 0.15)')};
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  cursor: pointer;
  border: 2px solid ${({ theme, $active }) => ($active ? theme.colors.accent : 'transparent')};
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const AudienceTitle = styled.h3`
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const AudienceDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.cardText};
`;

export default function AudienceGrid() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { language, t } = useLanguage();

  return (
    <Section id="zielgruppe">
      <Container>
        <ContentWrapper>
          <FadeIn>
            <SectionHeading>{t('audience.heading')}</SectionHeading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <GridContainer>
              <CentralHub>
                <HubText>{t('audience.hub')}</HubText>
              </CentralHub>
              <CardsGrid>
                {audienceSegments[language].map((segment, index) => (
                  <AudienceCard
                    key={segment.title}
                    $active={activeCard === index}
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <AudienceTitle>{segment.title}</AudienceTitle>
                    <AudienceDesc>{segment.description}</AudienceDesc>
                  </AudienceCard>
                ))}
              </CardsGrid>
            </GridContainer>
          </FadeIn>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
