import { Meta, StoryObj } from "@storybook/react";
import Box, { BoxProps } from "./Box";

const meta: Meta<BoxProps> = {
  title: "Atoms/Box",
  component: Box,
  argTypes: {
    className: { type: "string" },
    children: { type: "string" },
    type: { type: "string" },
    rounded: { type: "boolean" },
    border: { type: "boolean" },
    filledBackground: { type: "boolean" },
  }
}

export default meta;

export const Primary: StoryObj<BoxProps> = {
  args: { }
}

export const TypePrimary: StoryObj<BoxProps> = {
  args: {
    children: "Primary",
    type: 'primary',
    border: true,
    rounded: true,
    filledBackground: true,
  }
}
export const TypeSecondary: StoryObj<BoxProps> = {
  args: {
    children: "Secondary",
    type: 'secondary',
    border: true,
    rounded: true,
    filledBackground: true,
  }
}
export const TypeDark: StoryObj<BoxProps> = {
  args: {
    children: "Dark",
    type: 'dark',
    border: true,
    rounded: true,
    filledBackground: true,
  }
}
export const TypeSuccess: StoryObj<BoxProps> = {
  args: {
    children: "Success",
    type: 'success',
    border: true,
    rounded: true,
    filledBackground: true,
  }
}
export const TypeAlert: StoryObj<BoxProps> = {
  args: {
    children: "Alert",
    type: 'alert',
    border: true,
    rounded: true,
    filledBackground: true,
  }
}
export const TypeError: StoryObj<BoxProps> = {
  args: {
    children: "Error",
    type: 'error',
    border: true,
    rounded: true,
    filledBackground: true,
  }
}
