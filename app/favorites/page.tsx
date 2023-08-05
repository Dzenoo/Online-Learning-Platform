"use client";

import { CourseList } from "@/components/courses";
import ProtectedRoutes from "@/components/shared/auth/ProtectedRoutes";
import { StudentContext } from "@/context/StudentContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

enum CourseType {
  MyCourse = "my-courses",
  Favorites = "favorites",
}

const FavoritesPage = () => {
  const { studentData, filterData } = useContext(StudentContext);

  const router = useRouter();

  return (
    <section className="py-20 px-40">
      <div className="flex flex-col gap-4">
        <h1 className="headingTitle">Wishlist</h1>
        <div className="flex gap-2 max-w-md">
          <h2
            className={`cursor-pointer font-bold`}
            onClick={() => router.push(CourseType.MyCourse)}
          >
            All Courses
          </h2>
          <h2
            className={`cursor-pointer font-bold`}
            onClick={() => router.push(CourseType.Favorites)}
          >
            Wishlist
          </h2>
        </div>
      </div>
      <div className="mt-12">
        <CourseList courses={studentData?.favorites} filterData={filterData} />
      </div>
    </section>
  );
};
export default ProtectedRoutes(FavoritesPage, ["student"]);
