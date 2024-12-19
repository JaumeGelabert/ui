import CustomLink from "./CustomLink";

export default function Footer() {
  return (
    <span className="mt-10 flex w-full flex-row items-center justify-center border-t px-4 pb-6 pt-10">
      <nav className="flex w-full max-w-[1380px] flex-row items-center justify-start gap-8 text-sm text-zinc-500">
        <p>
          Built by{" "}
          <CustomLink
            href="https://jaumegelabert.dev/"
            text="Jaume"
            className="font-semibold"
            isExternal
          />
          . Inspired by{" "}
          <CustomLink
            href="https://ui.shadcn.com/"
            text="shadcn"
            className="font-semibold"
            isExternal
          />
          . The source code is available on{" "}
          <CustomLink
            href="https://github.com/JaumeGelabert/ui"
            text="GitHub"
            className="font-semibold"
            isExternal
          />
          .
        </p>
      </nav>
    </span>
  );
}
