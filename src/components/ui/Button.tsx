import { buttonStyles } from '../../content';
import { ButtonProps } from '@types';
import clsx from 'clsx';

export const Button = ({ label, type, action }: ButtonProps) => {
  const buttonClass = clsx(
    'w-full py-2 px-4 rounded-lg font-spartan font-bold transition',
    buttonStyles[type]
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
