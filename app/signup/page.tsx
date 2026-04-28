import SignupForm from "../components/SignupForm";

export const metadata = {
  title: "Create Account",
  description: "Sign up for a new account",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Signup Card */}
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Create Account
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Join us today and get started
            </p>
          </div>

          {/* Signup Form */}
          <SignupForm />

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400">
                Already have an account?
              </span>
            </div>
          </div>

          {/* Sign In Link */}
          <a
            href="/login"
            className="block w-full text-center py-2 px-4 border border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-colors"
          >
            Sign In
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          By creating an account, you agree to our{" "}
          <a href="/terms" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Terms of Service
          </a>
          {" "}and{" "}
          <a href="/privacy" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
