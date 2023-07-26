"use client";

import { FilterCourses, InstructorCoursesList } from "@/components/instructor";
import ProtectedRoutes from "@/components/shared/auth/ProtectedRoutes";
import { CoursesData } from "@/data/coursesdata.config";
import React from "react";

const InstructorDashboard = () => {
  return (
    <section>
      <div className="p-[2.4em]">
        <h1 className="headingTitle">Courses</h1>
        <FilterCourses />
      </div>
      <InstructorCoursesList courses={CoursesData} />
    </section>
  );
};

export default ProtectedRoutes(InstructorDashboard, ["instructor"]);
