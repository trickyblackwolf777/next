import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Mail } from "lucide-react";

import { Button } from "@/src/components/ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
  args: {
    children: "Save changes",
    variant: "default",
    size: "default",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Button>
      <Mail />
      Invite user
    </Button>
  ),
};
