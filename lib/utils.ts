import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function uppercaseFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generatePath(baseUrl: string, path: string[], index: number) {
  console.log(`
    Base URL: ${baseUrl}
    Path: ${path}
    Index: ${index}
    Final URL: ${baseUrl + "/" + path.slice(0, index + 1).join("/")}
    `);
  return baseUrl + "/" + path.slice(0, index + 1).join("/");
}
