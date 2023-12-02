import Section from '@components/Section';
import ParallaxComponent from './components/ParallaxComponent';

export default function Home() {
  return (
    <main className='min-h-screen parallax'>
      <div className='w-full'>
        {[
          { id: 0, test: 'Test section 1' },
          { id: 1, test: 'Test section 2', className: 'bg-green-500' },
          { id: 2, test: 'Test section 3' },
          {
            id: 3,
            el: <div className='test w-1/2 h-1/2' />,
            className: 'bg-yellow-500',
          },
          {
            id: 4,
            className: 'flex items-center justify-center test-2',
          },
          { id: 5, test: 'Test section 6' },
        ].map(({ id, test, el, className }) => (
          <Section
            key={`test-${id}`}
            className={`text-red-500 ${className ?? ''}`}
          >
            {test ?? el}
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
  );
}
