import { type RefObject, type ReactNode } from 'react';

export interface SectionTypes {
  children?: ReactNode;
  className?: string;
}

export interface ParallaxComponentTypes {
  children?: ReactNode;
  className?: string;
  translateZClassName: string;
}

export interface NavMenuTypes {
  sectionsData: Array<{
    id: number;
    label?: string | number;
    ref?: RefObject<HTMLElement> | undefined;
  }>;
}
