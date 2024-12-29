import { useEffect, useState } from 'react';
import { useTheme } from './useTheme';
import { evaluate } from 'mathjs';

const initTheme = () => {
  return localStorage.getItem('theme') || 'theme-primary';
};

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { setTheme } = useTheme();
  const initialTheme = initTheme();

  if (initialTheme) setTheme(initialTheme);

  useEffect(() => {
    if (!error) return;

    const timerError = setTimeout(() => {
      setError('');
      setDisplayValue('');
    }, 2000);

    return () => {
      clearTimeout(timerError);
    };
  }, [error]);

  const onClick = (id: string, value: string) => {
    if (id === 'delete' && value.length === 1) return;

    if (id === 'delete') {
      setDisplayValue((prev: string) => prev.slice(0, -1));
      return;
    }

    setDisplayValue((prev: string) => prev + value);
  };

  const onSwitch = (value: string) => {
    setTheme(value);
    localStorage.setItem('theme', value);
  };

  const onReset = () => {
    setDisplayValue('');
  };

  const onEqual = () => {
    try {
      const processedInput = displayValue.replace(/x/g, '*');
      const evalResult = evaluate(processedInput);
      setDisplayValue(evalResult.toString());
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return {
    displayValue,
    error,
    onClick,
    onSwitch,
    onReset,
    onEqual,
  };
};
