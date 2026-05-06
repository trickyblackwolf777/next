"use client";

import { Badge } from "@/src/components/ui/badge";
import { cn } from "@/src/lib/utils";

export type UserStatusType = "active" | "banned" | "suspended" | "under-review";

interface UserStatusProps {
  status: UserStatusType;
  userId?: string;
  userName?: string;
  className?: string;
}

const statusConfig: Record<
  UserStatusType,
  { label: string; className: string; dotColor: string; help?: string }
> = {
  active: {
    label: "Active",
    className:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
  },
  banned: {
    label: "Banned",
    className: "border-destructive/30 bg-destructive/10 text-destructive",
    dotColor: "bg-destructive",
    help: "This account has been permanently banned.",
  },
  suspended: {
    label: "Suspended",
    className:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300",
    dotColor: "bg-amber-500",
    help: "This account is temporarily suspended.",
  },
  "under-review": {
    label: "Under Review",
    className:
      "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-300",
    dotColor: "bg-sky-500",
    help: "This account is under review. Please allow up to 24 hours.",
  },
};

export default function UserStatus({
  status,
  userId,
  userName,
  className = "",
}: UserStatusProps) {
  const config = statusConfig[status];

  return (
    <div className={cn("rounded-lg border p-4", config.className, className)}>
      <div className="flex items-center gap-3">
        <div className={cn("size-3 rounded-full", config.dotColor)} />
        <div className="flex-1">
          <Badge variant="outline" className="border-current text-current">
            {config.label}
          </Badge>
          {(userId || userName) && (
            <p className="mt-2 text-xs opacity-80">
              {userName && <span>{userName}</span>}
              {userId && userName && <span> / </span>}
              {userId && <span>ID: {userId}</span>}
            </p>
          )}
        </div>
      </div>
      {config.help && <p className="mt-2 text-xs opacity-80">{config.help}</p>}
    </div>
  );
}
