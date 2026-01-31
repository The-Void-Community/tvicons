import type { Meta, StoryObj } from "@storybook/react-vite";

import { X } from "./x";
import { CircleX } from "./circle-x";

const meta: Meta<typeof X> = {
  component: X,
  tags: ["autodocs"],
};

export const Default: StoryObj<typeof X> = {
  args: {
    size: 24,
  }
};

export const Circle_X: StoryObj<typeof CircleX> = {
  render: (args) => (<CircleX {...args} />),
  args: {
    multiplier: 0.8,
    size: 24
  }
}

export default meta;
