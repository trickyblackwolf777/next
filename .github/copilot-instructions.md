# Next.js SSR Boilerplate

## Project Overview

This is a production-ready Next.js Server-Side Rendering (SSR) boilerplate with TypeScript, Tailwind CSS, and ESLint configured for optimal development experience.

## Tech Stack

- **Framework**: Next.js 16.2.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint with Next.js config
- **Build Tool**: Turbopack (for faster builds)
- **Package Manager**: npm

## Getting Started

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

```bash
npm run build
npm run start
```

### Linting

Check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
├── app/                 # App Router pages and layouts
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   └── globals.css     # Global Tailwind CSS imports
├── public/             # Static assets
├── .gitignore          # Git ignore patterns
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── eslint.config.js    # ESLint configuration
└── package.json        # Project dependencies

```

## Key Features

- ✅ Server-Side Rendering (SSR) enabled by default
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for utility-first styling
- ✅ ESLint for code quality
- ✅ Modern App Router architecture
- ✅ Optimized build with Turbopack
- ✅ Git repository initialized

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm fund` - See funding information for dependencies

## Customization

- Modify `app/page.tsx` to update the home page
- Edit `tailwind.config.ts` to customize Tailwind CSS
- Update `next.config.ts` for Next.js-specific configurations
- Adjust `tsconfig.json` for TypeScript settings

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
