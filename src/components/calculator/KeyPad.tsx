import { buttonsConfig } from '../../content';
import { Button } from '../ui';
import { KeyPadProps } from '@types';

export const KeyPad = ({ actionButton, actionReset, actionEqual }: KeyPadProps) => {
  return (
    <div className="flex flex-col gap-6 bg-theme-primary-toggle-background p-6 rounded-lg">
      <div className="grid grid-cols-4 gap-6">
        {buttonsConfig.map((button, index) => (
          <Button
            key={index}
            label={button.label}
            type={button.type}
            action={() => actionButton(button.label)}
          />
        ))}
      </div>
      <div className="flex gap-4">
        <Button
          label="RESET"
          type="secondary"
          action={actionReset}
        />
        <Button
          label="="
          type="danger"
          action={actionEqual}
        />
      </div>
    </div>
  );
};
