import { Display, KeyPad, Switch } from "./components"

export const CalculatorApp = () => {
  return (
    <div className="bg-theme-primary-main-background min-h-screen w-full flex flex-col justify-center items-center font-spartan">
      <div className="flex flex-col gap-6 max-w-[500px] w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-theme-primary-white font-bold text-3xl">calc</h1>
          <Switch />
        </div>
        <Display value="339, 99" />
        <KeyPad />
      </div>
    </div>
  );
};
