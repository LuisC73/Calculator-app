import { ButtonProps } from '@types';

export const buttonsConfig: Omit<ButtonProps, 'action'>[] = [
  { id: 'number-7', label: '7', type: 'primary' },
  { id: 'number-8', label: '8', type: 'primary' },
  { id: 'number-9', label: '9', type: 'primary' },
  { id: 'delete', label: 'DEL', type: 'secondary' },
  { id: 'number-4', label: '4', type: 'primary' },
  { id: 'number-5', label: '5', type: 'primary' },
  { id: 'number-6', label: '6', type: 'primary' },
  { id: 'math-sum', label: '+', type: 'primary' },
  { id: 'number-1', label: '1', type: 'primary' },
  { id: 'number-2', label: '2', type: 'primary' },
  { id: 'number-3', label: '3', type: 'primary' },
  { id: 'math-subtract', label: '-', type: 'primary' },
  { id: 'point', label: '.', type: 'primary' },
  { id: 'number-0', label: '0', type: 'primary' },
  { id: 'math-division', label: '/', type: 'primary' },
  { id: 'math-multiplication', label: 'x', type: 'primary' },
];

export const switchConfig = [
  { id: 'theme-primary', label: '1' },
  { id: 'theme-secondary', label: '2' },
  { id: 'theme-tertiary', label: '3' },
];
