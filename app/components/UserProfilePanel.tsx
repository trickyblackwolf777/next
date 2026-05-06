"use client";

import { X } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import UserStatus, { type UserStatusType } from "./UserStatus";

interface UserProfilePanelProps {
  isOpen: boolean;
  onClose: () => void;
  username?: string;
  displayName?: string;
  avatar?: string;
  email?: string;
  userStatus?: UserStatusType;
}

export default function UserProfilePanel({
  isOpen,
  onClose,
  username = "guest",
  displayName,
  avatar,
  email,
  userStatus = "active",
}: UserProfilePanelProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className="fixed right-0 top-0 z-50 h-full w-full max-w-sm overflow-y-auto border-l bg-background shadow-xl">
        <div className="sticky top-0 flex items-center justify-between border-b bg-background px-6 py-4">
          <h2 className="text-lg font-semibold tracking-normal">Profile</h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close profile panel"
          >
            <X />
          </Button>
        </div>

        <div className="space-y-6 px-6 py-6">
          <div className="flex flex-col items-center text-center">
            {avatar && (
              <span
                role="img"
                aria-label={displayName || username}
                className="mb-3 size-20 rounded-full border bg-cover bg-center"
                style={{ backgroundImage: `url(${avatar})` }}
              />
            )}
            {displayName && (
              <h3 className="text-lg font-semibold">{displayName}</h3>
            )}
            <p className="text-sm text-muted-foreground">@{username}</p>
            {email && (
              <p className="mt-1 text-sm text-muted-foreground">{email}</p>
            )}
          </div>

          <div>
            <h4 className="mb-3 text-sm font-medium">Account Status</h4>
            <UserStatus status={userStatus} userId={username} />
          </div>

          <div className="border-t pt-6">
            <h4 className="mb-4 text-sm font-medium">Account Information</h4>
            <div className="space-y-4">
              <ProfileField label="Username" value={username} />
              {email && <ProfileField label="Email" value={email} />}
              <ProfileField
                label="Account Status"
                value={userStatus.replace("-", " ")}
                className="capitalize"
              />
            </div>
          </div>

          <div className="space-y-3 border-t pt-6">
            <Button type="button" onClick={onClose} className="w-full">
              Close
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full"
            >
              Logout
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}

function ProfileField({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div>
      <p className="mb-1 text-xs font-medium text-muted-foreground">{label}</p>
      <p className={cn("rounded-md border bg-muted px-3 py-2 text-sm", className)}>
        {value}
      </p>
    </div>
  );
}
