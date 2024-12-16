import Link from "next/link";

export default function Sidebar() {
  // TODO: Add custom style if path is the same as the current page
  return (
    <nav className="flex w-56 flex-col items-start justify-start gap-1 pr-4">
      <p className="mb-1 font-mono text-xs font-semibold">Getting started</p>
      <Link
        href="/docs/shadcnui"
        className="w-full rounded-lg px-2 py-1 text-sm text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
      >
        shadcn/ui
      </Link>
      <Link
        href="/docs/introduction"
        className="w-full rounded-lg px-2 py-1 text-sm text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
      >
        Introduction
      </Link>
      <p className="mb-1 mt-10 font-mono text-xs font-semibold">Components</p>
      <Link
        href="/components/breadcrumb"
        className="w-full rounded-lg px-2 py-1 text-sm text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800"
      >
        Breadcrumb
      </Link>
    </nav>
  );
}
