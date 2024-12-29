import { Display, KeyPad, Switch, SwitchItem } from '@components';
import { switchConfig } from '@config';
import { useCalculator, useTheme } from '@hooks';
import { clsx } from 'clsx';

export const CalculatorApp = () => {
  const { displayValue, onClick, onSwith, onEqual, onReset } = useCalculator();
  const { theme } = useTheme();

  const containerClass = clsx(
    'min-h-screen w-full flex flex-col justify-center items-center font-spartan p-6 transition',
    {
      'bg-theme-primary-main-background': theme === 'theme-primary',
      'bg-theme-secondary-main-background': theme === 'theme-secondary',
      'bg-theme-tertiary-main-background': theme === 'theme-tertiary',
    }
  );

  const titleClass = clsx('font-bold text-4xl md:text-3xl transition', {
    'text-white': theme === 'theme-primary',
    'text-theme-secondary-text': theme === 'theme-secondary',
    'text-theme-tertiary-text-yellow': theme === 'theme-tertiary',
  });

  return (
    <div className={containerClass}>
      <div className="flex flex-col gap-6 max-w-[500px] w-full">
        <div className="flex justify-between items-center">
          <h1 className={titleClass}>calc</h1>
          <Switch title="Theme">
            {switchConfig.map((item, index) => (
              <SwitchItem
                key={index}
                id={item.id}
                label={item.label}
                active={theme === item.id}
                action={() => onSwith(item.id)}
              />
            ))}
          </Switch>
        </div>
        <Display value={displayValue} />
        <KeyPad
          actionButton={onClick}
          actionReset={onReset}
          actionEqual={onEqual}
        />
      </div>
    </div>
  );
};
