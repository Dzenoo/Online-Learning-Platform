import { CourseDetailsProps } from "@/types/courses/CourseInfoTypes";
import Image from "next/image";
import React from "react";

const CourseDetailsContent: React.FC<CourseDetailsProps> = ({ course }) => {
  return (
    <div className="p-6 flex-grow basis-1/2">
      <div className="flex items-start gap-6 w-full">
        <Image
          src={course?.image}
          alt={course?.title}
          width={270}
          height={270}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-extrabold text-4xl">{course?.title}</h1>
          <h2 className="text-lg flex gap-2 items-center">
            <Image
              src={course?.instructor.image}
              alt={course?.instructor.first_name}
              width={100}
              height={100}
              className="rounded-lg"
            />
            {course?.instructor.first_name} {course?.instructor.last_name}
          </h2>
          <p className="text-gray-400 font-light">{course?.description}</p>
          <div className="text-lg flex gap-2 items-center">
            <Image
              src="/assets/graphics/webinar.png"
              alt="webinar"
              width={30}
              height={30}
            />
            <h2 className="font-bold">
              Lessons: <strong>{course?.sections?.length}</strong>
            </h2>
          </div>
          <div className="text-lg flex gap-2 items-center">
            <Image
              src="/assets/graphics/bar-chart.png"
              alt="bar-chart"
              width={30}
              height={30}
            />
            <h2 className="font-bold">{course?.skillLevel}</h2>
          </div>
        </div>
      </div>
      <div className="mt-7 p-4">
        <h1 className="font-bold text-3xl mb-2">Prerequisites</h1>
        <ul className="flex flex-col gap-2">
          <li>
            -Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            -Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            -Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
        </ul>
      </div>
      <div className="mt-4 p-4">
        <h1 className="font-bold text-3xl mb-2">Course Content</h1>
        <div className="flex gap-2 mb-4">
          <p>
            Sections: <strong>{course?.sections?.length}</strong>
          </p>
          <p>
            Lectures: <strong>{course?.lectures}</strong>
          </p>
        </div>
        <ul className="flex flex-col ">
          <li className="p-4 border flex justify-between cursor-pointer">
            <h2 className="font-bold">First Section</h2>
            <p>9 lectures</p>
          </li>
          <li className="p-4 border flex justify-between cursor-pointer">
            <h2 className="font-bold">First Section</h2>
            <p>9 lectures</p>
          </li>
          <li className="p-4 border flex justify-between cursor-pointer">
            <h2 className="font-bold">First Section</h2>
            <p>9 lectures</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailsContent;
