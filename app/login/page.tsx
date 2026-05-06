import LoginForm from "../components/LoginForm";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export const metadata = {
  title: "Login",
  description: "Sign in to your account",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4 py-12">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Sign in to your account to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter className="flex-col gap-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="bg-card px-2 text-muted-foreground">
                Don&apos;t have an account?
              </span>
            </div>
          </div>

            <Button asChild variant="outline" className="w-full">
              <a href="/signup">Create Account</a>
            </Button>
          </CardFooter>
        </Card>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          By signing in, you agree to our{" "}
          <a href="/terms" className="text-primary underline-offset-4 hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
}
