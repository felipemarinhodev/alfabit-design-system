import { Meta, StoryObj } from "@storybook/react";
import Notice, { NoticeProps } from "./Notice";


const meta: Meta<NoticeProps> = {
  title: 'Molecules/Notice',
  component: Notice,
  argTypes: {
    children: {
      type: 'string'
    },
    message: {
      type: 'string'
    },
    onClose: {
      type: 'function',
      defaultValue: () => console.log("Close handler")
      
    },
    className: {
      type: 'string',
    }
  }
}

export default meta;

export const Primary: StoryObj<NoticeProps> = {
  args: {
    children: 'Notice',
    message: "Amet minim mollit non deserunt ullamco est"
  }
}

export const Alert: StoryObj<NoticeProps> = {
  args: {
    children: 'Notice',
    type: "alert",
    message: "Amet minim mollit non deserunt ullamco est"
  }
}

export const Success: StoryObj<NoticeProps> = {
  args: {
    children: 'Notice',
    type: "success",
    message: "Amet minim mollit non deserunt ullamco est"
  }
}

export const Error: StoryObj<NoticeProps> = {
  args: {
    children: 'Notice',
    type: "error",
    message: "Amet minim mollit non deserunt ullamco est"
  }
}

