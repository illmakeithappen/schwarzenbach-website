import { useState } from 'react';
import styled from 'styled-components';
import Container from '../ui/Container';
import Accordion from '../ui/Accordion';
import { ButtonLink } from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import { benefits } from '../../data/services';
import { useLanguage } from '../../i18n/LanguageContext';

const Section = styled.section`
  background: #e0d6cc;
  color: ${({ theme }) => theme.colors.cardText};
  padding: ${({ theme }) => theme.spacing.section} 0;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sectionMobile} 0;
  }
`;

const SplitLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: flex-start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftColumn = styled.div``;

const Heading = styled.h2`
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Intro = styled.p`
  line-height: 1.8;
  opacity: 0.75;
  margin-bottom: 2.5rem;
  font-size: 1.05rem;
`;

const ButtonRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  max-width: 28rem;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const ActionButtonLink = styled(ButtonLink)`
  width: 100%;
`;

const RightColumn = styled.div``;

const AccordionItem = styled.div`
  border-top: 1px solid rgba(26, 58, 53, 0.2);

  &:last-child {
    border-bottom: 1px solid rgba(26, 58, 53, 0.2);
  }
`;

const AccordionDesc = styled.p`
  opacity: 0.75;
  line-height: 1.8;
`;

export default function BenefitsAccordion() {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="investment-ansatz">
      <Container>
        <SplitLayout>
          <FadeIn>
            <LeftColumn>
              <Heading>{t('benefits.heading')}</Heading>
              <Intro>{t('benefits.intro')}</Intro>
              <ButtonRow>
                <ActionButtonLink to="/faq">{t('benefits.ctaFaq')}</ActionButtonLink>
                <ActionButtonLink to="/#projekte">{t('benefits.ctaProjects')}</ActionButtonLink>
              </ButtonRow>
            </LeftColumn>
          </FadeIn>
          <FadeIn delay={0.15}>
            <RightColumn>
              {benefits[language].map((benefit, i) => (
                <AccordionItem key={benefit.title}>
                  <Accordion
                    title={benefit.title}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                  >
                    <AccordionDesc>{benefit.description}</AccordionDesc>
                  </Accordion>
                </AccordionItem>
              ))}
            </RightColumn>
          </FadeIn>
        </SplitLayout>
      </Container>
    </Section>
  );
}
