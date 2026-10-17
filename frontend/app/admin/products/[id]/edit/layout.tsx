import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Product",
  description: "Edit a product listing on Closetloop.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
