"use client";

import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useValidation } from "@/hooks/useValidation";
import { VALIDATOR_EMAIL } from "@/utility/validators";

const Signup = () => {
  const email = useValidation([VALIDATOR_EMAIL()]);

  return (
    <div>
      <Input
        type="input"
        error={!email.isValid && email.isTouched}
        onChange={email.onChangeHandler}
        onBlur={email.onBlurHandler}
        id="email"
        value={email.value}
        placeholder="Enter email"
        label="Email"
        helperText="Please enter email"
      />
      <Button value="Hi" type="button" styleType="initial" disabled={false} />
    </div>
  );
};

export default Signup;
