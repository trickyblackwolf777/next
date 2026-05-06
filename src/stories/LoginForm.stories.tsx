import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import LoginForm from "@/app/components/LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

const meta = {
  title: "App/LoginForm",
  component: LoginForm,
  args: {
    redirectOnSuccess: false,
    simulateDelayMs: 300,
  },
  decorators: [
    (Story) => (
      <Card className="w-96">
        <CardHeader className="text-center">
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Story />
        </CardContent>
      </Card>
    ),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FastValidation: Story = {
  args: {
    simulateDelayMs: 0,
  },
};
