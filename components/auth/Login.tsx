"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useValidation } from "@/hooks/useValidation";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "@/utility/validators";
import { LoginProps, LoginType } from "@/types/auth/LoginTypes";
import Input from "../shared/form/Input";
import Button from "../shared/form/Button";

const Login: React.FC<LoginProps> = ({ login }) => {
  const [isType, setisType] = useState(LoginType.Instructor);

  const email = useValidation([VALIDATOR_EMAIL()]);
  const password = useValidation([VALIDATOR_MINLENGTH(3)]);

  let formIsValid = false;
  if (email.isValid && password.isValid) {
    formIsValid = true;
  }

  function chooseType(type: LoginType.Instructor | LoginType.Student) {
    setisType(type);
  }

  function submitLogin(e: React.FormEvent) {
    e.preventDefault();
    const values = {
      email: email.value,
      password: password.value,
    };
    login(values, isType);
  }

  return (
    <form
      onSubmit={submitLogin}
      className="p-9 mt-4 max-w-2xl m-auto flex gap-6 flex-col justify-center align-right bg-white shadow-lg rounded-lg"
    >
      <div className="text-center">
        <h1 className="font-bold text-2xl uppercase">Login to Account</h1>
        <p className="p-2 text-gray-400 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi.
        </p>
        <p className="font-bold">Login As:</p>
        <div className="flex justify-center gap-2 pt-2">
          <p
            className={`text-yellow-400 cursor-pointer ${
              isType === "instructor" && "font-bold"
            }`}
            onClick={() => chooseType(LoginType.Instructor)}
          >
            Instructor
          </p>
          <p
            onClick={() => chooseType(LoginType.Student)}
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
          Login
        </Button>
      </div>
      <div className="text-center">
        <p className="font-medium">
          You dont have account?{" "}
          <Link className="text-blue-600 underline" href="/signup">
            Click Here
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
