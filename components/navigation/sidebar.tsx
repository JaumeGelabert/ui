"use client";

import { config } from "@/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathName = usePathname();
  const data = config.navigation.sidebar;
  return (
    <nav className="flex w-72 flex-col items-start justify-start">
      <span className="fixed flex w-60 flex-col gap-1 pr-4">
        {data.map(({ groupName, elements }, index) => (
          <span
            key={index}
            className="mb-1 mt-10 flex w-full flex-col items-start justify-start gap-1 first:mt-0"
          >
            <p className="mb-1 font-mono text-xs font-semibold">{groupName}</p>
            {elements.map(({ text, href, comingSoon }, index) =>
              comingSoon ? (
                <span
                  key={index}
                  className="flex w-full cursor-not-allowed flex-row items-center justify-start rounded-lg px-2 py-1 text-sm text-zinc-300"
                >
                  <p>{text}</p>
                  <span className="ml-2 rounded-md bg-red-500 px-1.5 py-0.5 text-xs text-white">
                    Soon
                  </span>
                </span>
              ) : (
                <Link
                  key={index}
                  href={href}
                  className={cn(
                    "w-full rounded-lg px-2 py-1 text-sm text-zinc-500 hover:bg-zinc-100",
                    pathName === href && "bg-zinc-100 text-zinc-800",
                  )}
                >
                  {text}
                </Link>
              ),
            )}
          </span>
        ))}
      </span>
    </nav>
  );
}
