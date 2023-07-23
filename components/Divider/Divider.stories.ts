import { Meta, StoryObj } from "@storybook/react";
import Divider, { DividerPros } from "./Divider";

const meta: Meta<DividerPros> = {
  title: "Atoms/Divider",
  component: Divider,
  argTypes: {
    className: {
      type: "string"
    }
  }
}

export default meta;

export const Primary: StoryObj<DividerPros> = {
  args: {
  }
}