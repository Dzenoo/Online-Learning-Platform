"use client";

import Signup from "@/components/auth/Signup";
import { RegisterData } from "@/types/SignupTypes";

const SignupPage = () => {
  function registerUser(data: RegisterData) {
    console.log(data);
  }

  return (
    <section>
      <Signup register={registerUser} />
    </section>
  );
};

export default SignupPage;
