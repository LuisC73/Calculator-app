import { KeyPadProps } from '@types';
import { useTheme } from '@hooks';
import { Button } from '@components';
import { buttonsConfig } from '@config';
import { clsx } from 'clsx';

export const KeyPad = ({ actionButton, actionReset, actionEqual }: KeyPadProps) => {
  const { theme } = useTheme();

  const containerClass = clsx('flex flex-col gap-6 p-6 rounded-lg', {
    'bg-theme-primary-toggle-background': theme === 'theme-primary',
    'bg-theme-secondary-toggle-background': theme === 'theme-secondary',
    'bg-theme-tertiary-toggle-background': theme === 'theme-tertiary',
  });

  return (
    <div className={containerClass}>
      <div className="grid grid-cols-4 gap-6">
        {buttonsConfig.map((button) => (
          <Button
            key={button.id}
            id={button.id}
            label={button.label}
            type={button.type}
            action={() => actionButton(button.id, button.label)}
          />
        ))}
      </div>
      <div className="flex gap-4">
        <Button
          id="reset"
          label="RESET"
          type="secondary"
          action={actionReset}
        />
        <Button
          id="result"
          label="="
          type="danger"
          action={actionEqual}
        />
      </div>
    </div>
  );
};
