const theme = {
  colors: {
    primary: '#1a3a35',
    primaryLight: '#1f423d',
    secondary: '#2a4a45',
    text: '#f5e6d3',
    textMuted: 'rgba(245, 230, 211, 0.75)',
    accent: '#e8c4a8',
    accentHover: '#d4a882',
    cardBg: '#e0d6cc',
    cardText: '#1a3a35',
    background: '#1a3a35',
  },
  fonts: {
    heading: "'Inter', Arial, sans-serif",
    body: "'Lora', Georgia, serif",
  },
  spacing: { section: '9rem', sectionMobile: '5rem' },
  maxWidth: '1280px',
  borderRadius: '6px',
  shadows: {
    card: '0 2px 16px rgba(26, 58, 53, 0.08)',
    cardHover: '0 14px 40px rgba(26, 58, 53, 0.18)',
    nav: '0 4px 30px rgba(26, 58, 53, 0.12)',
  },
  transitions: { default: '0.3s cubic-bezier(0.25, 0.1, 0.25, 1)' },
};

export type ThemeType = typeof theme;
export default theme;
