import { InstructorCoursesList } from "@/components/instructor";
import FilterCourses from "@/components/instructor/courses/FilterCourses";
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

export default InstructorDashboard;
