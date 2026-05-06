import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

const meta = {
  title: "UI/Input",
  component: Input,
  args: {
    placeholder: "name@example.com",
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  render: (args) => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" {...args} />
    </div>
  ),
};
