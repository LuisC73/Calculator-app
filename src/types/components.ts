export interface ButtonProps {
  label: string;
  type: 'primary' | 'secondary' | 'danger';
  action: () => void;
}

export interface DisplayProps {
  value: string;
}

export interface SwitchProps {
  title: string;
  children: React.ReactNode;
}

export interface SwitchItemProps {
  id: string;
  label: string;
  active: boolean;
  action: () => void;
}

export interface KeyPadProps {
  actionButton: (value: string) => void;
  actionReset: () => void;
  actionEqual: () => void;
}
