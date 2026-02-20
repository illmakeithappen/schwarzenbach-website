import styled from 'styled-components';

const Heading = styled.h2`
  position: relative;
  margin-bottom: 2rem;
  font-weight: 600;
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    margin-top: 1rem;
  }
`;

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return <Heading className={className}>{children}</Heading>;
}
