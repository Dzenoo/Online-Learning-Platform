"use client";

import Signup from "@/components/auth/Signup";
import ProtectedAuth from "@/components/shared/auth/ProtectedAuth";
import { useAuth } from "@/hooks/useAuth";
import { ClipLoader } from "react-spinners";
import { usePostHttp } from "@/hooks/usePostHttp";
import { RegisterData, SignupType } from "@/types/auth/SignupTypes";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const { sendRequest, setIsLoading, isLoading, message } = usePostHttp();
  const { signin } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="loader_wrapper">
        <ClipLoader />
      </div>
    );
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

    if (!response) {
      alert("Not valid credentials");
      setIsLoading(false);
    } else {
      signin(response.token, response.type, response.id);
      router.push("/");
    }
  }

  return (
    <section>
      <Signup register={registerUser} />
    </section>
  );
};

export default ProtectedAuth(SignupPage);
