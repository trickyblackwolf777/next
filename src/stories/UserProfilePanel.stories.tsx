import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { UserProfilePanel } from '@/src/components/user-profile-panel';
import { Button } from '@/src/components/ui/button';

const meta = {
  title: 'User Components/UserProfilePanel',
  component: UserProfilePanel,
} satisfies Meta<typeof UserProfilePanel>;

export default meta;
type Story = StoryObj<typeof meta>;

function UserProfilePanelWithState(props: React.ComponentProps<typeof UserProfilePanel>) {
  const [isOpen, setIsOpen] = useState(props.isOpen ?? false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Profile</Button>
      <UserProfilePanel
        {...props}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export const Default: Story = {
  render: (args) => <UserProfilePanelWithState {...args} />,
  args: {
    username: 'johndoe',
    displayName: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    userStatus: 'active',
  },
};

export const ActiveStatus: Story = {
  render: (args) => <UserProfilePanelWithState {...args} />,
  args: {
    username: 'alice',
    displayName: 'Alice Johnson',
    email: 'alice@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
    userStatus: 'active',
  },
};

export const BannedStatus: Story = {
  render: (args) => <UserProfilePanelWithState {...args} />,
  args: {
    username: 'banned_user',
    displayName: 'Banned User',
    email: 'banned@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Banned',
    userStatus: 'banned',
  },
};

export const SuspendedStatus: Story = {
  render: (args) => <UserProfilePanelWithState {...args} />,
  args: {
    username: 'suspended_user',
    displayName: 'Suspended User',
    email: 'suspended@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suspended',
    userStatus: 'suspended',
  },
};

export const UnderReviewStatus: Story = {
  render: (args) => <UserProfilePanelWithState {...args} />,
  args: {
    username: 'review_user',
    displayName: 'User Under Review',
    email: 'review@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Review',
    userStatus: 'under-review',
  },
};

export const WithoutAvatar: Story = {
  render: (args) => <UserProfilePanelWithState {...args} />,
  args: {
    username: 'noavatar',
    displayName: 'No Avatar User',
    email: 'noavatar@example.com',
    userStatus: 'active',
  },
};

export const MinimalInfo: Story = {
  render: (args) => <UserProfilePanelWithState {...args} />,
  args: {
    username: 'minimal',
    userStatus: 'active',
  },
};
