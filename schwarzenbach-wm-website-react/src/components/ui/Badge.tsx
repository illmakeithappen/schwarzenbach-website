import styled from 'styled-components';

interface BadgeProps {
  $type: 'neubau' | 'bestand' | 'premium';
}

const badgeColors = {
  neubau: { bg: 'rgba(26, 58, 53, 0.08)', color: '#1a3a35' },
  bestand: { bg: 'rgba(26, 58, 53, 0.08)', color: '#1a3a35' },
  premium: { bg: 'rgba(26, 58, 53, 0.12)', color: '#1a3a35' },
};

const Badge = styled.span<BadgeProps>`
  display: inline-block;
  padding: 0.3rem 0.9rem;
  font-size: 0.65rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  border-radius: 20px;
  background: ${({ $type }) => badgeColors[$type].bg};
  color: ${({ $type }) => badgeColors[$type].color};
`;

export default Badge;
