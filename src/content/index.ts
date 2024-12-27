import { ButtonProps } from '../types';

export const buttonsConfig: ButtonProps[] = [
  { label: '7', type: 'primary', action: () => {} },
  { label: '8', type: 'primary', action: () => {} },
  { label: '9', type: 'primary', action: () => {} },
  { label: 'DEL', type: 'secondary', action: () => {} },
  { label: '4', type: 'primary', action: () => {} },
  { label: '5', type: 'primary', action: () => {} },
  { label: '6', type: 'primary', action: () => {} },
  { label: '+', type: 'primary', action: () => {} },
  { label: '1', type: 'primary', action: () => {} },
  { label: '2', type: 'primary', action: () => {} },
  { label: '3', type: 'primary', action: () => {} },
  { label: '-', type: 'primary', action: () => {} },
  { label: '.', type: 'primary', action: () => {} },
  { label: '0', type: 'primary', action: () => {} },
  { label: '/', type: 'primary', action: () => {} },
  { label: 'x', type: 'primary', action: () => {} },
];

export const buttonStyles = {
  primary:
    'text-4xl bg-theme-primary-orange-key-background text-theme-primary-text shadow-theme-primary-orange-key hover:bg-theme-primary-white',
  secondary:
    'text-3xl bg-theme-primary-key-background text-theme-primary-white shadow-theme-primary-key hover:bg-theme-primary-key-hover',
  danger:
    'text-4xl bg-theme-primary-red-key-background text-theme-primary-white shadow-theme-primary-red-key hover:bg-theme-primary-red-key-hover',
};

export const switchConfig = [
  { id: 'theme-01', label: '1' },
  { id: 'theme-02', label: '2' },
  { id: 'theme-03', label: '3' },
];
