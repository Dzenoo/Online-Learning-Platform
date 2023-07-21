import {
  CourseCardLandingProps,
  CourseListProps,
} from "@/types/courses/CourseCardTypes";
import React from "react";
import { CourseCard } from "../landing";

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="flex justify-center items-stretch gap-4 p-6 flex-wrap">
      {courses.map((course: CourseCardLandingProps) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          instructor={course.instructor}
          image={course.image}
          price={course.price}
        />
      ))}
    </div>
  );
};

export default CourseList;
