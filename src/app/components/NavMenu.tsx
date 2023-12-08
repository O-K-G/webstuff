import { type NavMenuTypes } from '@interfaces/types';
import { useEffect, useState } from 'react';

export default function NavMenu({ sectionsData }: NavMenuTypes) {
  const [open, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOnBlur = (e: Event) => {
      if ((e?.target as HTMLElement)?.id !== 'navButton') {
        setIsOpen(false);
      }
    };

    if (window) {
      window.addEventListener('click', handleOnBlur);
    }

    return () => window?.removeEventListener('click', handleOnBlur);
  }, []);

  return (
    <nav className='fixed top-0 left-0 h-[1.75rem] hover:h-auto'>
      <button
        id='navButton'
        onClick={() => setIsOpen(true)}
        type='button'
        className='transition-all ease-in-out duration-500 hover:rotate-180 absolute top-0 left-0 h-7 w-7 flex items-center justify-center bg-red-500'
      >
        x
      </button>
      <ul
        className={`absolute fill-mode-forwards -top-[75svh] left-0 text-red-500 flex-col items-start justify-start w-fit min-w-[6%] overflow-hidden ${
          !open ? 'animate-menu-out' : 'animate-menu-in'
        }`}
      >
        {sectionsData.map(({ id, label, ref }) => {
          return (
            <li
              key={`menu-${id}`}
              className='bg-white whitespace-nowrap w-full h-full flex items-center justify-center border border-red-500'
            >
              <button
                onClick={() =>
                  ref?.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start',
                  })
                }
                type='button'
                className='flex items-center justify-start w-full h-full'
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
