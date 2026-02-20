import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import ContactCards from '../components/sections/ContactCards';
import CTASection from '../components/sections/CTASection';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import SectionHeading from '../components/ui/SectionHeading';
import FadeIn from '../components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerChildren';
import PageTransition from '../components/animations/PageTransition';
import { useLanguage } from '../i18n/LanguageContext';

const ProcessSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sectionMobile} 0;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ProcessTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ProcessDesc = styled.p`
  font-size: 0.85rem;
  line-height: 1.6;
`;

export default function Kontakt() {
  const { t } = useLanguage();

  const contactProcess = [
    { step: 1, title: t('kontakt.step1.title'), desc: t('kontakt.step1.desc') },
    { step: 2, title: t('kontakt.step2.title'), desc: t('kontakt.step2.desc') },
    { step: 3, title: t('kontakt.step3.title'), desc: t('kontakt.step3.desc') },
    { step: 4, title: t('kontakt.step4.title'), desc: t('kontakt.step4.desc') },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>{t('meta.kontakt.title')}</title>
        <meta name="description" content={t('meta.kontakt.description')} />
      </Helmet>

      <ContactCards />

      <ProcessSection>
        <Container>
          <FadeIn>
            <SectionHeading>{t('kontakt.processHeading')}</SectionHeading>
          </FadeIn>
          <StaggerContainer>
            <ProcessGrid>
              {contactProcess.map((item) => (
                <StaggerItem key={item.step}>
                  <Card>
                    <ProcessIcon>{item.step}</ProcessIcon>
                    <ProcessTitle>{item.title}</ProcessTitle>
                    <ProcessDesc>{item.desc}</ProcessDesc>
                  </Card>
                </StaggerItem>
              ))}
            </ProcessGrid>
          </StaggerContainer>
        </Container>
      </ProcessSection>

      <CTASection
        title={t('kontakt.cta.title')}
        subtitle={t('kontakt.cta.subtitle')}
        buttonText={t('kontakt.cta.button')}
        buttonLink="mailto:jhl@schwarzenbach-wm.com"
        secondaryText={t('kontakt.scheduleCall')}
        secondaryHref="https://outlook.office.com/bookwithme/user/60d26cc0e6db41dcafd51cea57a6eb95@dreso.com?anonymous&ismsaljsauthenabled&ep=pcard"
        note={
          <>
            {t('kontakt.cta.note')}{' '}
            <a href="tel:+4917680887286">+49 176 8088 7286</a>
          </>
        }
      />
    </PageTransition>
  );
}
