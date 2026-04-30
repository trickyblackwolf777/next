'use client';

import { useState } from 'react';
import UserStatus, { type UserStatusType } from './UserStatus';

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
  username = 'guest',
  displayName,
  avatar,
  email,
  userStatus = 'active',
}: UserProfilePanelProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Profile</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-blue-700 rounded-lg p-2 transition-colors"
            aria-label="Close profile panel"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-6">
          {/* User Avatar and Identity */}
          <div className="flex flex-col items-center text-center">
            {avatar && (
              <img
                src={avatar}
                alt={displayName || username}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-200 mb-3"
              />
            )}
            {displayName && (
              <h3 className="text-lg font-bold text-gray-900">{displayName}</h3>
            )}
            <p className="text-sm text-gray-600">@{username}</p>
            {email && (
              <p className="text-sm text-gray-600 mt-1">{email}</p>
            )}
          </div>

          {/* User Status */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Account Status</h4>
            <UserStatus status={userStatus} userId={username} />
          </div>

          {/* Profile Information */}
          <div className="border-t pt-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-4">Account Information</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Username
                </label>
                <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                  {username}
                </p>
              </div>
              {email && (
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">
                    Email
                  </label>
                  <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">
                    {email}
                  </p>
                </div>
              )}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Account Status
                </label>
                <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded capitalize">
                  {userStatus.replace('-', ' ')}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="border-t pt-6 space-y-3">
            <button
              onClick={onClose}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
