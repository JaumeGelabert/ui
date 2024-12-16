import Sidebar from "@/components/navigation/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ui",
  description: "Components I use",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full flex-col items-center bg-green-100">
      <div className="flex w-full max-w-[1580px] flex-row justify-start pt-8">
        <Sidebar />
        {children}
      </div>
    </main>
  );
}
