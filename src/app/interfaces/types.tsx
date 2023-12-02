import { type ReactNode } from 'react';

export interface SectionTypes {
  children?: ReactNode;
  className?: string;
}

export interface ParallaxComponentTypes {
  children?: ReactNode;
  className?: string;
  translateZClassName: string;
}
