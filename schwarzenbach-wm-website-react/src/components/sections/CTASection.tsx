import styled from 'styled-components';
import Container from '../ui/Container';
import { ButtonLink, ButtonAnchor } from '../ui/Button';
import FadeIn from '../animations/FadeIn';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sectionMobile} 0;
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Note = styled.p`
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};

  a {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryText?: string;
  secondaryHref?: string;
  note?: React.ReactNode;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryText,
  secondaryHref,
  note,
}: CTASectionProps) {
  return (
    <Section>
      <Container>
        <FadeIn>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          <ButtonRow>
            {buttonText && buttonLink && (
              buttonLink.startsWith('mailto:') || buttonLink.startsWith('tel:') ? (
                <ButtonAnchor href={buttonLink}>{buttonText}</ButtonAnchor>
              ) : (
                <ButtonLink to={buttonLink}>{buttonText}</ButtonLink>
              )
            )}
            {secondaryText && secondaryHref && (
              <ButtonAnchor
                href={secondaryHref}
                $variant="secondary"
                target={secondaryHref.startsWith('http') ? '_blank' : undefined}
                rel={secondaryHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {secondaryText}
              </ButtonAnchor>
            )}
          </ButtonRow>
          {note && <Note>{note}</Note>}
        </FadeIn>
      </Container>
    </Section>
  );
}
