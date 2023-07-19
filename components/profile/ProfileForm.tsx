"use client";

import React from "react";
import Input from "../shared/form/Input";
import { InputType } from "@/types/form/InputTypes";
import { useValidation } from "@/hooks/useValidation";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "@/utility/validators";
import Button from "../shared/form/Button";

const ProfileForm = () => {
  const first_name = useValidation([VALIDATOR_REQUIRE()]);
  const last_name = useValidation([VALIDATOR_REQUIRE()]);
  const biography = useValidation([VALIDATOR_MINLENGTH(20)]);

  return (
    <form>
      <Input
        type={InputType.Input}
        error={!first_name.isValid && first_name.isTouched}
        label={"First Name"}
        placeholder={"John"}
        value={first_name.value}
        onChange={first_name.onChangeHandler}
        onBlur={first_name.onBlurHandler}
        id={"first_name"}
        helperText="Please enter valid first name"
      />
      <Input
        type={InputType.Input}
        error={!last_name.isValid && last_name.isTouched}
        label={"Last Name"}
        placeholder={"Doe"}
        value={last_name.value}
        onChange={last_name.onChangeHandler}
        onBlur={last_name.onBlurHandler}
        id={"last_name"}
        helperText="Please enter valid last name"
      />
      <Input
        type={InputType.Textarea}
        error={!biography.isValid && biography.isTouched}
        label={"Biography"}
        placeholder={"John"}
        value={biography.value}
        onChange={biography.onChangeHandler}
        onBlur={biography.onBlurHandler}
        id={"biography"}
        helperText="Please enter valid biography"
      />
      <div className="w-64 p-2">
        <Button type="button" styleType="initial">
          Save
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
