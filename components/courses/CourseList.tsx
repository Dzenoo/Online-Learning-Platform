import {
  CourseCardProps,
  CourseListProps,
} from "@/types/courses/CourseInfoTypes";
import React from "react";
import { CourseCard } from "../landing";

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="flex justify-center items-stretch gap-4 p-6 flex-wrap">
      {courses?.length === 0 && <p>Not courses yet</p>}
      {courses?.map((course: CourseCardProps) => (
        <CourseCard
          key={course._id}
          _id={course._id}
          title={course.title}
          instructor={course.instructor}
          image={course.image}
          price={course.price}
          students={[]}
          requirements={[]}
          forCourse={[]}
        />
      ))}
    </div>
  );
};

export default CourseList;
