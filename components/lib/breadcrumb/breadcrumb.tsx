import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { generatePath, uppercaseFirstLetter } from "@/lib/utils";

interface BreadcrumbComponentProps {
  baseUrl: string;
  path: string;
  nLast?: number;
  showFirst?: boolean;
}

export default function BreadcrumbComponent({
  path,
  baseUrl,
  nLast = 0,
  showFirst
}: BreadcrumbComponentProps) {
  const splittedPath = path.split("/");
  const formattedPath = splittedPath.filter((item) => item !== "");
  let pathNLast = formattedPath;
  let firstElement = formattedPath[0];
  let removedElements: string[] = [];

  if (nLast && nLast <= pathNLast.length) {
    removedElements = pathNLast.slice(0, -nLast);
    pathNLast = pathNLast.slice(-nLast);
    // TODO: Show this on hover "..."
    console.log("NO VISIBLE", removedElements);
  }

  console.log("Formatted Path", formattedPath);
  console.log("N last", pathNLast);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {showFirst && pathNLast.length < formattedPath.length - nLast && (
          <span className="flex items-center gap-2">
            <BreadcrumbLink href={generatePath(baseUrl, removedElements, 0)}>
              {uppercaseFirstLetter(firstElement!)}
            </BreadcrumbLink>
            <BreadcrumbSeparator />
          </span>
        )}
        {nLast && pathNLast.length < formattedPath.length - nLast && (
          <>
            <p>*</p>
            <BreadcrumbSeparator />
          </>
        )}
        {pathNLast.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            <BreadcrumbItem>
              <BreadcrumbLink
                href={generatePath(
                  baseUrl,
                  formattedPath,
                  index + removedElements.length
                )}
              >
                {uppercaseFirstLetter(item)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== pathNLast.length - 1 && <BreadcrumbSeparator />}
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
