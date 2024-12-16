import Navbar from "@/components/navigation/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ui",
  description: "Components I use"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center w-full">
      <Navbar />
      {children}
    </main>
  );
}
