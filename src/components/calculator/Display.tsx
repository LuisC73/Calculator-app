interface DisplayProps {
  value: string;
}

export const Display = ({ value }: DisplayProps) => {
  return (
    <div className="bg-theme-primary-screen-background py-8 px-6 rounded-lg flex justify-end items-center">
      <span className="text-theme-primary-white font-bold text-6xl">{value}</span>
    </div>
  );
};
