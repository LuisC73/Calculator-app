import { ButtonProps } from '@types';

export const buttonsConfig: Omit<ButtonProps, 'action'>[] = [
  { label: '7', type: 'primary' },
  { label: '8', type: 'primary' },
  { label: '9', type: 'primary' },
  { label: 'DEL', type: 'secondary' },
  { label: '4', type: 'primary' },
  { label: '5', type: 'primary' },
  { label: '6', type: 'primary' },
  { label: '+', type: 'primary' },
  { label: '1', type: 'primary' },
  { label: '2', type: 'primary' },
  { label: '3', type: 'primary' },
  { label: '-', type: 'primary' },
  { label: '.', type: 'primary' },
  { label: '0', type: 'primary' },
  { label: '/', type: 'primary' },
  { label: 'x', type: 'primary' },
];


export const switchConfig = [
  { id: 'theme-primary', label: '1' },
  { id: 'theme-secondary', label: '2' },
  { id: 'theme-tertiary', label: '3' },
];
