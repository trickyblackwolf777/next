import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Footer from "@/app/components/Footer";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const meta = {
  title: "App/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    links,
    companyName: "My Next.js App",
    year: 2026,
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Minimal: Story = {
  args: {
    links: [],
    companyName: "Acme",
  },
};
