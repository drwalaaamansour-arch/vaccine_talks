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
  titleAlign?: 'left' | 'center' | 'right';
  dir?: 'rtl' | 'ltr';
  lang?: string;
  children: ReactNode;
};

export type HcpGuideBilingualOptions = {
  arTitle?: string;
  arLead?: string;
  arToc?: HcpGuideTocItem[];
  arabicChildren?: ReactNode;
};

export type HcpGuideHubGroup = {
  title: string;
  items: HcpGuideNavLink[];
};
