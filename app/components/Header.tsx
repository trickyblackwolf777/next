import UserIdentity from './UserIdentity';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  username?: string;
  displayName?: string;
  avatar?: string;
  className?: string;
}

export default function Header({
  title = "Welcome",
  subtitle,
  username,
  displayName,
  avatar,
  className = "",
}: HeaderProps) {
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
          {username && (
            <div className="flex items-center">
              <UserIdentity
                username={username}
                displayName={displayName}
                avatar={avatar}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
