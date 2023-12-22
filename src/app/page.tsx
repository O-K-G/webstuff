'use client';

import Section from '@components/Section';
import ParallaxComponent from '@components/ParallaxComponent';
import { useRef } from 'react';
import NavMenu from '@components/NavMenu';

export default function Home() {
  const sectionsData = [
    { id: 0, label: 'Section 0', ref: useRef(null) },
    { id: 1, label: 'Section 1', ref: useRef(null), className: 'bg-green-500' },
    { id: 2, label: 'Section 2', ref: useRef(null) },
    {
      id: 3,
      label: 'Section 3',
      ref: useRef(null),
      el: <div className='bg-test-background2 background-images size-1/2' />,
      className: 'bg-yellow-500',
    },
    {
      id: 4,
      label: 'Section 4',
      ref: useRef(null),
      className:
        'flex items-center justify-center bg-test-background3 background-images',
    },
    { id: 5, label: 'Section 5', ref: useRef(null) },
  ];

  return (
    <>
      <main className='min-h-screen parallax'>
        <div className='w-full'>
          {sectionsData.map(({ id, el, className, ref }) => (
            <Section
              ref={ref}
              key={`test-${id}`}
              className={`text-red-500 ${className ?? ''}`}
            >
              {el}
            </Section>
          ))}
        </div>

        <ParallaxComponent
          className='h-[50rem] top-[600svh] bg-green-500 text-4xl'
          translateZClassName='-translate-z-1'
        >
          LAYER 2
        </ParallaxComponent>
        <ParallaxComponent
          className='h-[50rem] top-[600svh] bg-blue-500 text-4xl'
          translateZClassName='-translate-z-2'
        >
          LAYER 3
        </ParallaxComponent>
      </main>
      <NavMenu sectionsData={sectionsData} />
    </>
  );
}
