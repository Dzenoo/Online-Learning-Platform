"use client";

import Login from "@/components/auth/Login";
import ProtectedAuth from "@/components/shared/auth/ProtectedAuth";
import { usePostHttp } from "@/hooks/usePostHttp";
import { LoginData, LoginType } from "@/types/auth/LoginTypes";

const LoginPage = () => {
  const { sendRequest, isLoading, message } = usePostHttp();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (message) {
    return <p>{message}</p>;
  }

  async function loginUser(
    data: LoginData,
    type: LoginType.Instructor | LoginType.Student
  ) {
    const loginData = {
      email: data.email,
      password: data.password,
      type: type,
    };
    const response = await sendRequest("POST", "/api/auth/login", loginData);
  }

  return (
    <section>
      <Login login={loginUser} />
    </section>
  );
};

export default ProtectedAuth(LoginPage);
