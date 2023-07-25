import {
  Switch as HeadlessSwitch,
  type SwitchProps as HeadlessSwitchProps
} from '@headlessui/react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export type SwitchProps = {
  defaultEnable?: boolean;
  variant?: 'common' | 'contract';
  disabled?: boolean;
  onChange?: (enabled: boolean) => void;
} & HeadlessSwitchProps<any>;

const Switch = ({
  defaultEnable: enabledByDefault,
  variant = "common",
  disabled,
  onChange,
  ...rest
}: SwitchProps) => {
  const [enabled, setEnabled] = useState(enabledByDefault);
  const toggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    onChange?.(newState);
  }

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={toggle}
      disabled={disabled}
      {...rest}
    >
      <span>switch toggle</span>
      {variant === 'common' && <span />}
      {variant === 'contract' &&
        <span>
          {enabled && (<CheckIcon aria-disabled={disabled} />)}
          {enabled || (<XMarkIcon aria-disabled={disabled} />)}
        </span>
      }
    </HeadlessSwitch>
  )
}

export default Switch;