import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionWrapper = styled.div``;

const Trigger = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.cardText};
  text-align: left;
  gap: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const Icon = styled.span<{ $open: boolean }>`
  font-size: 1.4rem;
  font-weight: 300;
  transition: transform ${({ theme }) => theme.transitions.default};
  transform: rotate(${({ $open }) => ($open ? '45deg' : '0')});
  flex-shrink: 0;
`;

const Content = styled(motion.div)`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.cardText};
  font-size: 0.95rem;
  line-height: 1.7;

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

const ContentInner = styled.div`
  padding-bottom: 1.25rem;
`;

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function Accordion({ title, children, defaultOpen = false, isOpen, onToggle }: AccordionProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = isOpen !== undefined ? isOpen : internalOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  return (
    <AccordionWrapper>
      <Trigger onClick={handleToggle}>
        <span>{title}</span>
        <Icon $open={open}>+</Icon>
      </Trigger>
      <AnimatePresence initial={false}>
        {open && (
          <Content
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ContentInner>{children}</ContentInner>
          </Content>
        )}
      </AnimatePresence>
    </AccordionWrapper>
  );
}
