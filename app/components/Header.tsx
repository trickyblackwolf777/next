"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import UserIdentity from './UserIdentity';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  username?: string;
  displayName?: string;
  avatar?: string;
  className?: string;
  showLogout?: boolean;
}

interface UserData {
  email: string;
  username: string;
  displayName: string;
  avatar: string;
  isLoggedIn: boolean;
}

export default function Header({
  title = "Welcome",
  subtitle,
  username,
  displayName,
  avatar,
  className = "",
}: HeaderProps) {
  const [mounted, setMounted] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUserData(JSON.parse(stored));
    }
    setMounted(true);
  }, []);

  const finalUsername = username || userData?.username;
  const finalDisplayName = displayName || userData?.displayName;
  const finalAvatar = avatar || userData?.avatar;

  return (
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
            <div className="flex items-center">
              <UserIdentity
                username={finalUsername}
                displayName={finalDisplayName}
                avatar={finalAvatar}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
