import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { UserIdentity } from '@/src/components/user-identity';

const meta = {
  title: 'User Components/UserIdentity',
  component: UserIdentity,
  args: {
    username: 'johndoe',
    displayName: 'John Doe',
  },
} satisfies Meta<typeof UserIdentity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAvatar: Story = {
  args: {
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  },
};

export const WithoutAvatar: Story = {
  args: {
    avatar: undefined,
  },
};

export const WithAvatarFallback: Story = {
  args: {
    avatar: undefined,
    avatarFallback: 'JD',
  },
};

export const Interactive: Story = {
  args: {
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    interactive: true,
    onClick: () => alert('User clicked!'),
  },
};

export const NoDisplayName: Story = {
  args: {
    displayName: undefined,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
  },
};

export const LongUsername: Story = {
  args: {
    username: 'this_is_a_very_long_username_that_might_overflow',
    displayName: 'This is a Very Long Display Name',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Long',
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-3">
      <UserIdentity
        username="alice"
        displayName="Alice Johnson"
        avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice"
      />
      <UserIdentity
        username="bob"
        displayName="Bob Smith"
        avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
      />
      <UserIdentity
        username="charlie"
        displayName="Charlie Brown"
        avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie"
      />
    </div>
  ),
};
