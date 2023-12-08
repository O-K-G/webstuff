import { type IconButtonTypes } from '@interfaces/types';

export default function IconButton({
  id,
  onClick,
  type,
  className,
  icon,
}: IconButtonTypes) {
  return (
    <button
      id={id}
      onClick={onClick}
      type={type ?? 'button'}
      className={`flex items-center justify-center ${className ?? ''}`}
    >
      {icon}
    </button>
  );
}
