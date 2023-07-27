import Card from "@/components/shared/ui/Card";
import { CourseCardProps } from "@/types/courses/CourseInfoTypes";
import { createGraphicIcon } from "@/utility/helpers";
import Image from "next/image";
import React from "react";

type Instructor = {
  course: CourseCardProps;
};

const InstructorDetails: React.FC<Instructor> = ({ course }) => {
  return (
    <Card styles="flex flex-col gap-6 max-w-md">
      <h1 className="text-xl font-bold">Instructor</h1>
      <h1 className="font-bold text-2xl text-purple-700">
        {course?.instructor.first_name} {course?.instructor.last_name}
      </h1>
      <div className="flex gap-6 items-center flex-wrap">
        <Image
          src={course?.instructor.image}
          alt={course?.instructor.first_name}
          width={200}
          height={200}
        />
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            {createGraphicIcon("/assets/graphics/review.png", "review")}
            <h2 className="text-lg">200 Reviews</h2>
          </div>
          <div className="flex gap-2">
            {createGraphicIcon("/assets/graphics/graduation.png", "graduation")}
            <h2 className="text-lg">200,240 Students</h2>
          </div>
          <div className="flex gap-2">
            {createGraphicIcon("/assets/graphics/play.png", "play")}
            <h2 className="text-lg">
              {course?.instructor.courses.length} courses
            </h2>
          </div>
        </div>
      </div>
      <p className="text-md text-gray-400 font-light">
        {course?.instructor.biography}
      </p>
    </Card>
  );
};

export default InstructorDetails;
