import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Moderate seller reviews on Closetloop.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
