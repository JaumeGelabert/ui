import { cn } from "@/lib/utils";
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  text: string;
  className?: string;
  isExternal?: boolean;
}

export default function CustomLink({
  href,
  text,
  className,
  isExternal,
}: CustomLinkProps) {
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className={cn(
        "text-zinc-800 underline underline-offset-2 transition-all hover:text-zinc-900",
        className,
      )}
    >
      {text}
    </Link>
  );
}
