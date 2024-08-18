import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hundleError = (error: any) => {
  console.log(error);
  throw new Error(typeof error === "string" ? error : JSON.stringify(error));
};
