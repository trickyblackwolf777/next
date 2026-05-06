"use client";

import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

interface LoginFormProps {
  redirectOnSuccess?: boolean;
  redirectTo?: string;
  simulateDelayMs?: number;
  onSuccess?: (email: string, rememberMe: boolean) => void;
}

export default function LoginForm({
  redirectOnSuccess = true,
  redirectTo = "/dashboard",
  simulateDelayMs = 1000,
  onSuccess,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, simulateDelayMs));

      if (!email || !password) {
        throw new Error("Please fill in all fields");
      }

      if (!email.includes("@")) {
        throw new Error("Please enter a valid email address");
      }

      const username = email.split("@")[0];
      const userData = {
        email,
        username,
        displayName: username.charAt(0).toUpperCase() + username.slice(1),
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        isLoggedIn: true,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      onSuccess?.(email, rememberMe);
      setSuccess(true);
      setEmail("");
      setPassword("");
      setRememberMe(false);

      if (redirectOnSuccess) {
        setTimeout(() => {
          window.location.href = redirectTo;
        }, 1500);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </div>
      )}

      {success && (
        <div className="rounded-md border border-primary/20 bg-primary/10 px-3 py-2 text-sm text-foreground">
          Login successful{redirectOnSuccess ? "! Redirecting..." : "."}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          disabled={isLoading}
        />
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="rememberMe"
            checked={rememberMe}
            onCheckedChange={(checked) => setRememberMe(checked === true)}
            disabled={isLoading}
          />
          <Label htmlFor="rememberMe" className="cursor-pointer text-muted-foreground">
            Remember me
          </Label>
        </div>
        <a
          href="/forgot-password"
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Forgot password?
        </a>
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" />
            Signing in...
          </>
        ) : (
          "Sign In"
        )}
      </Button>
    </form>
  );
}
