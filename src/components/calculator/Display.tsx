import { DisplayProps } from '@types';
import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

const getFontSizeClass = (length: number) => {
  if (length >= 27) return 'text-2xl';
  if (length >= 23) return 'text-3xl';
  if (length >= 17) return 'text-4xl';
  if (length >= 13) return 'text-5xl';

  return 'text-6xl';
};

export const Display = ({ value }: DisplayProps) => {
  const [fontSizeClass, setFontSizeClass] = useState(getFontSizeClass(value.length));

  useEffect(() => {
    setFontSizeClass(getFontSizeClass(value.length));
  }, [value.length]);

  return (
    <div className="bg-theme-primary-screen-background h-[125px] py-8 px-6 rounded-lg flex justify-end items-center overflow-hidden">
      <span className={clsx('text-theme-primary-white font-bold truncate', fontSizeClass)}>
        {value || '0'}
      </span>
    </div>
  );
};
