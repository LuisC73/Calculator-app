import { ButtonProps } from '@types';
import { buttonStyles } from '@config';
import { clsx } from 'clsx';
import { useTheme } from '@hooks';

export const Button = ({ id, label, type, action }: ButtonProps) => {
  const { theme } = useTheme();

  const buttonClass = clsx(
    'w-full py-2 px-2 md:px-4 rounded-lg font-spartan font-bold transition overflow-hidden',
    buttonStyles?.[theme]?.[type]
  );

  return (
    <button
      id={id}
      className={buttonClass}
      onClick={action}
    >
      {label}
    </button>
  );
};
