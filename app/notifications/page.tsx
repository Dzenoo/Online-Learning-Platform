"use client";

import ProtectedRoutes from "@/components/shared/auth/ProtectedRoutes";
import React from "react";

const Notifications = () => {
  return <div className="text-center py-60">Notifications in proccess</div>;
};

export default ProtectedRoutes(Notifications, ["student"]);
