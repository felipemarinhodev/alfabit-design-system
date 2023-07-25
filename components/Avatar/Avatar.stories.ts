import { Meta, StoryObj } from "@storybook/react";
import Avatar, { type AvatarProps } from "./Avatar";

const meta: Meta<AvatarProps> = {
  title: "Atoms/Avatar",
  component: Avatar,
  argTypes: {
    className: {
      type: "string"
    },
    size: { type: "string" },
    image: { type: "string" },
    description: { type: "string" }
  }
}

export default meta;

export const Primary: StoryObj<AvatarProps> = {
  args: { }
}
export const Default: StoryObj<AvatarProps> = {
  args: { }
}

export const ExtremeSmall: StoryObj<AvatarProps> = {
  args: {
    size: 'xs'
   }
}

export const Small: StoryObj<AvatarProps> = {
  args: {
    size: 'sm'
   }
}

export const Medium: StoryObj<AvatarProps> = {
  args: {
    size: 'md'
   }
}

export const Large: StoryObj<AvatarProps> = {
  args: {
    size: 'lg'
   }
}

export const AvatarImage: StoryObj<AvatarProps> = {
  args: { 
    size: "lg",
    image: "https://placehold.co/400x400.png"
  }
}
