'use client';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  links?: FooterLink[];
  companyName?: string;
  year?: number;
}

export default function Footer({
  links = [],
  companyName = 'My Company',
  year = new Date().getFullYear(),
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Links Section */}
        {links.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Divider */}
        {links.length > 0 && <hr className="border-gray-700 mb-6" />}

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {year} {companyName}. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Built with{' '}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Next.js
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
