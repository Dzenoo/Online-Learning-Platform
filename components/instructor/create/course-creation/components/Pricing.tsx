import Select from "@/components/shared/form/Select";
import { priceData } from "@/data/filterdata.config";
import { InstructorContextType } from "@/types/instructor/InstructorContextTypes";
import React, { ChangeEvent } from "react";

type CaptionsProps = {
  setnewCourseValues: React.Dispatch<React.SetStateAction<any>>;
};

const Pricing: React.FC<CaptionsProps> = ({ setnewCourseValues }) => {
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
          options={priceData}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setnewCourseValues((prevState: InstructorContextType) => ({
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
