import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
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
  nLast,
  showFirst,
}: BreadcrumbComponentProps) {
  const splittedPath = path.split("/");
  const formattedPath = splittedPath.filter((item) => item !== "");
  const firstElement = formattedPath[0];
  let removedElements: string[] = [];
  let pathNLast = formattedPath;

  if (nLast && nLast <= formattedPath.length) {
    removedElements = formattedPath.slice(0, -nLast);
    pathNLast = formattedPath.slice(-nLast);
  }

  // Excluir el primer elemento si `showFirst` es true
  if (showFirst) {
    pathNLast = pathNLast.filter((item) => item !== firstElement);
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {showFirst && (
          <span className="flex items-center gap-2">
            <BreadcrumbLink href={generatePath(baseUrl, removedElements, 0)}>
              {uppercaseFirstLetter(firstElement!)}
            </BreadcrumbLink>
            <BreadcrumbSeparator />
          </span>
        )}
        {nLast && removedElements.length > 0 && (
          <>
            <BreadcrumbEllipsis className="mr-0 w-fit" />
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
                  index + removedElements.length,
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
