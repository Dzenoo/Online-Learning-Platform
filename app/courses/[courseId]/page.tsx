import CourseDetailsContent from "@/components/courses/details/CourseDetailsContent";
import CourseDetailsInfo from "@/components/courses/details/CourseDetailsInfo";
import { CoursesData } from "@/data/coursesdata.config";
import { CourseCardLandingProps } from "@/types/CourseCardTypes";
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
      <div className="flex items-stretch justify-center gap-2 border">
        <CourseDetailsContent course={course} />
        <CourseDetailsInfo course={course} />
      </div>
      <div className="border">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut
        itaque quidem suscipit, soluta sed totam cumque repellendus repudiandae.
        Aperiam rerum a error nihil quidem nobis laboriosam quam consectetur!
        Quidem.
      </div>
    </section>
  );
};

export default CourseDetails;
