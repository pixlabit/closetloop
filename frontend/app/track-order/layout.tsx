import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Your Order",
  description: "Track your Closetloop order.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
