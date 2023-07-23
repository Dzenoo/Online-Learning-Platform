"use client";
import {
  NewCourseValuesTypes,
  NewCoursesState,
} from "@/types/instructor/InstructorContextTypes";
import React from "react";

const ForCourse: React.FC<NewCoursesState> = ({ setnewCourseValues }) => {
  return (
    <div className="shadow-lg p-9">
      <div>
        <h1 className="font-bold text-2xl">For Course</h1>
        <p className="font-light">
          Create for which type your course to help students, by reducing price
          of your course
        </p>
      </div>
    </div>
  );
};

export default ForCourse;
