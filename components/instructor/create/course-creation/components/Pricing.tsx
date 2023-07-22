import Select from "@/components/shared/form/Select";
import { priceData } from "@/data/filterdata.config";
import {
  NewCourseValuesTypes,
  NewCoursesState,
} from "@/types/instructor/InstructorContextTypes";
import React, { ChangeEvent } from "react";

const Pricing: React.FC<NewCoursesState> = ({ setnewCourseValues }) => {
  return (
    <div className="shadow-lg p-9">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="font-bold text-2xl">Pricing</h1>
        <p className="font-light">
          Provide the fundamental pricing about your course. Briefly describe
          the course's main topic, target audience, and key objectives.
          Additionally, outline the expected time commitment for learners and
          highlight any prerequisites or prior knowledge required.
        </p>
      </div>
      <div>
        <label className="font-bold text-xl">Price</label>
        <Select
          id="price"
          options={priceData}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setnewCourseValues((prevState: NewCourseValuesTypes) => ({
              ...prevState,
              price: +e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
};

export default Pricing;
