# Design System

UI primitives generated from shadcn/ui live in `src/components/ui`.
Shared UI utilities live in `src/lib`, starting with `src/lib/utils.ts` and its `cn()` helper.

The existing app components remain in `app/components`. Use `src/components/ui` for reusable primitives and compose product-specific components near the route or feature that owns them.

## Add A shadcn/ui Component

Use npm, matching the project package manager:

```bash
npx shadcn@latest add <component>
```

The shadcn configuration in `components.json` points components to `src/components/ui`, utilities to `src/lib/utils`, and global styles to `app/globals.css`.

## Write A Story

Stories live in `src/stories` and use Component Story Format:

```tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/src/components/ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Save changes",
  },
};
```

Prefer small examples that show real states, useful variants, and any controls a designer or engineer would expect to adjust.

## Run Storybook

```bash
npm run storybook
npm run build-storybook
```

Storybook imports `app/globals.css`, so stories use the same Tailwind 4 theme tokens as the app.

## Extract Later

Keep components inside this app until multiple apps need the same primitives, independent versioning, or separate release ownership. At that point, extract only the stable UI primitives into a package.
