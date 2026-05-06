import SignupForm from "../components/SignupForm";
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
  title: "Create Account",
  description: "Sign up for a new account",
};

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4 py-12">
      <div className="w-full max-w-xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Create Account</CardTitle>
            <CardDescription>Join us today and get started</CardDescription>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
          <CardFooter className="flex-col gap-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="bg-card px-2 text-muted-foreground">
                Already have an account?
              </span>
            </div>
          </div>

            <Button asChild variant="outline" className="w-full">
              <a href="/login">Sign In</a>
            </Button>
          </CardFooter>
        </Card>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          By creating an account, you agree to our{" "}
          <a href="/terms" className="text-primary underline-offset-4 hover:underline">
            Terms of Service
          </a>
          {" "}and{" "}
          <a href="/privacy" className="text-primary underline-offset-4 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
