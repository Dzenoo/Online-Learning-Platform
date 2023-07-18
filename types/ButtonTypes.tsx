export interface ButtonProps {
  type: "button" | "submit";
  value: string;
  styleType: "error" | "success" | "initial";
  disabled?: boolean;
}
