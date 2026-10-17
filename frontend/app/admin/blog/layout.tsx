import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "Manage blog content on Closetloop.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
