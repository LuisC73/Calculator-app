export const getFontSizeClass = (length: number) => {
  if (length >= 27) return 'text-2xl';
  if (length >= 23) return 'text-3xl';
  if (length >= 17) return 'text-4xl';
  if (length >= 13) return 'text-5xl';

  return 'text-6xl';
};