"use client";

import Select from "@/components/shared/form/Select";
import React from "react";
import {
  categoryFilters,
  durationFilters,
  languageFilters,
  skillLevelFilters,
} from "@/data/filterdata.config";
import Image from "next/image";
import { CourseFilterProps } from "@/types/courses/CourseInfoTypes";

const CoursesFilter: React.FC<CourseFilterProps> = ({ setFilterData }) => {
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
        <Select
          id="category"
          options={categoryFilters}
          onChange={(e: any) =>
            setFilterData((prevState: any) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">Skill Level</h1>
        <Select
          id="skill"
          options={skillLevelFilters}
          onChange={(e: any) =>
            setFilterData((prevState: any) => ({
              ...prevState,
              skillLevel: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">Language</h1>
        <Select
          id="language"
          options={languageFilters}
          onChange={(e: any) =>
            setFilterData((prevState: any) => ({
              ...prevState,
              language: e.target.value,
            }))
          }
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">Duration</h1>
        <Select
          id="duration"
          options={durationFilters}
          onChange={(e: any) =>
            setFilterData((prevState: any) => ({
              ...prevState,
              duration: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
};

export default CoursesFilter;
