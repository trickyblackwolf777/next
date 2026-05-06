import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import SignupForm from "@/app/components/SignupForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

const meta = {
  title: "App/SignupForm",
  component: SignupForm,
  args: {
    redirectOnSuccess: false,
    simulateDelayMs: 300,
  },
  decorators: [
    (Story) => (
      <Card className="w-full max-w-xl">
        <CardHeader className="text-center">
          <CardTitle>Create Account</CardTitle>
          <CardDescription>Join us today and get started</CardDescription>
        </CardHeader>
        <CardContent>
          <Story />
        </CardContent>
      </Card>
    ),
  ],
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FastValidation: Story = {
  args: {
    simulateDelayMs: 0,
  },
};
