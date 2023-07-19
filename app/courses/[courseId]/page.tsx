import Button from "@/components/shared/form/Button";
import { CoursesData } from "@/data/coursesdata.config";
import { CourseCardLandingProps } from "@/types/CourseCardTypes";
import { convertToDiscountPrice, createGraphicIcon } from "@/utility/helpers";
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

  const discountedPrice = convertToDiscountPrice(course?.price, 0.7);

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
                Sections: <strong>{course?.sections}</strong>
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
        <div className="p-6 flex flex-col gap-7 flex-grow basis-1/3 border">
          <div className="flex items-center justify-between gap-7">
            <h1 className="flex items-center gap-4">
              <span className="font-bold text-4xl">${discountedPrice}</span>{" "}
              <span className="line-through text-gray-400 text-s">
                ${course?.price}
              </span>
            </h1>
            <Button type="button" isLink={false} styleType="initial">
              Apply Coupon
            </Button>
          </div>
          <div className="pt-4 flex gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                {createGraphicIcon(
                  "/assets/graphics/graduation2.png",
                  "graduation"
                )}
                <h2 className="text-gray-400">
                  Students:{" "}
                  <span className="font-bold text-black">
                    {course?.students}
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {createGraphicIcon(
                  "/assets/graphics/language.png",
                  "graduation"
                )}
                <h2 className="text-gray-400">
                  Language:{" "}
                  <span className="font-bold text-black">
                    {course?.language}
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {createGraphicIcon("/assets/graphics/play.png", "graduation")}
                <h2 className="text-gray-400">
                  Duration:{" "}
                  <span className="font-bold text-black">
                    {course?.duration}
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                {createGraphicIcon("/assets/graphics/list.png", "graduation")}
                <h2 className="text-gray-400">
                  Category:{" "}
                  <span className="font-bold text-black">
                    {course?.category}
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {createGraphicIcon("/assets/graphics/news.png", "graduation")}
                <h2 className="text-gray-400">
                  Articles:{" "}
                  <span className="font-bold text-black">
                    {course?.articles}
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {createGraphicIcon(
                  "/assets/graphics/certificate.png",
                  "graduation"
                )}
                <h2 className="text-gray-400">
                  Certificate:{" "}
                  <strong className="text-black">
                    Upon completion of course
                  </strong>
                </h2>
              </div>
            </div>
          </div>
          <div>ACTIONS</div>
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
