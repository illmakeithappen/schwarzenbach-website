import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import CTASection from '../components/sections/CTASection';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Accordion from '../components/ui/Accordion';
import FadeIn from '../components/animations/FadeIn';
import PageTransition from '../components/animations/PageTransition';
import { faqCategories } from '../data/faq';
import { useLanguage } from '../i18n/LanguageContext';

const PageWrapper = styled.div`
  background: #f4f3f0;
  color: ${({ theme }) => theme.colors.cardText};
  padding-top: 120px;
`;

const FAQSection = styled.section`
  padding: ${({ theme }) => theme.spacing.section} 0;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sectionMobile} 0;
  }
`;

const Intro = styled.p`
  max-width: 700px;
  margin-bottom: 2rem;
  line-height: 1.8;
  opacity: 0.75;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const ControlBtn = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1.25rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.85rem;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

const Category = styled.div`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const AccordionCard = styled.div`
  background: #ffffff;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 12px rgba(26, 58, 53, 0.05);
  border: 1px solid rgba(26, 58, 53, 0.06);
`;

const AnswerContent = styled.div`
  p {
    margin-bottom: 0.75rem;
  }

  ul, ol {
    margin: 0.5rem 0 0.75rem 1.2rem;
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  li {
    margin-bottom: 0.4rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    font-size: 0.85rem;

    th, td {
      padding: 0.5rem 0.75rem;
      border: 1px solid rgba(26, 58, 53, 0.15);
      text-align: left;
    }

    th {
      background: rgba(26, 58, 53, 0.05);
      font-weight: 600;
    }
  }
`;

export default function FAQ() {
  const { language, t } = useLanguage();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const categories = faqCategories[language];
  const allKeys = categories.flatMap((cat) =>
    cat.items.map((item) => `${cat.title}-${item.question}`)
  );

  const expandAll = () => setOpenItems(new Set(allKeys));
  const collapseAll = () => setOpenItems(new Set());

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <PageTransition>
      <Helmet>
        <title>{t('meta.faq.title')}</title>
        <meta name="description" content={t('meta.faq.description')} />
      </Helmet>

      <PageWrapper>
        <FAQSection>
          <Container>
            <FadeIn>
              <SectionHeading>{t('faq.heading')}</SectionHeading>
              <Intro>{t('faq.intro')}</Intro>
              <Controls>
                <ControlBtn onClick={expandAll}>{t('faq.expandAll')}</ControlBtn>
                <ControlBtn onClick={collapseAll}>{t('faq.collapseAll')}</ControlBtn>
              </Controls>
            </FadeIn>

            {categories.map((category) => (
              <FadeIn key={category.title}>
                <Category>
                  <CategoryTitle>{category.title}</CategoryTitle>
                  {category.items.map((item) => {
                    const key = `${category.title}-${item.question}`;
                    return (
                      <AccordionCard key={key}>
                        <Accordion
                          title={item.question}
                          isOpen={openItems.has(key)}
                          onToggle={() => toggleItem(key)}
                        >
                          <AnswerContent dangerouslySetInnerHTML={{ __html: item.answer }} />
                        </Accordion>
                      </AccordionCard>
                    );
                  })}
                </Category>
              </FadeIn>
            ))}
          </Container>
        </FAQSection>

      </PageWrapper>

      <CTASection
        title={t('faq.cta.title')}
        subtitle={t('faq.cta.subtitle')}
        buttonText={t('faq.cta.button')}
        buttonLink="/#team"
        secondaryText={t('faq.cta.secondary')}
        secondaryHref="mailto:jhl@schwarzenbach-wm.com"
      />
    </PageTransition>
  );
}
