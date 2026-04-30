'use client';

import React from 'react';

export type UserStatusType = 'active' | 'banned' | 'suspended' | 'under-review';

interface UserStatusProps {
  status: UserStatusType;
  userId?: string;
  userName?: string;
  className?: string;
}

const statusConfig: Record<UserStatusType, { label: string; bgColor: string; textColor: string; dotColor: string }> = {
  active: {
    label: 'Active',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
    dotColor: 'bg-green-500',
  },
  banned: {
    label: 'Banned',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
    dotColor: 'bg-red-500',
  },
  suspended: {
    label: 'Suspended',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-700',
    dotColor: 'bg-yellow-500',
  },
  'under-review': {
    label: 'Under Review',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    dotColor: 'bg-blue-500',
  },
};

/**
 * UserStatus Component
 * Displays the current status of a user with visual indicators
 * @param status - The user's status type
 * @param userId - Optional user ID
 * @param userName - Optional user name
 * @param className - Optional additional CSS classes
 */
export default function UserStatus({
  status,
  userId,
  userName,
  className = '',
}: UserStatusProps) {
  const config = statusConfig[status];

  return (
    <div className={`${config.bgColor} rounded-lg p-4 ${className}`}>
      <div className="flex items-center gap-3">
        <div className={`${config.dotColor} h-3 w-3 rounded-full`} />
        <div className="flex-1">
          <p className={`${config.textColor} text-sm font-semibold`}>
            {config.label}
          </p>
          {(userId || userName) && (
            <p className="text-xs text-gray-600 mt-1">
              {userName && <span>{userName}</span>}
              {userId && userName && <span> • </span>}
              {userId && <span>ID: {userId}</span>}
            </p>
          )}
        </div>
      </div>
      
      {/* Additional status information */}
      {status === 'banned' && (
        <p className="text-xs text-red-600 mt-2">This account has been permanently banned.</p>
      )}
      {status === 'suspended' && (
        <p className="text-xs text-yellow-600 mt-2">This account is temporarily suspended.</p>
      )}
      {status === 'under-review' && (
        <p className="text-xs text-blue-600 mt-2">This account is under review. Please allow up to 24 hours.</p>
      )}
    </div>
  );
}
