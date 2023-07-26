"use client";

import Signup from "@/components/auth/Signup";
import { RegisterData, SignupType } from "@/types/auth/SignupTypes";

const SignupPage = () => {
  async function registerUser(
    data: RegisterData,
    type: SignupType.Instructor | SignupType.Student
  ) {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        type: type,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.json();
    console.log(responseData);
  }

  return (
    <section>
      <Signup register={registerUser} />
    </section>
  );
};

export default SignupPage;
