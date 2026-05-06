"use client";

import { cn } from "@/src/lib/utils";

interface UserIdentityProps {
  username?: string;
  displayName?: string;
  avatar?: string;
  className?: string;
  onClick?: () => void;
}

export default function UserIdentity({
  username = "Guest",
  displayName,
  avatar,
  className = "",
  onClick,
}: UserIdentityProps) {
  return (
    <div
      className={cn("flex items-center gap-3 text-left", className)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {avatar && (
        <span
          role="img"
          aria-label={displayName || username}
          className="size-9 rounded-full border bg-cover bg-center"
          style={{ backgroundImage: `url(${avatar})` }}
        />
      )}
      <div className="flex flex-col justify-center">
        {displayName && (
          <p className="text-sm font-medium leading-none text-foreground">
            {displayName}
          </p>
        )}
        <p className="mt-1 text-xs text-muted-foreground">@{username}</p>
      </div>
    </div>
  );
}
