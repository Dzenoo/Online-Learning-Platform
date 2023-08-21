"use client";
import { CourseList, CoursesFilter, CoursesInput } from "@/components/courses";
import ProtectedRoutes from "@/components/shared/auth/ProtectedRoutes";
import { StudentContext } from "@/context/StudentContext";
import { CoursesData } from "@/data/coursesdata.config";
import React, { useContext } from "react";
import useSwr from "swr";

const CoursesPage: React.FC = () => {
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  const { data: coursesData } = useSwr("/api/courses", fetcher);
  const { filterData, setFilterData } = useContext(StudentContext);

  console.log(filterData);

  return (
    <section className="p-4 mt-2 flex justify-center gap-4 items-stretch flex-wrap-reverse">
      <div className="p-4 basis-1/2 flex-grow">
        <CoursesInput />
        <CourseList courses={coursesData} filterData={filterData} />
      </div>
      <div className="p-4 basis-1/4">
        <CoursesFilter setFilterData={setFilterData} />
      </div>
    </section>
  );
};

export default ProtectedRoutes(CoursesPage, []);
