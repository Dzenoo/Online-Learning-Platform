"use client";

import { useState, useCallback } from "react";

export const useAuth = () => {
  const [token, setToken] = useState<string | null>();

  const signin = useCallback((authToken: string, type: string) => {
    setToken(authToken);
    const authData = {
      typeAuth: type === "student" ? "student" : "instructor",
      authToken: token,
    };
    localStorage.setItem("authData", JSON.stringify(authData));
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("authData");
  }, []);

  return { signin, logout };
};
