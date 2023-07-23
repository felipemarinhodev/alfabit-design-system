import { Meta, StoryObj } from "@storybook/react";
import Box, { BoxProps } from "./Box";

const meta: Meta<BoxProps> = {
  title: "Atoms/Box",
  component: Box,
  argTypes: {
    className: {
      type: "string"
    }
  }
}

export default meta;

export const Primary: StoryObj<BoxProps> = {
  args: {
  }
}

export const WithText: StoryObj<BoxProps> = {
  args: {
    children: "Text"
  }
}
