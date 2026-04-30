"use client";

import { useEffect, useRef, useState } from "react";
import UserIdentity from './UserIdentity';
import UserProfilePanel from './UserProfilePanel';
import { type UserStatusType } from './UserStatus';

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
  userStatus = 'active',
}: HeaderProps) {
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
      const stored = localStorage.getItem('user');
      const userData = stored ? JSON.parse(stored) : null;
      queueMicrotask(() => setState(prev => ({ ...prev, mounted: true, userData })));
    } catch {
      queueMicrotask(() => setState(prev => ({ ...prev, mounted: true, userData: null })));
    }
  }, []);

  const mounted = state.mounted;
  const userData = state.userData;
  const isProfileOpen = state.isProfileOpen;
  const finalUsername = username || userData?.username;
  const finalDisplayName = displayName || userData?.displayName;
  const finalAvatar = avatar || userData?.avatar;
  const finalEmail = userData?.email;
  const finalUserStatus = userStatus || userData?.status || 'active';

  const handleProfileClick = () => {
    setState(prev => ({ ...prev, isProfileOpen: true }));
  };

  const handleProfileClose = () => {
    setState(prev => ({ ...prev, isProfileOpen: false }));
  };

  return (
    <>
      <header
        className={`bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg ${className}`}
      >
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-2 text-blue-100 text-lg sm:text-xl">{subtitle}</p>
              )}
            </div>
            {mounted && finalUsername && (
              <button
                onClick={handleProfileClick}
                className="flex items-center hover:opacity-80 transition-opacity cursor-pointer rounded-lg p-2 hover:bg-blue-700"
                aria-label="Open user profile"
              >
                <UserIdentity
                  username={finalUsername}
                  displayName={finalDisplayName}
                  avatar={finalAvatar}
                />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Profile Panel */}
      <UserProfilePanel
        isOpen={isProfileOpen}
        onClose={handleProfileClose}
        username={finalUsername}
        displayName={finalDisplayName}
        avatar={finalAvatar}
        email={finalEmail}
        userStatus={finalUserStatus}
      />
    </>
  );
}
