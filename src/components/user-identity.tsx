'use client';

import * as React from 'react';
import { cn } from '@/src/lib/utils';

interface UserIdentityProps
  extends React.HTMLAttributes<HTMLDivElement> {
  username?: string;
  displayName?: string;
  avatar?: string;
  avatarFallback?: string;
  onClick?: () => void;
  interactive?: boolean;
}

const UserIdentity = React.forwardRef<HTMLDivElement, UserIdentityProps>(
  (
    {
      username = 'Guest',
      displayName,
      avatar,
      avatarFallback,
      className,
      onClick,
      interactive = false,
      ...props
    },
    ref
  ) => {
    const isClickable = Boolean(onClick || interactive);

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-3 rounded-lg p-3',
          isClickable && 'cursor-pointer hover:bg-accent transition-colors',
          className
        )}
        onClick={onClick}
        role={isClickable ? 'button' : undefined}
        tabIndex={isClickable ? 0 : undefined}
        {...props}
      >
        <div className="flex-shrink-0">
          {avatar ? (
            <img
              src={avatar}
              alt={displayName || username}
              className="h-10 w-10 rounded-full object-cover border-2 border-border"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted border-2 border-border text-sm font-semibold">
              {avatarFallback || (displayName || username).charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center min-w-0">
          {displayName && (
            <p className="text-sm font-semibold text-foreground truncate">
              {displayName}
            </p>
          )}
          <p className="text-xs text-muted-foreground truncate">@{username}</p>
        </div>
      </div>
    );
  }
);

UserIdentity.displayName = 'UserIdentity';

export { UserIdentity };
