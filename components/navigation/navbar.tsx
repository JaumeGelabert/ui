"use client";

import { config } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GithubSVG from "../logos/GithubSVG";

export default function Navbar() {
  const pathname = usePathname();
  const navbarData = config.navigation.navbar;
  const isCurrentPath = (href: string) => pathname.startsWith(href);
  return (
    <span className="fixed top-0 z-50 flex w-full flex-row items-center justify-center border-b bg-white bg-opacity-60 px-4 py-3 backdrop-blur-md">
      <nav className="z-50 flex w-full max-w-[1380px] flex-row items-center justify-start gap-8">
        <Link href="/" className="text-lg font-semibold">
          ui
        </Link>
        <section className="flex w-full flex-row items-baseline justify-start gap-4">
          {navbarData.map(({ text, href }, index) => (
            <Link
              key={index}
              href={href}
              className={cn(
                "text-sm text-zinc-500 hover:text-zinc-800",
                isCurrentPath(href) && "text-zinc-800",
              )}
            >
              {text}
            </Link>
          ))}
        </section>
        <Link
          href={config.links.github}
          className="rounded-lg p-1.5 hover:bg-zinc-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubSVG />
        </Link>
      </nav>
    </span>
  );
}
