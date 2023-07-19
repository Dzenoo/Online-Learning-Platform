import { CourseList, CoursesFilter, CoursesInput } from "@/components/courses";
import { CoursesData } from "@/data/coursesdata.config";
import React from "react";

const CoursesPage: React.FC = () => {
  return (
    <section className="p-4 mt-2 flex justify-center gap-4 items-stretch flex-wrap">
      <div className="p-4 basis-1/2 grow">
        <CoursesInput />
        <CourseList courses={CoursesData} />
      </div>
      <div className="p-4 basis-1/4">
        <CoursesFilter />
      </div>
    </section>
  );
};

export default CoursesPage;
