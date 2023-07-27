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
              width={40}
              height={40}
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
        <ul className="flex flex-col gap-2 mt-6">
          {course?.requirements.map((text) => (
            <li key={text} className="font-bold">
              - {text}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-7 p-4">
        <h1 className="font-bold text-3xl mb-2">This course for:</h1>
        <ul className="flex flex-col gap-2 mt-6">
          {course?.forCourse.map((text) => (
            <li key={text} className="font-bold">
              - {text}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 p-4">
        <h1 className="font-bold text-3xl mb-2">Course Content</h1>
        <div className="flex gap-2 mb-4">
          <p>
            Sections: <strong>{course?.sections?.length}</strong>
          </p>
          <p>
            Lectures:{" "}
            <strong>
              {course?.sections?.reduce(
                (acc, section) => acc + section.lectures.length,
                0
              )}
            </strong>
          </p>
        </div>
        <ul className="flex flex-col ">
          {course?.sections?.map((section) => (
            <li
              key={section._id}
              className="p-4 border flex flex-col justify-between cursor-pointer"
            >
              <div className="flex justify-between">
                <h2 className="font-bold">{section.title}</h2>
                <p>{section.lectures.length} lectures</p>
              </div>
              <div className="mt-2">
                {section.lectures.map((lecture) => (
                  <h2
                    className="border border-gray-700 mt-2 p-2"
                    key={lecture._id}
                  >
                    {lecture.title}
                  </h2>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailsContent;
