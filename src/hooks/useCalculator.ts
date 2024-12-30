import { useEffect, useState } from 'react';
import { evaluate } from 'mathjs';

export const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isResultDisplayed, setIsResultDisplayed] = useState<boolean>(false);
  const operators = ['+', '-', 'x', '/', '.'];

  useEffect(() => {
    if (!error) return;

    const timerError = setTimeout(() => {
      setError(null);
      setDisplayValue('');
    }, 2500);

    return () => {
      clearTimeout(timerError);
    };
  }, [error]);

  const handleButtonClick = (id: string, value: string) => {
    if (isResultDisplayed) {
      setDisplayValue(value);
      setIsResultDisplayed(false);
      return;
    }

    if (id === 'delete' && displayValue.length === 1) return;

    if (id === 'delete') {
      setDisplayValue((prev: string) => prev.slice(0, -1));
      return;
    }

    const lastChar = displayValue.slice(-1);

    if (operators.includes(value) && operators.includes(lastChar)) return;

    setDisplayValue((prev: string) => prev + value);
  };

  const clearDisplay = () => setDisplayValue('');

  const calculateResult = () => {
    const lastChar = displayValue.slice(-1);
    if (operators.includes(lastChar)) return;

    try {
      const processedInput = displayValue.replace(/x/g, '*');
      const evalResult = evaluate(processedInput);
      setDisplayValue(evalResult.toString());
      setIsResultDisplayed(true);
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
    handleButtonClick,
    clearDisplay,
    calculateResult,
  };
};
