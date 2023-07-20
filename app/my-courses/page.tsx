"use client";

import { CourseList } from "@/components/courses";
import { CoursesData } from "@/data/coursesdata.config";
import { useRouter } from "next/navigation";
import React from "react";

enum CourseType {
  MyCourse = "courses",
  Favorites = "favorites",
}

const MyCoursesPage = () => {
  const router = useRouter();

  return (
    <section className="py-20 px-40">
      <div className="flex flex-col gap-4">
        <h1 className="headingTitle">My Courses</h1>
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
        <CourseList courses={CoursesData} />
      </div>
    </section>
  );
};

export default MyCoursesPage;
