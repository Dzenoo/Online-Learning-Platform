"use client";

import { useState, useCallback } from "react";

export const useAuth = () => {
  const [token, setToken] = useState<string | null>();
  const [isLoggedIn, setisLoggedIn] = useState<boolean | null>(false);

  const signin = useCallback((authToken: string, type: string) => {
    setToken(authToken);
    const authData = {
      typeAuth: type === "student" ? "student" : "instructor",
      authToken: token,
    };
    localStorage.setItem("authData", JSON.stringify(authData));
    if (authData) {
      setisLoggedIn(true);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("authData");
    setisLoggedIn(false);
  }, []);

  return { signin, logout, isLoggedIn };
};
