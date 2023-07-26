"use client";
import { CourseList, CoursesFilter, CoursesInput } from "@/components/courses";
import { CoursesData } from "@/data/coursesdata.config";
import React from "react";
import useSwr from "swr";

const CoursesPage: React.FC = () => {
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  const { data: coursesData } = useSwr("/api/courses", fetcher);

  return (
    <section className="p-4 mt-2 flex justify-center gap-4 items-stretch flex-wrap-reverse">
      <div className="p-4 basis-1/2 flex-grow">
        <CoursesInput />
        <CourseList courses={coursesData} />
      </div>
      <div className="p-4 basis-1/4">
        <CoursesFilter />
      </div>
    </section>
  );
};

export default CoursesPage;
