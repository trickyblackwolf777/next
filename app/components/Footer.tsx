'use client';

import { cn } from "@/src/lib/utils";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  links?: FooterLink[];
  companyName?: string;
  year?: number;
  className?: string;
}

export default function Footer({
  links = [],
  companyName = "My Company",
  year = new Date().getFullYear(),
  className,
}: FooterProps) {
  return (
    <footer className={cn("mt-auto border-t bg-background text-foreground", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {links.length > 0 && (
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-3 py-6 text-sm md:flex md:flex-wrap"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex flex-col gap-3 border-t py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {companyName}. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Next.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
