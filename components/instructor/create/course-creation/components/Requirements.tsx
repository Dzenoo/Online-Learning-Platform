import Input from "@/components/shared/form/Input";
import { useValidation } from "@/hooks/useValidation";
import { InstructorContextTypes } from "@/types/instructor/InstructorContextTypes";
import { InputType } from "@/types/form/InputTypes";
import { removeRequirementHandler } from "@/utility/helpers";
import { VALIDATOR_REQUIRE } from "@/utility/validators";
import React from "react";

const Requirements = ({
  setnewCourseValues,
  newCourseValues,
}: {
  setnewCourseValues: React.Dispatch<
    React.SetStateAction<InstructorContextTypes>
  >;
  newCourseValues: InstructorContextTypes;
}) => {
  const requirementInp = useValidation([VALIDATOR_REQUIRE()]);
  const forCourseInp = useValidation([VALIDATOR_REQUIRE()]);

  return (
    <div className="shadow-lg p-9">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="font-bold text-2xl">Requirements</h1>
        <p className="font-light">
          Please provide detailed information about the prerequisites and
          technical requirements for participants interested in enrolling in
          your course. This section will help potential learners.
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <div>
          <div className="flex justify-between items-center gap-4">
            <div className="w-full">
              <Input
                type={InputType.Input}
                value={requirementInp.value}
                onChange={requirementInp.onChangeHandler}
                onBlur={requirementInp.onBlurHandler}
                helperText="Please enter valid requirements"
                id="requirements"
                label="Requirements"
                placeholder="e.g. Basics javascript knowledge"
              />
            </div>
            <button
              disabled={!requirementInp.isValid}
              className="bg-yellow-400 p-2 mt-7 rounded-sm cursor-pointer text-white"
              onClick={() =>
                setnewCourseValues((prevState) => ({
                  ...prevState,
                  requirements: [
                    ...prevState.requirements,
                    requirementInp.value,
                  ],
                }))
              }
            >
              Add
            </button>
          </div>
          <div>
            {newCourseValues?.requirements.map((requirement, ind) => (
              <div
                className="border mt-4 pl-2 flex justify-between items-center"
                key={ind}
              >
                <h2 className="font-bold">{requirement}</h2>
                <button
                  className="bg-red-600 px-4 py-2 rounded-sm cursor-pointer text-white"
                  onClick={() =>
                    removeRequirementHandler(
                      ind,
                      setnewCourseValues,
                      "requirements"
                    )
                  }
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div>
          <div className="flex justify-between items-center gap-4">
            <div className="w-full">
              <Input
                type={InputType.Input}
                value={forCourseInp.value}
                onChange={forCourseInp.onChangeHandler}
                onBlur={forCourseInp.onBlurHandler}
                helperText="Please enter valid input"
                id="course_for"
                label="This course is for"
                placeholder="e.g. Web developers"
              />
            </div>
            <button
              disabled={!forCourseInp.isValid}
              className="bg-yellow-400 p-2 mt-7 rounded-sm cursor-pointer text-white"
              onClick={() =>
                setnewCourseValues((prevState) => ({
                  ...prevState,
                  forCourse: [...prevState.forCourse, forCourseInp.value],
                }))
              }
            >
              Add
            </button>
          </div>
          <div>
            {newCourseValues?.forCourse.map((requirement, ind) => (
              <div
                className="border mt-4 pl-2 flex justify-between items-center"
                key={ind}
              >
                <h2 className="font-bold">{requirement}</h2>
                <button
                  className="bg-red-600 px-4 py-2 rounded-sm cursor-pointer text-white"
                  onClick={() =>
                    removeRequirementHandler(
                      ind,
                      setnewCourseValues,
                      "forCourse"
                    )
                  }
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
