import { useEffect, useState } from 'react';
import { DisplayProps } from '@types';
import { useTheme } from '@hooks';
import { getFontSizeClass } from '@helpers';
import { clsx } from 'clsx';

export const Display = ({ value }: DisplayProps) => {
  const { theme } = useTheme();
  const [fontSizeClass, setFontSizeClass] = useState(getFontSizeClass(value.length));

  const displayClass = clsx(
    'h-[95px] sm:h-[125px] p-6 md:py-8 px-6 rounded-lg flex justify-end items-center overflow-hidden transition',
    {
      'bg-theme-primary-screen-background': theme === 'theme-primary',
      'bg-theme-secondary-screen-background': theme === 'theme-secondary',
      'bg-theme-tertiary-screen-background': theme === 'theme-tertiary',
    }
  );

  const textClass = clsx('font-bold truncate transition', fontSizeClass, {
    'text-white': theme === 'theme-primary',
    'text-theme-secondary-text': theme === 'theme-secondary',
    'text-theme-tertiary-text-yellow': theme === 'theme-tertiary',
  });

  useEffect(() => {
    setFontSizeClass(getFontSizeClass(value.length));
  }, [value.length]);

  return (
    <div className={displayClass}>
      <span className={textClass}>{value || '0'}</span>
    </div>
  );
};
