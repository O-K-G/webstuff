import { type SectionTypes } from '@interfaces/types';
import { type LegacyRef, forwardRef } from 'react';

const Section = forwardRef(function Section(
  { children, className }: SectionTypes,
  ref: LegacyRef<HTMLElement> | undefined
) {
  return (
    <section ref={ref} className={`w-full h-svh ${className ?? ''}`}>
      {children}
    </section>
  );
});

export default Section;
