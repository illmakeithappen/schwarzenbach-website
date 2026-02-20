import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonStyleProps {
  $variant?: 'primary' | 'secondary';
}

const buttonStyles = css<ButtonStyleProps>`
  display: inline-block;
  padding: 1rem 2.5rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  text-align: center;
  border: none;
  text-decoration: none;

  ${({ $variant, theme }) =>
    $variant === 'secondary'
      ? css`
          background: transparent;
          color: ${theme.colors.accent};
          border: 1px solid ${theme.colors.accent};

          &:hover {
            background: ${theme.colors.accent};
            color: ${theme.colors.primary};
            transform: scale(1.02);
          }
        `
      : css`
          background: ${theme.colors.accent};
          color: ${theme.colors.primary};

          &:hover {
            background: ${theme.colors.accentHover};
            color: ${theme.colors.primary};
            transform: scale(1.02);
            box-shadow: 0 8px 24px rgba(232, 196, 168, 0.3);
          }
        `}
`;

export const ButtonLink = styled(Link)<ButtonStyleProps>`
  ${buttonStyles}
`;

export const ButtonAnchor = styled.a<ButtonStyleProps>`
  ${buttonStyles}
`;

export const ButtonEl = styled.button<ButtonStyleProps>`
  ${buttonStyles}
`;

export default ButtonLink;
