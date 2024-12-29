import { SwitchProps } from '@types';
import { useTheme } from '@hooks';
import { clsx } from 'clsx';

export const Switch = ({ title, children }: SwitchProps) => {
  const { theme } = useTheme();

  const textClass = clsx('uppercase text-sm font-bold font-spartan', {
    'text-theme-primary-white': theme === 'theme-primary',
    'text-theme-secondary-text': theme === 'theme-secondary',
    'text-theme-tertiary-text-yellow': theme === 'theme-tertiary',
  });

  const switchContainerClass = clsx('flex rounded-full p-1.5', {
    'bg-theme-primary-toggle-background': theme === 'theme-primary',
    'bg-theme-secondary-toggle-background': theme === 'theme-secondary',
    'bg-theme-tertiary-toggle-background': theme === 'theme-tertiary',
  });

  return (
    <div className="flex items-center gap-6">
      <span className={textClass}>{title}</span>
      <div className={switchContainerClass}>{children}</div>
    </div>
  );
};
