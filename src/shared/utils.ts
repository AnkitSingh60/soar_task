import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

let classNames = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const generatePageTitle = (title: string) => {
  return `${title} | Soar`;
};

const sliceText = (text: any, maxCharacters: number) => {
  if (text.length > maxCharacters) {
    return `${text.slice(0, maxCharacters - 3)}...`;
  }

  return text;
};

export { classNames, generatePageTitle, sliceText };
