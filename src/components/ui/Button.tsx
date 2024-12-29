import { ButtonProps } from '@types';
import { buttonStyles } from '@config';
import { clsx } from 'clsx';
import { useTheme } from '@hooks';

export const Button = ({ label, type, action }: ButtonProps) => {
  const { theme } = useTheme();

  const buttonClass = clsx(
    'w-full py-2 px-4 rounded-lg font-spartan font-bold transition',
    buttonStyles?.[theme]?.[type]
  );

  return (
    <button
      className={buttonClass}
      onClick={action}
    >
      {label}
    </button>
  );
};
