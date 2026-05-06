'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/src/lib/utils';
import { Badge } from './ui/badge';

export type UserStatusType = 'active' | 'banned' | 'suspended' | 'under-review';

const userStatusVariants = cva(
  'flex flex-col gap-2 rounded-lg border p-4',
  {
    variants: {
      variant: {
        active: 'border-green-200 bg-green-50',
        banned: 'border-red-200 bg-red-50',
        suspended: 'border-yellow-200 bg-yellow-50',
        'under-review': 'border-blue-200 bg-blue-50',
      },
    },
    defaultVariants: {
      variant: 'active',
    },
  }
);

const statusLabelVariants = cva('text-sm font-semibold', {
  variants: {
    variant: {
      active: 'text-green-700',
      banned: 'text-red-700',
      suspended: 'text-yellow-700',
      'under-review': 'text-blue-700',
    },
  },
  defaultVariants: {
    variant: 'active',
  },
});

const statusDescriptionVariants = cva('text-xs', {
  variants: {
    variant: {
      active: 'text-green-600',
      banned: 'text-red-600',
      suspended: 'text-yellow-600',
      'under-review': 'text-blue-600',
    },
  },
  defaultVariants: {
    variant: 'active',
  },
});

const statusConfig: Record<
  UserStatusType,
  { label: string; description: string; badgeVariant: 'default' | 'secondary' | 'destructive' }
> = {
  active: {
    label: 'Active',
    description: 'Account is active and in good standing',
    badgeVariant: 'default',
  },
  banned: {
    label: 'Banned',
    description: 'This account has been permanently banned.',
    badgeVariant: 'destructive',
  },
  suspended: {
    label: 'Suspended',
    description: 'This account is temporarily suspended.',
    badgeVariant: 'secondary',
  },
  'under-review': {
    label: 'Under Review',
    description: 'This account is under review. Please allow up to 24 hours.',
    badgeVariant: 'secondary',
  },
};

interface UserStatusProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof userStatusVariants> {
  status: UserStatusType;
  userId?: string;
  userName?: string;
  showBadge?: boolean;
}

const UserStatus = React.forwardRef<HTMLDivElement, UserStatusProps>(
  (
    {
      status,
      userId,
      userName,
      className,
      showBadge = true,
      ...props
    },
    ref
  ) => {
    const config = statusConfig[status];

    return (
      <div
        ref={ref}
        className={cn(userStatusVariants({ variant: status }), className)}
        {...props}
      >
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className={cn(statusLabelVariants({ variant: status }))}>
              {config.label}
            </p>
            {(userId || userName) && (
              <p className="text-xs text-muted-foreground mt-1">
                {userName && <span>{userName}</span>}
                {userId && userName && <span> • </span>}
                {userId && <span>ID: {userId}</span>}
              </p>
            )}
          </div>
          {showBadge && (
            <Badge variant={config.badgeVariant}>{config.label}</Badge>
          )}
        </div>
        <p className={cn(statusDescriptionVariants({ variant: status }))}>
          {config.description}
        </p>
      </div>
    );
  }
);

UserStatus.displayName = 'UserStatus';

export { UserStatus };
