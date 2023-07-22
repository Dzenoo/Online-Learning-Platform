"use client";

import Input from "@/components/shared/form/Input";
import { useValidation } from "@/hooks/useValidation";
import { InputType } from "@/types/form/InputTypes";
import { VALIDATOR_REQUIRE } from "@/utility/validators";
import React from "react";

const CoursesInput: React.FC = () => {
  const searchInput = useValidation([VALIDATOR_REQUIRE()]);

  return (
    <div>
      <Input
        type={InputType.Input}
        error={false}
        helperText={"Enter Valid Search Text"}
        label={"Search Courses"}
        placeholder={"e.g JavaScript for beginners"}
        value={searchInput.value}
        onChange={searchInput.onChangeHandler}
        onBlur={searchInput.onBlurHandler}
        id={"search_input"}
      />
    </div>
  );
};

export default CoursesInput;
