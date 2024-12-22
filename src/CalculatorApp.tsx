import { Button } from "./components"

export const CalculatorApp = () => {
  return (
    <div className="bg-theme-primary-main-background min-h-screen w-full flex flex-col justify-center items-center font-spartan">
      <div className="flex flex-col gap-6 max-w-[480px] w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-theme-primary-white font-bold text-2xl">Calc</h1>
          <div>
            <span className="text-theme-primary-white uppercase text-sm">Theme</span>
            <button></button>
          </div>
        </div>
        <div className="bg-theme-primary-screen-background py-8 px-6 rounded-lg flex justify-end items-center">
          <span className="text-theme-primary-white font-bold text-5xl">399, 981</span>
        </div>
        <div className="flex flex-col gap-4 bg-theme-primary-toggle-background p-6 rounded-lg">
          <div className="flex justify-between items-center gap-4">
            <Button label="7" type="primary" action={() => {}} />
            <Button label="8" type="primary" action={() => {}} />
            <Button label="9" type="primary" action={() => {}} />
            <Button label="DEL" type="secondary" action={() => {}} />
          </div>
          <div className="flex justify-between items-center gap-4">
            <Button label="4" type="primary" action={() => {}} />
            <Button label="5" type="primary" action={() => {}} />
            <Button label="6" type="primary" action={() => {}} />
            <Button label="+" type="primary" action={() => {}} />
          </div>
          <div className="flex justify-between items-center gap-4">
            <Button label="1" type="primary" action={() => {}} />
            <Button label="2" type="primary" action={() => {}} />
            <Button label="3" type="primary" action={() => {}} />
            <Button label="-" type="primary" action={() => {}} />
          </div>
          <div className="flex justify-between items-center gap-4">
            <Button label="." type="primary" action={() => {}} />
            <Button label="0" type="primary" action={() => {}} />
            <Button label="/" type="primary" action={() => {}} />
            <Button label="x" type="primary" action={() => {}} />
          </div>
          <div className="flex justify-between items-center gap-4">
            <Button label="RESET" type="primary" action={() => {}} />
            <Button label="=" type="primary" action={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};
