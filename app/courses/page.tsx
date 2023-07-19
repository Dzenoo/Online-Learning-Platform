import { CourseList, CoursesFilter, CoursesInput } from "@/components/courses";
import React from "react";

const CoursesPage = () => {
  return (
    <section className="p-4 mt-2 flex justify-center items-stretch flex-wrap gap-2">
      <div className="p-4 basis-1/2 border">
        <CoursesInput />
        <CourseList />
      </div>
      <div className="p-4 basis-1/6 border">
        <CoursesFilter />
      </div>
    </section>
  );
};

export default CoursesPage;
