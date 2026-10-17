import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Manage Products", template: "%s | Closetloop" },
  description: "Review and manage listings on Closetloop.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
