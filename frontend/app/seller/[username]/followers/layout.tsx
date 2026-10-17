import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Followers",
  description: "Members following this seller on Closetloop.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
