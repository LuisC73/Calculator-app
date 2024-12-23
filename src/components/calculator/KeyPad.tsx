import { buttonsConfig } from "../../data/buttonsConfig";
import { Button } from "../ui";

export const KeyPad = () => {
  return (
    <div className="flex flex-col gap-6 bg-theme-primary-toggle-background p-6 rounded-lg">
      <div className="grid grid-cols-4 gap-6">
        {buttonsConfig.map((button, index) => (
          <Button
            key={index}
            label={button.label}
            type={button.type}
            action={button.action}
          />
        ))}
      </div>
      <div className="flex gap-4">
        <Button label="RESET" type="secondary" action={() => {}} />
        <Button label="=" type="danger" action={() => {}} />
      </div>
    </div>
  );
};
