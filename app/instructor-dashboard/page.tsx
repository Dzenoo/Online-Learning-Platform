"use client";

import { InstructorCoursesList } from "@/components/instructor";
import ProtectedRoutes from "@/components/shared/auth/ProtectedRoutes";
import { InstructorContext } from "@/context/InstructorContext";
import React, { useContext } from "react";

const InstructorDashboard = () => {
  const { instructorData } = useContext(InstructorContext);

  return (
    <section>
      <div className="p-[2.4em]">
        <h1 className="headingTitle">Courses</h1>
      </div>
      <InstructorCoursesList courses={instructorData?.courses} />
    </section>
  );
};

export default ProtectedRoutes(InstructorDashboard, ["instructor"]);
