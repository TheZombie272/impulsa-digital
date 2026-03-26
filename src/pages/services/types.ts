import type { ReactNode } from 'react';

export type PriceOption = {
  description: string;
  price: string;
};

export type DetailedService = {
  category: string;
  options: PriceOption[];
  includes: string | null;
  icon: ReactNode;
  gradient: string;
  borderGradient: string;
  badgeGradient: string;
};

export type WebService = {
  name: string;
  price: string;
  priceNote: string;
  maintenance?: string;
  includes: string[];
  notIncludes: string[];
  idealFor: string;
  badgeGradient: string;
};

export type MarketingService = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  price: string;
  category: string;
};

export type DetailedSection = {
  id: string;
  title: string;
  headingClassName: string;
  icon: ReactNode;
  items: DetailedService[];
  baseDelay: number;
};
