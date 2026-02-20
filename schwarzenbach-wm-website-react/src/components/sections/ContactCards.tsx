import styled from 'styled-components';
import Container from '../ui/Container';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import FadeIn from '../animations/FadeIn';
import { ButtonAnchor } from '../ui/Button';
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
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.15rem;
`;

const QuickItem = styled.div`
  margin-bottom: 0.75rem;
`;

const QuickLabel = styled.span`
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.6;
  margin-bottom: 0.2rem;
`;

const QuickValue = styled.a`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Intro = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 2rem;
`;

export default function ContactCards() {
  const { t } = useLanguage();

  return (
    <Section>
      <Container>
        <FadeIn>
          <SectionHeading>{t('kontakt.heading')}</SectionHeading>
          <Intro>{t('kontakt.intro')}</Intro>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Grid>
            <Card>
              <CardTitle>{t('kontakt.byPhone')}</CardTitle>
              <QuickItem>
                <QuickLabel>{t('kontakt.switzerland')}</QuickLabel>
                <QuickValue href="tel:+41799195455">+41 79 919 5455</QuickValue>
              </QuickItem>
              <QuickItem>
                <QuickLabel>{t('kontakt.germany')}</QuickLabel>
                <QuickValue href="tel:+4917680887286">+49 176 8088 7286</QuickValue>
              </QuickItem>
            </Card>
            <Card>
              <CardTitle>{t('kontakt.byEmail')}</CardTitle>
              <QuickItem>
                <QuickLabel>{t('kontakt.generalInquiries')}</QuickLabel>
                <QuickValue href="mailto:jhl@schwarzenbach-wm.com">jhl@schwarzenbach-wm.com</QuickValue>
              </QuickItem>
              <QuickItem>
                <QuickLabel>{t('kontakt.realEstateAcquisition')}</QuickLabel>
                <QuickValue href="mailto:daniel.schwarz@confluentes-group.de">
                  daniel.schwarz@confluentes-group.de
                </QuickValue>
              </QuickItem>
            </Card>
          </Grid>
        </FadeIn>
        <FadeIn delay={0.2}>
          <ButtonRow>
            <ButtonAnchor href="mailto:jhl@schwarzenbach-wm.com">{t('kontakt.emailDrLukowski')}</ButtonAnchor>
            <ButtonAnchor href="https://outlook.office.com/bookwithme/user/60d26cc0e6db41dcafd51cea57a6eb95@dreso.com?anonymous&ismsaljsauthenabled&ep=pcard" target="_blank" rel="noopener noreferrer" $variant="secondary">
              {t('kontakt.scheduleCall')}
            </ButtonAnchor>
          </ButtonRow>
        </FadeIn>
      </Container>
    </Section>
  );
}
