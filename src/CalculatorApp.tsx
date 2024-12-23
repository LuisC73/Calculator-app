import { useState } from 'react';
import { Display, KeyPad, Switch, SwitchItem } from './components';
import { switchConfig } from './content';

export const CalculatorApp = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [theme, setTheme] = useState('theme-01');

  const onClick = (value: string) => {
    setDisplayValue((prev: string) => prev + value);
  };

  const onSwith = (value: string) => {
    setTheme(value);
  };

  const onReset = () => {
    setDisplayValue('0');
  };

  const onEqual = () => {
    console.log('value', displayValue);
  };

  return (
    <div className="bg-theme-primary-main-background min-h-screen w-full flex flex-col justify-center items-center font-spartan">
      <div className="flex flex-col gap-6 max-w-[500px] w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-theme-primary-white font-bold text-3xl">calc</h1>
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
