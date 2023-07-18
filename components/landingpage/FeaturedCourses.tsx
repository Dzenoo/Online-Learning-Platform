import Image from "next/image";
import React from "react";
import Button from "../ui/formElements/Button";

const FeaturedCourses = () => {
  return (
    <section className="flex flex-col gap-2 justify-center p-12 mt-12">
      <div className="flex justify-between gap-2 mb-6">
        <div className="w-1/3 flex flex-col gap-2">
          <h1 className="text-4xl font-bold">
            Explore Our <span className="purpleText">Featured</span> Courses
          </h1>
          <p className="text-md text-gray-400">
            Discover our carefully curated selection of featured courses
            designed to enhance your knowledge and skills. These courses are led
            by industry experts and cover a wide range of subjects.
          </p>
        </div>
        <div>
          <Button
            type="button"
            value="See More Courses"
            styleType="initial"
            linkHref="courses"
            isLink={true}
          />
        </div>
      </div>
      <div>KURSEVI KURSEVI KURSEVI</div>
    </section>
  );
};

export default FeaturedCourses;
