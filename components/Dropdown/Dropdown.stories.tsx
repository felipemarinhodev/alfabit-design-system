import type { Meta, StoryObj } from "@storybook/react";
import Dropdown, { type DropdownProps } from "./Dropdown";

const meta: Meta<DropdownProps> = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  decorators: [(Story) => (
    <div style={{ paddingBottom: "15em", paddingTop: "3em" }}>
      <Story />
    </div>
  )]
}

export default meta;
// type Story = StoryObj<typeof Dropdown>

export const Primary: StoryObj<DropdownProps> = {
  args: {
    list: [],
  }
};

export const Common: StoryObj<DropdownProps> = {
  args: {
    list: [
      "Durward Reynolds",
      "Kenton Towne",
      "Therese Wunsch",
      "Benedict Kessler",
      "Katelyn Rohan"
    ]
  }
}
