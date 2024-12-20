import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/navbar";

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
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
