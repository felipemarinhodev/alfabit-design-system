import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal, { type ModalProps } from "./Modal";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

const ModalStoryInfo = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Typography>lero lero</Typography>
        <Typography>lero lero</Typography>
        <div className="flex flex-col gap-3">
          <Button onClick={() => setIsOpen(false)}>Primary Button</Button>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>Secondary Button</Button>
        </div>
      </Modal>
    </>
  )
}

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    )
  ]
}

export default meta;

type Story = StoryObj<typeof Modal>;

export const ModalInfo: Story = {
  args: {
    isOpen: false,
    title: "Modal Info"
  },
  render: (args: ModalProps) => {
    return <ModalStoryInfo {...args} />
  }
}
