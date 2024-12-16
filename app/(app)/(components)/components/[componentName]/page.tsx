import BreadcrumbComponent from "@/components/lib/breadcrumb/breadcrumb";
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
    <div className="flex w-full flex-col items-start justify-start">
      <BreadcrumbComponent
        path={`/components/${name}`}
        baseUrl="http://localhost:3000"
      />
      <h1 className="mt-4 text-3xl font-bold">{component.name}</h1>
      <h2 className="mt-1 text-zinc-500">{component.description}</h2>
      <span className="mb-10 mt-2">
        {component.buttons.map((button) => (
          <Button key={button.text} asChild variant="secondary" size="sm">
            <Link href={button.href} rel="noopener noreferrer" target="_blank">
              {button.text}
            </Link>
          </Button>
        ))}
      </span>
      <ExampleTabs />
    </div>
  );
}
