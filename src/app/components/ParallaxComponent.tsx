import { type ParallaxComponentTypes } from '@interfaces/types';

export default function ParallaxComponent({
  children,
  className,
  translateZClassName,
}: ParallaxComponentTypes) {
  if (translateZClassName) {
    return (
      <div
        className={`parallax-layer ${translateZClassName} ${className ?? ''}`}
      >
        {children}
      </div>
    );
  }
}
