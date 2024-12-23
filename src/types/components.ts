export interface ButtonProps {
  label: string;
  type: 'primary' | 'secondary' | 'danger';
  action: () => void;
}