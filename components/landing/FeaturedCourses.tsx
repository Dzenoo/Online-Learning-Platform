import React from "react";
import Button from "../shared/form/Button";
import CourseCard from "../shared/CourseCard";
import { CourseCardProps } from "@/types/courses/CourseInfoTypes";

const FeaturedCourses = ({ courses }: { courses: [] }) => {
  return (
    <section className="flex flex-col gap-2 justify-center p-12 mt-12">
      <div className="flex justify-between gap-2 mb-6">
        <div className="w-1/3 flex flex-col gap-2">
          <h1 className="text-4xl font-bold">
            Explore Our <span className="purpleText">Featured</span> Courses
          </h1>
          <p className="text-md text-gray-400">
            Discover our carefully curated selection of featured courses
            designed to enhance your knowledge and skills. These courses are led
            by industry experts and cover a wide range of subjects.
          </p>
        </div>
        <div>
          <Button
            type="button"
            styleType="initial"
            linkHref="courses"
            isLink={true}
          >
            See More Courses
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 p-6 flex-wrap">
        {courses?.map((course: CourseCardProps) => (
          <CourseCard
            _id={course._id}
            key={course._id}
            title={course.title}
            image={course.image}
            price={course.price}
            instructor={course.instructor}
            students={[]}
            requirements={[]}
            forCourse={[]}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
