import { Meta, StoryObj } from "@storybook/react";
import Typography, { type TypographyProps } from "./Typography";

const meta: Meta<TypographyProps> = {
  title: "Atoms/Typography",
  component: Typography,
  argTypes: {
    className: {
      type: "string"
    }
  }
}

export default meta;

export const Primary: StoryObj<TypographyProps> = {
  args: {
    children: "Text"
  }
}

export const TextHeading1: StoryObj<TypographyProps> = {
  args: {
    children: "Heading 1",
    element: 'h1',
    size: 'title1',
    className: 'font-extrabold'
  }
}

export const TextHeading2: StoryObj<TypographyProps> = {
  args: {
    children: "Heading 2",
    element: 'h2',
    size: 'title2',
    className: 'font-extrabold'
  }
}

export const TextHeading3: StoryObj<TypographyProps> = {
  args: {
    children: "Heading 3",
    element: 'h3',
    size: 'title3',
    className: 'font-extrabold'
  }
}

export const TextParagraph: StoryObj<TypographyProps> = {
  args: {
    children: "Paragraph",
    element: 'p',
    size: 'md',
    className: 'font-primary'
  }
}
