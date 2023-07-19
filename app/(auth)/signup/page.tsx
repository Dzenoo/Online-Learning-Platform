"use client";

import Signup from "@/components/auth/Signup";
import { RegisterData, SignupType } from "@/types/auth/SignupTypes";

const SignupPage = () => {
  function registerUser(
    data: RegisterData,
    type: SignupType.Instructor | SignupType.Student
  ) {
    if (type === SignupType.Instructor) {
      console.log("Instructor");
    } else {
      console.log("Student");
    }
  }

  return (
    <section>
      <Signup register={registerUser} />
    </section>
  );
};

export default SignupPage;
