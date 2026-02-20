import styled from 'styled-components';
import FadeIn from '../animations/FadeIn';
import type { TeamMember } from '../../data/team';
import { useLanguage } from '../../i18n/LanguageContext';

const FullHeightFadeIn = styled(FadeIn)`
  height: 100%;
`;

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  color: ${({ theme }) => theme.colors.cardText};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(26, 58, 53, 0.06);
  border: 1px solid rgba(26, 58, 53, 0.06);
  height: 100%;
`;

const ProfileRow = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 0;
  padding: 1.5rem;
  padding-right: 0;
  height: 100%;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
    height: auto;
  }
`;

const PhotoBox = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(26, 58, 53, 0.12);

  img {
    width: 100%;
    height: 100%;
    min-height: 220px;
    object-fit: cover;
    object-position: top;
    display: block;
  }

  @media (max-width: 580px) {
    img {
      height: 280px;
    }
  }
`;

const PhotoPlaceholder = styled.div`
  width: 100%;
  min-height: 240px;
  background: rgba(26, 58, 53, 0.08);
`;

const ProfileInfo = styled.div`
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
`;

const Location = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
  min-height: 1.5rem;
  display: block;
`;

const Name = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
  min-height: 2rem;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.8;
  margin-bottom: 0.25rem;
  min-height: 1.4rem;
`;

const Role = styled.p`
  font-size: 0.8rem;
  opacity: 0.55;
  min-height: 2.8rem;
  line-height: 1.4;
`;

const ContactGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(26, 58, 53, 0.08);
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const ContactLabel = styled.span`
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.45;
`;

const ContactValue = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const BookingButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.7rem 1.5rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`;

interface TeamProfileCardProps {
  member: TeamMember;
  delay?: number;
}

export default function TeamProfileCard({ member, delay = 0 }: TeamProfileCardProps) {
  const { t } = useLanguage();
  const emailContact = member.contacts.find(c => c.label === 'E-Mail' || c.label === 'Email');

  return (
    <FullHeightFadeIn delay={delay}>
      <CardWrapper>
        <ProfileRow>
          <PhotoBox>
            {member.photo ? (
              <img src={member.photo} alt={member.name} />
            ) : (
              <PhotoPlaceholder />
            )}
          </PhotoBox>
          <ProfileInfo>
            {member.location && <Location>{member.location}</Location>}
            <Name>{member.name}</Name>
            <Subtitle>{member.subtitle}</Subtitle>
            <Role>{member.role}</Role>
            <ContactGrid>
              {member.contacts.map((contact) => (
                <ContactItem key={contact.label}>
                  <ContactLabel>{contact.label}</ContactLabel>
                  <ContactValue href={contact.href}>{contact.value}</ContactValue>
                </ContactItem>
              ))}
            </ContactGrid>
            <BookingButton
              href={member.bookingUrl || `mailto:${emailContact?.value}?subject=${t('team.appointmentRequest')}`}
              target={member.bookingUrl ? '_blank' : undefined}
              rel={member.bookingUrl ? 'noopener noreferrer' : undefined}
            >
              {t('team.bookAppointment')}
            </BookingButton>
          </ProfileInfo>
        </ProfileRow>
      </CardWrapper>
    </FullHeightFadeIn>
  );
}
