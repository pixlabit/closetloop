import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Join Closetloop and start buying and selling pre-loved fashion safely.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
