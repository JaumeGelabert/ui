import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { uppercaseFirstLetter } from "@/lib/utils";
import { generatePath } from "../../lib/utils";

interface BreadcrumbComponentProps {
  baseUrl: string;
  path: string;
  showLast?: number;
}

export default function BreadcrumbComponent({
  path,
  baseUrl,
  showLast
}: BreadcrumbComponentProps) {
  const splittedPath = path.split("/");
  const formattedPath = splittedPath.filter((item) => item !== "");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {formattedPath.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            <BreadcrumbItem>
              <BreadcrumbLink
                href={generatePath(baseUrl, formattedPath, index)}
              >
                {uppercaseFirstLetter(item)} - {index}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== formattedPath.length - 1 && <BreadcrumbSeparator />}
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
