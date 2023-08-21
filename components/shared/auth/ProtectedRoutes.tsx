"use client";
import { useEffect } from "react";
import { getAuthData } from "@/utility/helpers";
import { useRouter } from "next/navigation";

const ProtectedRoutes = (
  WrappedComponent: React.FC,
  allowedRoles: string[]
) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    useEffect(() => {
      const authData = getAuthData();
      if (!authData?.authToken) {
        router.push("/login");
      }
      if (allowedRoles.length === 0) {
        router.push("/login");
      } else if (!allowedRoles.includes(authData?.typeAuth)) {
        router.push("/");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default ProtectedRoutes;
