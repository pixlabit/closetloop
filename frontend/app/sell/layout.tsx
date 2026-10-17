import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell on Closetloop",
  description: "List your pre-loved items and sell them safely.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
