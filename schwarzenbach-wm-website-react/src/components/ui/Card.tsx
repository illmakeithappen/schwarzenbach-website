import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.cardText};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.card};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }
`;

export default Card;
