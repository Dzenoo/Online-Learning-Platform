export interface InputProps {
  type: "input" | "textarea";
  error: boolean;
  helperText: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onBlur: () => void;
  id: string;
  extraType?: "password" | "number";
}
