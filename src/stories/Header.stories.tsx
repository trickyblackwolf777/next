import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Header from "@/app/components/Header";

const meta = {
  title: "App/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Dashboard",
    subtitle: "Monitor account activity and recent updates.",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIdentity: Story = {
  args: {
    username: "ryanm",
    displayName: "Ryan Murphy",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ryanm",
    userStatus: "active",
  },
};

export const UnderReview: Story = {
  args: {
    title: "Account Review",
    subtitle: "Some workspace actions may be limited.",
    username: "casey",
    displayName: "Casey Morgan",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=casey",
    userStatus: "under-review",
  },
};
