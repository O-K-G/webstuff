import { type SectionTypes } from '@interfaces/types';

export default function Section({ children, className }: SectionTypes) {
  return (
    <section className={`w-full h-full-svh ${className ?? ''}`}>
      {children}
    </section>
  );
}
