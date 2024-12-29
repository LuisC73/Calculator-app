import { useContext, useEffect } from 'react';
import { ThemeContext } from '@context';

const getStoredTheme = () => {
  return localStorage.getItem('theme') || 'theme-primary';
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  const storedTheme = getStoredTheme();

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const { theme, setTheme } = context;

  useEffect(() => {
    if (storedTheme) setTheme(storedTheme);
  }, [storedTheme, setTheme]);

  const changeTheme = (value: string) => {
    context.setTheme(value);
    localStorage.setItem('theme', value);
  };

  return {
    theme,
    changeTheme,
  };
};
