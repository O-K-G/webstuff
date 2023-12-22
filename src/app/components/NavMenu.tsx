import { type NavMenuTypes } from '@interfaces/types';
import { useEffect, useState } from 'react';
import HamburgerIcon from '@icons/hamburger-icon';
import IconButton from '@components/IconButton';

export default function NavMenu({ sectionsData }: NavMenuTypes) {
  const [open, setIsOpen] = useState(false);
  const animationClassName = !open ? 'animate-menu-out' : 'animate-menu-in';

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
      <IconButton
        id='navButton'
        onClick={() => setIsOpen(true)}
        className='transition-all ease-in-out duration-500 hover:rotate-180 absolute top-0 left-0 size-8'
        icon={<HamburgerIcon className='icon fill-red-500' />}
      />
      <ul
        className={`absolute fill-mode-forwards -top-[75svh] left-0 text-red-500 flex-col items-start justify-start w-fit min-w-[6%] overflow-hidden ${animationClassName}`}
      >
        {sectionsData.map(({ id, label, ref }) => {
          return (
            <li
              key={`menu-${id}`}
              className='bg-white whitespace-nowrap size-full flex items-center justify-center border border-red-500'
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
                className='flex items-center justify-start size-full'
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
