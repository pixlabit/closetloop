import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Profile",
  description: "Manage your admin profile on Closetloop.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
