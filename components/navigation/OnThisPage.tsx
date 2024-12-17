import { config } from "@/config";
import Link from "next/link";

interface OnThisPageProps {
  component: keyof typeof config.components;
}

export default function OnThisPage({ component }: OnThisPageProps) {
  const data = config.components[component].examples;
  return (
    <nav className="flex w-72 flex-col items-start justify-start gap-2 pr-4 text-sm text-zinc-500">
      <p className="mb-1 mt-10 font-mono text-xs font-semibold text-zinc-800 first:mt-0">
        On this page
      </p>
      <p className="hover:text-zinc-800">Installation</p>
      <p className="hover:text-zinc-800">Examples</p>
      <span className="flex w-full flex-col gap-2 pl-4">
        {data.map(({ title }) => (
          <Link href={"href"} className="w-full rounded-lg hover:text-zinc-800">
            {title}
          </Link>
        ))}
      </span>
    </nav>
  );
}
