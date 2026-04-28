"use client";

import { usePathname } from "next/navigation";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showLogout?: boolean;
}

export default function Header({
  title = "Welcome",
  subtitle,
  className = "",
  showLogout = false,
}: HeaderProps) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  const handleLogout = () => {
    // Clear any auth tokens or session data here
    // localStorage.removeItem('token');
    // sessionStorage.clear();
    window.location.href = '/login';
  };

  return (
    <header
      className={`bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg ${className}`}
    >
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-blue-100 text-lg sm:text-xl">{subtitle}</p>
            )}
          </div>
          {showLogout && !isAuthPage && (
            <button
              onClick={handleLogout}
              className="ml-auto px-4 py-2 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
