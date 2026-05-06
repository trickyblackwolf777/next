import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

const meta = {
  title: "UI/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccountSummary: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Team workspace</CardTitle>
          <Badge variant="secondary">Active</Badge>
        </div>
        <CardDescription>Plan usage for the current billing period.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-semibold">42%</div>
        <p className="text-sm text-muted-foreground">12 of 28 seats assigned</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Manage seats</Button>
        <Button size="sm" variant="outline">
          View invoice
        </Button>
      </CardFooter>
    </Card>
  ),
};
