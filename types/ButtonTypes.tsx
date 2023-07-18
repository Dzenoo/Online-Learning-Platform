import { LinkProps } from "next/link";

export interface ButtonProps {
  type: "button" | "submit";
  value: string;
  styleType: "error" | "success" | "outlined" | "initial";
  disabled?: boolean;
  isLink?: boolean;
  linkHref?: string;
}
