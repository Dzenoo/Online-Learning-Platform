"use client";

import React, { useState } from "react";
import Input from "../shared/form/Input";
import Button from "../shared/form/Button";
import { useValidation } from "@/hooks/useValidation";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "@/utility/validators";
import Link from "next/link";
import { SignupType, SubmitProps } from "@/types/auth/SignupTypes";

const Signup: React.FC<SubmitProps> = ({ register }) => {
  const [isType, setisType] = useState(SignupType.Instructor);

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

  let formIsValid = false;
  if (
    first_name.isValid &&
    last_name.isValid &&
    email.isValid &&
    password.isValid
  ) {
    formIsValid = true;
  }

  function chooseType(type: SignupType.Instructor | SignupType.Student) {
    setisType(type);
  }

  function submitRegister(e: React.FormEvent) {
    e.preventDefault();

    const values = {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
    };

    register(values, isType);
  }

  return (
    <form
      onSubmit={submitRegister}
      className="p-9 mt-4 max-w-2xl m-auto flex gap-6 flex-col justify-center align-right bg-white shadow-lg rounded-lg"
    >
      <div className="text-center">
        <h1 className="font-bold text-2xl uppercase">Create Account</h1>
        <p className="p-2 text-gray-400 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi.
        </p>
        <p className="font-bold">Register As:</p>
        <div className="flex justify-center gap-2 pt-2">
          <p
            className={`text-yellow-400 cursor-pointer ${
              isType === "instructor" && "font-bold"
            }`}
            onClick={() => chooseType(SignupType.Instructor)}
          >
            Instructor
          </p>
          <p
            onClick={() => chooseType(SignupType.Student)}
            className={`text-blue-400 cursor-pointer ${
              isType === "student" && "font-bold"
            }`}
          >
            Student
          </p>
        </div>
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
        <Button type="submit" styleType="initial" disabled={!formIsValid}>
          Register
        </Button>
      </div>
      <div className="text-center">
        <p className="font-medium">
          You already have account?{" "}
          <Link className="text-blue-600 underline" href="/login">
            Click Here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Signup;
