import { FilterArray, FilterProps } from "@/types/FilterTypes";
import React from "react";

const Select: React.FC<FilterArray> = ({ options, onChange }) => {
  return (
    <div>
      <select
        onChange={onChange}
        className="px-4 py-4 w-96 cursor-pointer rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option: FilterProps) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
