"use client";
import {
  CourseDetailsContent,
  CourseDetailsInfo,
  CourseList,
  InstructorDetails,
} from "@/components/courses";
import { CourseCardProps } from "@/types/courses/CourseInfoTypes";
import Link from "next/link";
import useSwr from "swr";
import React, { useContext } from "react";
import { StudentContext } from "@/context/StudentContext";

export async function generateStaticParams() {
  const courses = await fetch("/api/courses/");

  const coursesData = await courses.json();

  return coursesData.map((course: CourseCardProps) => ({
    courseId: course._id,
  }));
}

const CourseDetails = ({ params }: { params: { courseId: string } }) => {
  const { filterData } = useContext(StudentContext);
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  const { data: course } = useSwr(`/api/courses/${params.courseId}`, fetcher);
  const { data: courses } = useSwr(`/api/courses`, fetcher);

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
          <InstructorDetails course={course} />
        </div>
      </div>
      <div>
        <h1 className="mt-2 font-bold text-4xl text-center">
          Browse Related Courses
        </h1>
        <CourseList
          courses={courses?.filter(
            (course: CourseCardProps) => course._id !== params.courseId
          )}
          filterData={filterData}
        />
      </div>
    </section>
  );
};

export default CourseDetails;
