import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donations",
  description: "Support our mission — donate to Closetloop.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
