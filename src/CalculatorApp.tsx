import { Display, KeyPad, Switch, SwitchItem } from './components';

export const CalculatorApp = () => {
  return (
    <div className="bg-theme-primary-main-background min-h-screen w-full flex flex-col justify-center items-center font-spartan">
      <div className="flex flex-col gap-6 max-w-[500px] w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-theme-primary-white font-bold text-3xl">calc</h1>
          <Switch title="Theme">
            <SwitchItem id="theme-01" label="1" active={true} action={() => {}} />
            <SwitchItem id="theme-02" label="2" active={false} action={() => {}} />
            <SwitchItem id="theme-03" label="3" active={false} action={() => {}} />
          </Switch>
        </div>
        <Display value="339, 99" />
        <KeyPad />
      </div>
    </div>
  );
};
