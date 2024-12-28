import { SwitchItemProps } from '@types';
import { useTheme } from '@hooks';
import { clsx } from 'clsx';

export const SwitchItem = ({ id, label, active, action }: SwitchItemProps) => {
  const { theme } = useTheme();

  const circleClass = clsx('w-4 h-4 rounded-full cursor-pointer  p-1', {
    'bg-theme-primary-red-key-background hover:bg-theme-primary-red-key-hover':
      theme === 'theme-primary' && active,
    'bg-theme-primary-toggle-background': theme === 'theme-primary' && !active,
    'bg-theme-secondary-orange-key-background hover:bg-theme-primary-red-key-hover':
      theme === 'theme-secondary' && active,
    'bg-theme-secondary-toggle-background': theme === 'theme-secondary' && !active,
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
      <span className="absolute -top-7 left-1/2 font-spartan text-theme-primary-white -translate-x-1/2 text-sm">
        {label}
      </span>
    </label>
  );
};
