import styled from 'styled-components';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../animations/FadeIn';
import { processSteps } from '../../data/services';
import { useLanguage } from '../../i18n/LanguageContext';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
  position: relative;
  background: url('/images/vision.jpg') center / cover no-repeat fixed;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(26, 58, 53, 0.85);
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sectionMobile} 0;
    background-attachment: scroll;
  }
`;

const SectionContent = styled.div`
  position: relative;
  z-index: 1;
`;

const Intro = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 700px;
  margin-bottom: 3rem;
  line-height: 1.8;
`;

const StepsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    height: 2px;
    background: rgba(232, 196, 168, 0.25);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`;

const Step = styled.div`
  text-align: left;
`;

const StepNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.85rem;
  margin: 0 0 1.5rem;
  position: relative;
  z-index: 1;
`;

const StepTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const StepDesc = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
`;

const StepDetails = styled.ul`
  list-style: disc;
  text-align: left;
  margin-left: 1.2rem;

  li {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }
`;

export default function ProcessSteps() {
  const { language, t } = useLanguage();

  return (
    <Section id="prozess">
      <SectionContent>
        <Container>
          <FadeIn>
            <SectionHeading>{t('process.heading')}</SectionHeading>
            <Intro>{t('process.intro')}</Intro>
          </FadeIn>
          <StepsWrapper>
          {processSteps[language].map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <Step>
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDesc>{step.description}</StepDesc>
                <StepDetails>
                  {step.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </StepDetails>
              </Step>
            </FadeIn>
          ))}
          </StepsWrapper>
        </Container>
      </SectionContent>
    </Section>
  );
}
