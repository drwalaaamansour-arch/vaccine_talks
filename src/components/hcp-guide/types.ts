import type { ReactNode } from 'react';
import type { ARTICLE_META } from '@/lib/article-meta';

export type HcpGuideMetaKey = keyof typeof ARTICLE_META;

export type HcpGuideTocItem = {
  id: string;
  label: string;
};

export type HcpGuideNavLink = {
  href: string;
  label: string;
  emoji?: string;
};

export type HcpGuideReference = {
  citation: string;
  href: string;
};

export type HcpGuideSectionProps = {
  id: string;
  title: string;
  icon?: string;
  variant?: 'default' | 'takeaway';
  children: ReactNode;
};

export type HcpGuideHubGroup = {
  title: string;
  items: HcpGuideNavLink[];
};
