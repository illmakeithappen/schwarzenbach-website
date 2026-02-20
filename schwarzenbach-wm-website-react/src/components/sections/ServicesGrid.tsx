import styled from 'styled-components';
import Container from '../ui/Container';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../animations/FadeIn';
import { services } from '../../data/services';
import { useLanguage } from '../../i18n/LanguageContext';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sectionMobile} 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  counter-reset: service-counter;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(Card)`
  position: relative;
  padding: 2.5rem 5.5rem 2.5rem 2.5rem;
  counter-increment: service-counter;
  height: 100%;

  &::before {
    content: "0" counter(service-counter);
    position: absolute;
    top: -0.1rem;
    right: 1rem;
    font-size: 5rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.1;
    line-height: 1;
  }
`;

const ServiceTitle = styled.h3`
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
`;

const ServiceDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
`;

export default function ServicesGrid() {
  const { language, t } = useLanguage();

  return (
    <Section id="philosophie">
      <Container>
        <FadeIn>
          <SectionHeading>{t('services.heading')}</SectionHeading>
        </FadeIn>
        <Grid>
          {services[language].map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <ServiceCard>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDesc>{service.description}</ServiceDesc>
              </ServiceCard>
            </FadeIn>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
