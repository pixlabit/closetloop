import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Following",
  description: "Members this seller follows on Closetloop.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
