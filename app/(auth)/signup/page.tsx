"use client";

import Signup from "@/components/auth/Signup";
import ProtectedAuth from "@/components/shared/auth/ProtectedAuth";
import { useAuth } from "@/hooks/useAuth";
import { usePostHttp } from "@/hooks/usePostHttp";
import { RegisterData, SignupType } from "@/types/auth/SignupTypes";

const SignupPage = () => {
  const { sendRequest, isLoading, message } = usePostHttp();
  const { signin } = useAuth();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (message) {
    return <p>{message}</p>;
  }

  async function registerUser(
    data: RegisterData,
    type: SignupType.Instructor | SignupType.Student
  ) {
    const signupData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      type: type,
    };
    const response = await sendRequest("POST", "/api/auth/signup", signupData);
    signin(response.token, response.type);
  }

  return (
    <section>
      <Signup register={registerUser} />
    </section>
  );
};

export default ProtectedAuth(SignupPage);
