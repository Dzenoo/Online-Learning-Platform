"use client";

import Login from "@/components/auth/Login";
import { LoginData, LoginType } from "@/types/LoginTypes";

const LoginPage = () => {
  function loginUser(
    data: LoginData,
    type: LoginType.Instructor | LoginType.Student
  ) {
    if (type === LoginType.Instructor) {
      console.log("Instructor");
    } else {
      console.log("Student");
    }
  }

  return (
    <section>
      <Login login={loginUser} />
    </section>
  );
};

export default LoginPage;
