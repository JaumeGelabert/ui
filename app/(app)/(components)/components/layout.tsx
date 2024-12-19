import Sidebar from "@/components/navigation/Sidebar";
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
    <main className="flex w-full flex-col items-center mt-20">
      <div className="flex w-full max-w-[1380px] flex-row justify-start gap-20 pt-8">
        <Sidebar />
        {children}
      </div>
    </main>
  );
}
