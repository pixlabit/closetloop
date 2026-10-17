import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Settings", template: "%s | Closetloop" },
  description: "Manage your Closetloop account settings.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
