import { InputProps } from "@/types/form/InputTypes";
import React from "react";

const Input: React.FC<InputProps> = ({
  type,
  error,
  helperText,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  id,
  extraType,
}) => {
  if (type === "textarea") {
    return (
      <div className="flex gap-2 flex-col p-2">
        <label htmlFor={id} className={`font-bold ${error && "text-red-600"}`}>
          {label}
        </label>
        <textarea
          className={`border p-4 rounded-md w-full hover:border-black ${
            error && "border-red-600"
          }`}
          id={id}
          onChange={
            onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void
          }
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          required
          rows={3}
        />
        {error && <p className="text-red-600">{helperText}</p>}
      </div>
    );
  } else {
    return (
      <div className="flex gap-2 flex-col">
        <label htmlFor={id} className={`font-bold ${error && "text-red-600"}`}>
          {label}
        </label>
        <input
          className={`border p-4 rounded-md hover:border-black ${
            error && "border-red-600"
          }`}
          type={extraType}
          id={id}
          onChange={
            onChange as (e: React.ChangeEvent<HTMLInputElement>) => void
          }
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          required
        />
        {error && <p className="text-red-600">{helperText}</p>}
      </div>
    );
  }
};

export default Input;
