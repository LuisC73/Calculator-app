interface ButtonProps {
  label: string;
  type: 'primary' | 'secondary' | 'danger';
  action: () => void;
}

export const Button = ({ label, type, action }: ButtonProps) => {
  return (
    <button
      className="bg-theme-primary-orange-key-background w-full p-4 rounded-lg text-theme-primary-text font-spartan font-bold text-2xl"
      onClick={action}
    >
      {label}
    </button>
  );
};
