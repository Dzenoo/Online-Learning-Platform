import { ButtonProps } from "@/types/ButtonTypes";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  styleType,
  type,
  value,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={`
         py-4 w-full rounded-full shadow-sm border-2 text-white
         font-bold hover:bg-[#4540e1ea] transition-all
         ${disabled && "disabled:opacity-40 cursor-not-allowed"}
         ${styleType === "error" && "bg-red-600"}
         ${styleType === "success" && "bg-green-600"}
         ${styleType === "initial" && "bg-[#4540e1]"}
        `}
    >
      {value}
    </button>
  );
};

export default Button;
