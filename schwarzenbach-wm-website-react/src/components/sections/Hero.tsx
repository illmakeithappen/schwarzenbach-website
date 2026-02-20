import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const HeroSection = styled.section<{ $compact?: boolean; $bgImage?: string }>`
  min-height: ${({ $compact }) => ($compact ? '40svh' : '90svh')};
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  ${({ $bgImage }) =>
    $bgImage &&
    css`
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: url(${$bgImage}) center top / cover no-repeat;
        z-index: 0;
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(26, 58, 53, 0.78);
        z-index: 0;
      }
    `}
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled(motion.span)`
  display: block;
  font-size: clamp(0.9rem, 1.4vw, 1.1rem);
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const Title = styled(motion.h1)`
  margin-bottom: 2.5rem;
  font-weight: 600;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
`;

interface HeroProps {
  heading?: string;
  title: React.ReactNode;
  subtitle?: string;
  compact?: boolean;
  bgImage?: string;
  children?: React.ReactNode;
}

export default function Hero({ heading, title, subtitle, compact, bgImage, children }: HeroProps) {
  return (
    <HeroSection $compact={compact} $bgImage={bgImage}>
      <Container>
        <HeroContent>
          {heading && (
            <Heading
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {heading}
            </Heading>
          )}
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {title}
          </Title>
          {subtitle && (
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {subtitle}
            </Subtitle>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {children}
            </motion.div>
          )}
        </HeroContent>
      </Container>
    </HeroSection>
  );
}
