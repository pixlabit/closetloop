import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bundle Discounts",
  description: "Configure bundle discount deals on Closetloop.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
