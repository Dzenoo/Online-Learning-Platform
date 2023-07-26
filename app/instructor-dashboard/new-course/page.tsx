"use client";

import { NewCourseForm } from "@/components/instructor";
import ProtectedRoutes from "@/components/shared/auth/ProtectedRoutes";
import React from "react";

const NewCoursePage = () => {
  return <NewCourseForm />;
};

export default ProtectedRoutes(NewCoursePage, ["instructor"]);
