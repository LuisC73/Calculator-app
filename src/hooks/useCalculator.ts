import { useState } from 'react';
import { useTheme } from './useTheme';
import { evaluate } from 'mathjs';

const initTheme = () => {
  return localStorage.getItem('theme') || 'theme-primary';
};

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState<string>('');
  const { setTheme } = useTheme();
  const initialTheme = initTheme();

  if (initialTheme) setTheme(initialTheme);

  const onClick = (id: string, value: string) => {
    if (id === 'delete' && value.length === 1) return;

    if (id === 'delete') {
      setDisplayValue((prev: string) => prev.slice(0, -1));
      return;
    }

    setDisplayValue((prev: string) => prev + value);
  };

  const onSwith = (value: string) => {
    setTheme(value);
    localStorage.setItem('theme', value);
  };

  const onReset = () => {
    setDisplayValue('');
  };

  const onEqual = () => {
    const processedInput = displayValue.replace(/x/g, '*');
    const evalResult = evaluate(processedInput);
    setDisplayValue(evalResult.toString());
  };

  return {
    displayValue,
    onClick,
    onSwith,
    onReset,
    onEqual,
  };
};
