import { SwitchProps } from '@types';

export const Switch = ({ title, children }: SwitchProps) => {
  return (
    <div className="flex items-center gap-6">
      <span className="text-theme-primary-white uppercase text-sm font-bold font-spartan">
        {title}
      </span>
      <div className="flex bg-theme-primary-toggle-background rounded-full p-1.5">{children}</div>
    </div>
  );
};
