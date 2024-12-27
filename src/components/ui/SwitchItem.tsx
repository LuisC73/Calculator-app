import { SwitchItemProps } from '@types';
import { clsx } from 'clsx';

export const SwitchItem = ({ id, label, active, action }: SwitchItemProps) => {
  const circleClass = clsx('w-4 h-4 rounded-full cursor-pointer transition p-1', {
    'bg-theme-primary-red-key-background hover:bg-theme-primary-red-key-hover': active,
    'bg-theme-primary-toggle-background': !active,
  });

  return (
    <label htmlFor={id} className="relative flex flex-col items-center cursor-pointer">
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
