import { SwitchItemProps } from '@types';
import { useTheme } from '@hooks';
import { clsx } from 'clsx';

export const SwitchItem = ({ id, label, active, action }: SwitchItemProps) => {
  const { theme } = useTheme();

  const circleClass = clsx('w-4 h-4 rounded-full cursor-pointer p-1 transition', {
    'bg-theme-primary-red-key-background hover:bg-theme-primary-red-key-hover':
      theme === 'theme-primary' && active,
    'bg-theme-primary-toggle-background': theme === 'theme-primary' && !active,
    'bg-theme-secondary-orange-key-background hover:bg-theme-primary-red-key-hover':
      theme === 'theme-secondary' && active,
    'bg-theme-secondary-toggle-background': theme === 'theme-secondary' && !active,
    'bg-theme-tertiary-cyan-key-background hover:bg-theme-primary-red-key-hover':
      theme === 'theme-tertiary' && active,
    'bg-theme-tertiary-toggle-background': theme === 'theme-tertiary' && !active,
  });

  const textClass = clsx('absolute -top-7 left-1/2 font-spartan -translate-x-1/2 text-sm transition', {
    'text-white': theme === 'theme-primary',
    'text-theme-secondary-text': theme === 'theme-secondary',
    'text-theme-tertiary-text-yellow': theme === 'theme-tertiary',
  });

  return (
    <label
      htmlFor={id}
      className="relative flex flex-col items-center cursor-pointer"
    >
      <input
        type="radio"
        name={id}
        id={id}
        checked={active}
        onChange={action}
        className="hidden"
      />
      <div className={circleClass}></div>
      <span className={textClass}>{label}</span>
    </label>
  );
};
