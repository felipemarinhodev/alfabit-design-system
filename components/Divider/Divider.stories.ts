import { Meta, StoryObj } from "@storybook/react";
import Divider, { DividerProps } from "./Divider";

const meta: Meta<DividerProps> = {
  title: "Design System/Atoms/Divider",
  component: Divider,
  argTypes: {
    className: {
      type: "string"
    }
  }
}

export default meta;

export const Primary: StoryObj<DividerProps> = {
  args: {
  }
}

export const WithText: StoryObj<DividerProps> = {
  args: {
    children: "Text"
  }
}
