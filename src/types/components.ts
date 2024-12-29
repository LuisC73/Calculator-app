export interface ButtonProps {
  id: string;
  label: string;
  type: 'primary' | 'secondary' | 'danger';
  action: () => void;
}

export interface DisplayProps {
  value: string;
  error: string;
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
  actionButton: (id: string, value: string) => void;
  actionReset: () => void;
  actionEqual: () => void;
}
