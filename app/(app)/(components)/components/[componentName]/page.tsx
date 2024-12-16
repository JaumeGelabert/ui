import { config } from "@/config";

export default async function ComponentsPage({
  params,
}: {
  params: Promise<{ componentName: string }>;
}) {
  const name = (await params).componentName;
  if (!(name in config.components)) {
    // TODO: redirect to 404
    return <p>Component not found</p>;
  }
  return <>{name}</>;
}
