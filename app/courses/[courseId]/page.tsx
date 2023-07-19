import { CoursesData } from "@/data/coursesdata.config";
import { CourseCardLandingProps } from "@/types/CourseCardTypes";
import Image from "next/image";
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
        <div className="p-6 flex-grow basis-1/2 border">
          <div className="flex gap-6 w-full">
            <Image
              src={course?.image}
              alt={course?.title}
              width={470}
              height={470}
              className="rounded-lg"
            />
            <div className="flex flex-col gap-3">
              <h1 className="font-extrabold text-4xl">{course?.title}</h1>
              <h2 className="text-lg flex gap-2 items-center">
                <div className="bg-blue-400 w-12 h-12 rounded-full"></div>
                {course?.instructor}
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
                  Lessons: <strong>{course?.lessons}</strong>
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
          <div>Prerequisites</div>
          <div>Course Content</div>
        </div>
        <div className="p-6 flex-grow basis-1/3 border">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ut itaque quidem suscipit, soluta sed totam cumque repellendus
          repudiandae. Aperiam rerum a error nihil quidem nobis laboriosam quam
          consectetur! Quidem.
        </div>
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
