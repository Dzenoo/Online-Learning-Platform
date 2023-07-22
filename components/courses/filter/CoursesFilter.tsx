"use client";

import Select from "@/components/shared/form/Select";
import React from "react";
import {
  categoryFilters,
  durationFilters,
  languageFilters,
  popularityFilters,
  priceRangeFilters,
  skillLevelFilters,
} from "@/data/filterdata.config";
import Input from "@/components/shared/form/Input";
import { useValidation } from "@/hooks/useValidation";
import { VALIDATOR_MAXLENGTH, VALIDATOR_MINLENGTH } from "@/utility/validators";
import Image from "next/image";
import { InputType } from "@/types/form/InputTypes";

const CoursesFilter: React.FC = () => {
  const min = useValidation([VALIDATOR_MINLENGTH(3)]);
  const max = useValidation([VALIDATOR_MAXLENGTH(10)]);

  return (
    <div className="shadow-md p-4 overflow-x-hidden rounded-md flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Filters</h2>
        <Image
          src="/assets/graphics/filter.png"
          width={20}
          height={20}
          alt="filter"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">Category</h1>
        <Select id="category" options={categoryFilters} onChange={undefined} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">Price</h1>
        <div>
          <Input
            id="min_value"
            type={InputType.Input}
            placeholder="Min"
            label="Min"
            value={min.value}
            onChange={min.onChangeHandler}
            error={false}
          />
          <Input
            placeholder="Max"
            label="Max"
            value={max.value}
            onChange={max.onChangeHandler}
            error={false}
            id="max_value"
            type={InputType.Input}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">Skill Level</h1>
        <Select id="skill" options={skillLevelFilters} onChange={undefined} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">Language</h1>
        <Select id="language" options={languageFilters} onChange={undefined} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">Duration</h1>
        <Select id="duration" options={durationFilters} onChange={undefined} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">Popularity</h1>
        <Select
          id="popularity"
          options={popularityFilters}
          onChange={undefined}
        />
      </div>
    </div>
  );
};

export default CoursesFilter;
