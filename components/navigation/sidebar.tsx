import { config } from "@/config";
import Link from "next/link";

export default function Sidebar() {
  const data = config.navigation.sidebar;
  return (
    <nav className="flex w-56 flex-col items-start justify-start gap-1 pr-4">
      {data.map(({ groupName, elements }) => (
        <>
          <p className="mb-1 mt-10 font-mono text-xs font-semibold first:mt-0">
            {groupName}
          </p>
          {elements.map(({ text, href }) => (
            <Link
              href={href}
              className="w-full rounded-lg px-2 py-1 text-sm text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
            >
              {text}
            </Link>
          ))}
        </>
      ))}
    </nav>
  );
}
