import BreadcrumbComponent from "@/components/lib/breadcrumb/breadcrumb";
import OnThisPage from "@/components/navigation/OnThisPage";
import ExampleTabs from "@/components/singlePage/ExampleTabs";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ComponentsPage({
  params,
}: {
  params: Promise<{ componentName: string }>;
}) {
  const name = (await params).componentName;
  if (!(name in config.components)) {
    redirect("/components");
  }

  const component = config.components[name as keyof typeof config.components];
  return (
    <>
      <div className="z-10 flex w-full flex-col items-start justify-start">
        <BreadcrumbComponent
          path={`/components/${component.name}`}
          baseUrl="http://localhost:3000"
        />
        <h1 className="mt-4 text-3xl font-bold">{component.name}</h1>
        <h2 className="mt-1 text-zinc-500">{component.description}</h2>
        <span className="mb-10 mt-2">
          {component.buttons.map((button) => (
            <Button key={button.text} asChild variant="secondary" size="sm">
              <Link
                href={button.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {button.text}
              </Link>
            </Button>
          ))}
        </span>
        <ExampleTabs tabs={component.preview} />
        <div className="mt-10 w-full">
          <p className="scroll-mt-20 text-xl font-semibold" id="installation">
            Installation
          </p>
          <p className="mt-1 rounded-lg border bg-zinc-50 py-6 text-center text-xs text-zinc-500">
            Still working on this...
          </p>
        </div>
        <div className="mt-10 w-full">
          <p className="scroll-mt-20 text-xl font-semibold" id="props">
            Props
          </p>
          <p className="mt-1 rounded-lg border bg-zinc-50 py-6 text-center text-xs text-zinc-500">
            Still working on this...
          </p>
        </div>
        <div className="mt-10 w-full">
          <p className="scroll-mt-20 text-xl font-semibold" id="examples">
            Examples
          </p>
          {component.examples.map(
            ({ title, description, example, code, id }, index) => (
              <span
                key={index}
                className="mt-10 flex scroll-mt-20 flex-col"
                id={id}
              >
                <p className="font-semibold">{title}</p>
                <p className="mb-2 text-zinc-500">{description}</p>
                <ExampleTabs tabs={{ example, code }} />
              </span>
            ),
          )}
        </div>
      </div>
      <OnThisPage component={name as keyof typeof config.components} />
    </>
  );
}
