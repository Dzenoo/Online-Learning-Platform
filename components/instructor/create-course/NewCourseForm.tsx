"use client";
import Button from "@/components/shared/form/Button";
import Input from "@/components/shared/form/Input";
import Select from "@/components/shared/form/Select";
import { InstructorContext } from "@/context/InstructorContext";
import { categoryFilters, languageFilters } from "@/data/filterdata.config";
import { InputType } from "@/types/form/InputTypes";
import { createGraphicIcon } from "@/utility/helpers";
import React, { ChangeEvent, useContext } from "react";

const NewCourseForm: React.FC = () => {
  const { currentStep, setCurrentStep, newCourseValues, setnewCourseValues } =
    useContext(InstructorContext);

  console.log(currentStep);

  return (
    <form className="py-40">
      {currentStep === 0 && (
        <div className="flex flex-col text-center items-center">
          <h2 className="font-bold text-2xl">
            Select what you want to create.
          </h2>
          <div className="pt-12 flex justify-center items-center gap-4">
            <button
              type="button"
              onClick={() =>
                setnewCourseValues((prevValues) => ({
                  ...prevValues,
                  type: "course",
                }))
              }
              className={`flex flex-col justify-center items-center gap-4 max-w-xs text-center border p-4 cursor-pointer transition-all hover:shadow-md ${
                newCourseValues.type === "course" && "bg-purple-100"
              }`}
            >
              {createGraphicIcon("/assets/graphics/play.png", "play")}
              <h2 className="font-bold text-xl">Course</h2>
              <p className="text-gray-400">
                Create a course with various learning abilities
              </p>
            </button>
            <button
              type="button"
              onClick={() =>
                setnewCourseValues((prevValues) => ({
                  ...prevValues,
                  type: "test",
                }))
              }
              className={`flex flex-col justify-center items-center gap-4 max-w-xs text-center border p-4 cursor-pointer hover:shadow-md ${
                newCourseValues.type === "test" && "bg-purple-100"
              }`}
            >
              {createGraphicIcon("/assets/graphics/news.png", "news")}
              <h2 className="font-bold text-xl">Test</h2>
              <p className="text-gray-400">
                Create a test to check your student knowledge from courses
              </p>
            </button>
          </div>
          <div>
            <Button
              type="button"
              styleType="initial"
              additionalStyles="mt-12"
              onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      {currentStep === 1 && (
        <div className="flex flex-col text-center items-center">
          <h2 className="font-bold text-2xl">
            Add title to of your work, so it can be found by students
          </h2>
          <div className="w-[40rem]">
            <Input
              type={InputType.Input}
              placeholder="e.g. JavaScript for beginners"
              id="title"
              onChange={(e) =>
                setnewCourseValues((prevValues) => ({
                  ...prevValues,
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <Button
              type="button"
              styleType="initial"
              additionalStyles="mt-7"
              onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="flex flex-col text-center items-center gap-12">
          <h2 className="font-bold text-2xl">
            Choose category that describe which type your work is
          </h2>
          <div className="w-[40rem]">
            <Select
              options={categoryFilters}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setnewCourseValues((prevValues) => ({
                  ...prevValues,
                  category: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <Button
              type="button"
              styleType="initial"
              additionalStyles="mt-7"
              onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div className="flex flex-col text-center items-center gap-12">
          <h2 className="font-bold text-2xl">
            Set which language your work should be
          </h2>
          <div className="w-[40rem]">
            <Select
              options={languageFilters}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setnewCourseValues((prevValues) => ({
                  ...prevValues,
                  language: e.target.value,
                }))
              }
            />
          </div>
          <div>
            {
              <Button
                type="button"
                styleType="initial"
                additionalStyles="mt-7"
                isLink={true}
                linkHref="instructor-dashboard/new-course/manage"
              >
                Create Course
              </Button>
            }
          </div>
        </div>
      )}
    </form>
  );
};

export default NewCourseForm;
