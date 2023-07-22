import {
  CourseDetailsContent,
  CourseDetailsInfo,
  CourseList,
  InstructorDetails,
} from "@/components/courses";
import { CoursesData } from "@/data/coursesdata.config";
import { CourseCardLandingProps } from "@/types/courses/CourseInfoTypes";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  return CoursesData.map((course) => ({
    courseId: course.id,
  }));
}

const CourseDetails = ({ params }: { params: { courseId: string } }) => {
  const course = CoursesData.find(
    (course) => course.id === params.courseId
  ) as CourseCardLandingProps;

  return (
    <section className="p-7 flex flex-col gap-6 justify-center items-stretch">
      <h1 className="text-xl text-gray-400">
        Search / <Link href="/courses">Courses /</Link>{" "}
        <strong className="font-bold text-black">{course?.title}</strong>
      </h1>
      <div className="flex items-stretch justify-center gap-2">
        <CourseDetailsContent course={course} />
        <div className="p-4 flex flex-col items-center gap-2">
          <CourseDetailsInfo course={course} />
          <InstructorDetails />
        </div>
      </div>
      <div>
        <h1 className="mt-2 font-bold text-4xl text-center">
          Browse Related Courses
        </h1>
        <CourseList
          courses={CoursesData.filter(
            (course) => course.id !== params.courseId
          )}
        />
      </div>
    </section>
  );
};

export default CourseDetails;
