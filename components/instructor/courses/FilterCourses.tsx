import Input from "@/components/shared/form/Input";
import Select from "@/components/shared/form/Select";
import { popularityFilters } from "@/data/filterdata.config";
import { InputType } from "@/types/form/InputTypes";
import React from "react";

const FilterCourses: React.FC = () => {
  return (
    <div className="flex items-end">
      <div>
        <Input
          type={InputType.Input}
          placeholder="Search Courses"
          label="Search"
          id="search-courses"
        />
      </div>
      <div className="pb-2">
        <Select
          options={popularityFilters}
          onChange={undefined}
          id={"popularity"}
        />
      </div>
    </div>
  );
};

export default FilterCourses;
