import { config } from "@/config";
import Link from "next/link";

interface OnThisPageProps {
  component: keyof typeof config.components;
}

export default function OnThisPage({ component }: OnThisPageProps) {
  const data = config.components[component].examples;
  return (
    <nav className="flex w-72 justify-start pr-4 text-sm text-zinc-500">
      <span className="fixed flex flex-col gap-2">
        <p className="mb-1 mt-10 font-mono text-xs font-semibold text-zinc-800 first:mt-0">
          On this page
        </p>
        <Link href="#installation" className="w-fit hover:text-zinc-800">
          Installation
        </Link>
        <Link href="#props" className="w-fit hover:text-zinc-800">
          Props
        </Link>
        <Link href="#examples" className="w-fit hover:text-zinc-800">
          Examples
        </Link>
        <span className="flex w-full flex-col gap-2 pl-4">
          {data.map(({ title, id }, index) => (
            <Link
              key={index}
              href={`#${id}`}
              className="w-full rounded-lg hover:text-zinc-800"
            >
              {title}
            </Link>
          ))}
        </span>
      </span>
    </nav>
  );
}
