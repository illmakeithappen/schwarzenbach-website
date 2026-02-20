import styled from 'styled-components';
import { useLanguage } from '../../i18n/LanguageContext';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const LangButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.8rem;
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  letter-spacing: 0.05em;
  color: ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.text)};
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};
  padding: 0.2rem 0;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Separator = styled.span`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.3;
  font-size: 0.8rem;
  line-height: 1;
  display: flex;
  align-items: center;
`;

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Wrapper>
      <LangButton
        $active={language === 'de'}
        onClick={() => setLanguage('de')}
        aria-label="Deutsch"
      >
        DE
      </LangButton>
      <Separator>|</Separator>
      <LangButton
        $active={language === 'en'}
        onClick={() => setLanguage('en')}
        aria-label="English"
      >
        EN
      </LangButton>
    </Wrapper>
  );
}
