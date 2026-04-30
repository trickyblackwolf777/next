'use client';

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
      className={`flex items-center gap-3 ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {avatar && (
        <img
          src={avatar}
          alt={displayName || username}
          className="w-10 h-10 rounded-full object-cover border-2 border-white"
        />
      )}
      <div className="flex flex-col justify-center">
        {displayName && (
          <p className="text-sm font-semibold text-white">{displayName}</p>
        )}
        <p className="text-xs text-blue-100">@{username}</p>
      </div>
    </div>
  );
}
