"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import UserIdentity from "./UserIdentity";
import UserProfilePanel from "./UserProfilePanel";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { type UserStatusType } from "./UserStatus";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  username?: string;
  displayName?: string;
  avatar?: string;
  className?: string;
  showLogout?: boolean;
  userStatus?: UserStatusType;
}

interface UserData {
  email: string;
  username: string;
  displayName: string;
  avatar: string;
  isLoggedIn: boolean;
  status?: UserStatusType;
}

export default function Header({
  title = "Welcome",
  subtitle,
  username,
  displayName,
  avatar,
  className = "",
  userStatus,
}: HeaderProps) {
  const pathname = usePathname();
  const [state, setState] = useState<{
    mounted: boolean;
    userData: UserData | null;
    isProfileOpen: boolean;
  }>({
    mounted: false,
    userData: null,
    isProfileOpen: false,
  });

  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;

    try {
      const stored = localStorage.getItem("user");
      const userData = stored ? JSON.parse(stored) : null;
      queueMicrotask(() => setState((prev) => ({ ...prev, mounted: true, userData })));
    } catch {
      queueMicrotask(() =>
        setState((prev) => ({ ...prev, mounted: true, userData: null })),
      );
    }
  }, []);

  const mounted = state.mounted;
  const userData = state.userData;
  const isProfileOpen = state.isProfileOpen;
  const finalUsername = username || userData?.username;
  const finalDisplayName = displayName || userData?.displayName;
  const finalAvatar = avatar || userData?.avatar;
  const finalEmail = userData?.email;
  const finalUserStatus = userStatus || userData?.status || "active";
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const hasAuthenticatedIdentity = Boolean(
    finalUsername && (username || userData?.isLoggedIn)
  );
  const shouldShowIdentity = mounted && !isAuthPage && hasAuthenticatedIdentity;

  const handleProfileClick = () => {
    setState((prev) => ({ ...prev, isProfileOpen: true }));
  };

  const handleProfileClose = () => {
    setState((prev) => ({ ...prev, isProfileOpen: false }));
  };

  return (
    <>
      <header
        className={cn("border-b bg-background text-foreground", className)}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h1 className="truncate text-2xl font-semibold tracking-normal">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
              )}
            </div>
            {shouldShowIdentity && (
              <Button
                type="button"
                variant="ghost"
                onClick={handleProfileClick}
                className="h-auto px-2 py-1.5"
                aria-label="Open user profile"
              >
                <UserIdentity
                  username={finalUsername}
                  displayName={finalDisplayName}
                  avatar={finalAvatar}
                />
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Profile Panel */}
      {shouldShowIdentity && (
        <UserProfilePanel
          isOpen={isProfileOpen}
          onClose={handleProfileClose}
          username={finalUsername}
          displayName={finalDisplayName}
          avatar={finalAvatar}
          email={finalEmail}
          userStatus={finalUserStatus}
        />
      )}
    </>
  );
}
