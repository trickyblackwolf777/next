export const metadata = {
  title: "Dashboard",
  description: "User dashboard",
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <div className="col-span-1 md:col-span-3 bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome to Your Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              You have successfully signed in. Manage your account and access your content here.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Users</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">1,234</p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Active Sessions</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">42</p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Revenue</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">$12.5K</p>
          </div>
        </div>
      </div>
    </div>
  );
}
