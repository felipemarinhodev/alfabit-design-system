import { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "./Input";

const meta: Meta<InputProps> = {
  title: 'Design System/Molecules/Input',
  component: Input,
  argTypes: {}
}

export default meta;

export const Primary: StoryObj<InputProps> = {
  args: {
    value: 'Input'
  }
}
export const PrimaryLabel: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    label: 'Label'
  }
}

export const InputDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Input',
    disabled: true
  }
}

export const Multiline: StoryObj<InputProps> = {
  args: {
    value: 'Multiline',
    multiline: true
  }
}

export const MultilineLabel: StoryObj<InputProps> = {
  args: {
    value: 'Multiline',
    multiline: true,
    label: 'Label'
  }
}

export const MultilineDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Multiline',
    multiline: true,
    disabled: true,
  }
}
