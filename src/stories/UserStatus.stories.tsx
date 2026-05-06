import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { UserStatus, type UserStatusType } from '@/src/components/user-status';

const meta = {
  title: 'User Components/UserStatus',
  component: UserStatus,
  args: {
    userId: 'user-123',
    userName: 'John Doe',
    showBadge: true,
  },
} satisfies Meta<typeof UserStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    status: 'active',
  },
};

export const Banned: Story = {
  args: {
    status: 'banned',
  },
};

export const Suspended: Story = {
  args: {
    status: 'suspended',
  },
};

export const UnderReview: Story = {
  args: {
    status: 'under-review',
  },
};

export const WithoutBadge: Story = {
  args: {
    status: 'active',
    showBadge: false,
  },
};

export const MinimalInfo: Story = {
  args: {
    status: 'active',
    userId: undefined,
    userName: undefined,
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="grid gap-4">
      <UserStatus status="active" userId="user-1" userName="Active User" />
      <UserStatus status="banned" userId="user-2" userName="Banned User" />
      <UserStatus status="suspended" userId="user-3" userName="Suspended User" />
      <UserStatus status="under-review" userId="user-4" userName="Under Review User" />
    </div>
  ),
};
