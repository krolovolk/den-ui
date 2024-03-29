import { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "../components/ButtonGroup";

const meta = {
  title: "Custom/ButtonGroup",
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Custom: Story = {
  args: {
    buttons: [
      { label: "Button 1", primary: true },
      { label: "Button 2" },
      { label: "Button 3" },
    ],
  },
};
