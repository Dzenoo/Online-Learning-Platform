"use client";

import { CourseList } from "@/components/courses";
import { CoursesData } from "@/data/coursesdata.config";
import React, { useState } from "react";

enum CourseType {
  MyCourse = "courses",
  Favorites = "favorites",
}

const MyCoursesPage = () => {
  const [showFavorites, setshowFavorites] = useState(CourseType.MyCourse);

  return (
    <section className="py-20 px-40">
      <div className="flex flex-col gap-4">
        <h1 className="headingTitle">
          {showFavorites === CourseType.MyCourse ? "My Courses" : "Favorites"}
        </h1>
        <div className="flex gap-2 max-w-md">
          <h2
            className={`cursor-pointer font-bold ${
              showFavorites === CourseType.MyCourse
                ? "text-purple-600"
                : "text-black"
            }`}
            onClick={() => setshowFavorites(CourseType.MyCourse)}
          >
            All Courses
          </h2>
          <h2
            className={`cursor-pointer font-bold ${
              showFavorites === CourseType.Favorites
                ? "text-purple-600"
                : "text-black"
            }`}
            onClick={() => setshowFavorites(CourseType.Favorites)}
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
