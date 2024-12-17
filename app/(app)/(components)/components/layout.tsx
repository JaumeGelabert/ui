import OnThisPage from "@/components/navigation/OnThisPage";
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
    <main className="flex w-full flex-col items-center">
      <div className="flex w-full max-w-[1380px] flex-row justify-start gap-20 pt-8">
        <Sidebar />
        {children}
      </div>
    </main>
  );
}
