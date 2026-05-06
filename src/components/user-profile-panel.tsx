'use client';

import * as React from 'react';
import { cn } from '@/src/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { UserIdentity } from './user-identity';
import { UserStatus, type UserStatusType } from './user-status';

interface UserProfilePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  username?: string;
  displayName?: string;
  avatar?: string;
  email?: string;
  userStatus?: UserStatusType;
  showBackdrop?: boolean;
}

const UserProfilePanel = React.forwardRef<HTMLDivElement, UserProfilePanelProps>(
  (
    {
      isOpen,
      onClose,
      username = 'guest',
      displayName,
      avatar,
      email,
      userStatus = 'active',
      className,
      showBackdrop = true,
      ...props
    },
    ref
  ) => {
    React.useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <>
        {/* Backdrop */}
        {showBackdrop && (
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity"
            onClick={onClose}
            aria-hidden="true"
          />
        )}

        {/* Panel */}
        <div
          ref={ref}
          className={cn(
            'fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-background shadow-lg',
            className
          )}
          {...props}
        >
          {/* Header */}
          <Card className="rounded-none border-b border-r-0 border-t-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Profile</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                aria-label="Close profile panel"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </CardHeader>
          </Card>

          {/* Content */}
          <div className="space-y-6 p-6">
            {/* User Avatar and Identity */}
            <Card>
              <CardContent className="flex flex-col items-center justify-center pt-6 text-center">
                {avatar ? (
                  <img
                    src={avatar}
                    alt={displayName || username}
                    className="mb-4 h-20 w-20 rounded-full border-4 border-border object-cover"
                  />
                ) : (
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-border bg-muted text-2xl font-semibold">
                    {(displayName || username).charAt(0).toUpperCase()}
                  </div>
                )}
                {displayName && (
                  <h3 className="text-lg font-bold text-foreground">{displayName}</h3>
                )}
                <p className="text-sm text-muted-foreground">@{username}</p>
                {email && (
                  <p className="mt-2 text-sm text-muted-foreground">{email}</p>
                )}
              </CardContent>
            </Card>

            {/* User Status */}
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">Account Status</h4>
              <UserStatus status={userStatus} userId={username} />
            </div>

            {/* Profile Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Account Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="mb-1 block text-xs font-medium text-muted-foreground">
                    Username
                  </label>
                  <p className="rounded border bg-muted px-3 py-2 text-sm text-foreground">
                    {username}
                  </p>
                </div>
                {email && (
                  <div>
                    <label className="mb-1 block text-xs font-medium text-muted-foreground">
                      Email
                    </label>
                    <p className="rounded border bg-muted px-3 py-2 text-sm text-foreground">
                      {email}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-4">
              <Button onClick={onClose} className="flex-1">
                Close
              </Button>
              <Button variant="outline" className="flex-1">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
);

UserProfilePanel.displayName = 'UserProfilePanel';

export { UserProfilePanel };
