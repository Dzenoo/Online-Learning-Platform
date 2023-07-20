import { ChangeEvent } from "react";

export interface FilterProps {
  label: string;
  value: string;
}

export interface FilterArray {
  options: FilterProps[];
  onChange: any;
}
