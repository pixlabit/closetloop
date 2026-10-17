import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit Log",
  description: "A record of who did what in the Closetloop admin panel.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
