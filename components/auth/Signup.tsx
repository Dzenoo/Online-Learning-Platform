"use client";

import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useValidation } from "@/hooks/useValidation";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "@/utility/validators";
import Link from "next/link";

const Signup = () => {
  const first_name = useValidation([
    VALIDATOR_MINLENGTH(3),
    VALIDATOR_REQUIRE(),
  ]);
  const last_name = useValidation([
    VALIDATOR_MINLENGTH(3),
    VALIDATOR_REQUIRE(),
  ]);
  const email = useValidation([VALIDATOR_EMAIL()]);
  const password = useValidation([VALIDATOR_MINLENGTH(3)]);

  return (
    <form className="p-9 mt-4 max-w-2xl m-auto flex gap-6 flex-col justify-center align-right bg-white shadow-lg">
      <div>
        <h1 className="font-bold text-2xl uppercase text-center">
          Create Account
        </h1>
        <p className="p-2 text-gray-400 text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi.
        </p>
      </div>
      <div>
        <Input
          type="input"
          error={!first_name.isValid && first_name.isTouched}
          onChange={first_name.onChangeHandler}
          onBlur={first_name.onBlurHandler}
          id="instructor_firstname"
          value={first_name.value}
          placeholder="e.g John"
          label="First Name"
          helperText="Please enter valid name"
        />
        <Input
          type="input"
          error={!last_name.isValid && last_name.isTouched}
          onChange={last_name.onChangeHandler}
          onBlur={last_name.onBlurHandler}
          id="instructor_lastname"
          value={last_name.value}
          placeholder="e.g Doe"
          label="Last Name"
          helperText="Please enter valid last name"
        />
        <Input
          type="input"
          error={!email.isValid && email.isTouched}
          onChange={email.onChangeHandler}
          onBlur={email.onBlurHandler}
          id="instructor_email"
          value={email.value}
          placeholder="johndoe@gmail.com"
          label="Email"
          helperText="Please enter valid email"
        />
        <Input
          type="input"
          error={!password.isValid && password.isTouched}
          onChange={password.onChangeHandler}
          onBlur={password.onBlurHandler}
          id="instructor_password"
          value={password.value}
          placeholder="****"
          label="Password"
          helperText="Please enter valid password"
          extraType="password"
        />
        <Button
          value="Register"
          type="button"
          styleType="initial"
          disabled={false}
        />
      </div>
      <div>
        <p className="font-medium text-center">
          You already have account?{" "}
          <Link className="text-blue-600 underline" href="/">
            Click Here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Signup;
