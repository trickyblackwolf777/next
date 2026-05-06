"use client";

import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

interface SignupFormProps {
  redirectOnSuccess?: boolean;
  redirectTo?: string;
  simulateDelayMs?: number;
  onSuccess?: (email: string) => void;
}

export default function SignupForm({
  redirectOnSuccess = true,
  redirectTo = "/dashboard",
  simulateDelayMs = 1500,
  onSuccess,
}: SignupFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    setIsLoading(true);

    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        throw new Error("Please fill in all fields");
      }

      if (!formData.email.includes("@")) {
        throw new Error("Please enter a valid email address");
      }

      if (formData.password.length < 8) {
        throw new Error("Password must be at least 8 characters");
      }

      if (formData.password !== formData.confirmPassword) {
        throw new Error("Passwords do not match");
      }

      if (!formData.agreeToTerms) {
        throw new Error("You must agree to the terms and conditions");
      }

      await new Promise((resolve) => setTimeout(resolve, simulateDelayMs));

      onSuccess?.(formData.email);
      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
      });

      if (redirectOnSuccess) {
        setTimeout(() => {
          window.location.href = redirectTo;
        }, 1500);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
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
          Account created successfully{redirectOnSuccess ? "! Redirecting..." : "."}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="signupEmail">Email Address</Label>
        <Input
          id="signupEmail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="signupPassword">Password</Label>
        <Input
          id="signupPassword"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          disabled={isLoading}
        />
        <p className="text-xs text-muted-foreground">Must be at least 8 characters</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm password"
          disabled={isLoading}
        />
      </div>

      <div className="flex items-start space-x-2 pt-2">
        <Checkbox
          id="agreeToTerms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onCheckedChange={(checked) =>
            setFormData((prev) => ({ ...prev, agreeToTerms: checked === true }))
          }
          disabled={isLoading}
          className="mt-0.5"
        />
        <Label
          htmlFor="agreeToTerms"
          className="cursor-pointer text-muted-foreground"
        >
          I agree to the{" "}
          <a href="/terms" className="text-primary underline-offset-4 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-primary underline-offset-4 hover:underline">
            Privacy Policy
          </a>
        </Label>
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" />
            Creating account...
          </>
        ) : (
          "Create Account"
        )}
      </Button>
    </form>
  );
}
