"use client";
import Button from "@/components/shared/form/Button";
import Input from "@/components/shared/form/Input";
import { StudentContext } from "@/context/StudentContext";
import { usePostHttp } from "@/hooks/usePostHttp";
import { useValidation } from "@/hooks/useValidation";
import { CourseDetailsProps } from "@/types/courses/CourseInfoTypes";
import { InputType } from "@/types/form/InputTypes";
import { createGraphicIcon } from "@/utility/helpers";
import { VALIDATOR_REQUIRE } from "@/utility/validators";
import React, { FormEvent, useContext, useState } from "react";

const GiftForm = ({ courseId }: { courseId: string }) => {
  const { sendRequest, isLoading, message } = usePostHttp();
  const { studentData } = useContext(StudentContext);
  const emailInput = useValidation([VALIDATOR_REQUIRE()]);
  const firstNameInput = useValidation([VALIDATOR_REQUIRE()]);

  async function buyAsGift(e: FormEvent) {
    e.preventDefault();

    const data = {
      email: emailInput.value,
      first_name: firstNameInput.value,
    };

    await sendRequest(
      "POST",
      `/api/courses/${courseId}/${studentData?._id}/buy-as-gift`,
      data
    );
  }

  return (
    <form onSubmit={buyAsGift}>
      <Input
        type={InputType.Input}
        placeholder={"Email"}
        id={"email"}
        onChange={emailInput.onChangeHandler}
        onBlur={emailInput.onBlurHandler}
        value={emailInput.value}
      />
      <Input
        type={InputType.Input}
        placeholder={"First Name"}
        id={"first_name"}
        onChange={firstNameInput.onChangeHandler}
        onBlur={firstNameInput.onBlurHandler}
        value={firstNameInput.value}
      />
      {isLoading && <p>Loading..</p>}
      {message && <p>{message}</p>}
      <Button
        type="submit"
        isLink={false}
        styleType="initial"
        additionalStyles="mt-2"
      >
        Buy as gift
      </Button>
    </form>
  );
};

const CourseDetailsInfo: React.FC<CourseDetailsProps> = ({ course }) => {
  const [isBuyingGift, setisBuyingGift] = useState(false);
  const { sendRequest, isLoading, message } = usePostHttp();
  const { studentData, addToFavorites } = useContext(StudentContext);

  const studentCartIds = studentData?.cart.items.map((item: any) => item._id);
  const studentCoursesIds = studentData?.courses.map((item: any) => item._id);

  async function addToCart() {
    const response = await sendRequest(
      "POST",
      `/api/courses/${course?._id}/${studentData?._id}/cart`
    );
  }

  return (
    <div className="p-6 flex flex-col gap-7 flex-grow basis-1/3">
      <div className="flex items-center justify-between gap-7">
        <h1 className="flex items-center gap-4">
          <span className="font-bold text-4xl">${course?.price}</span>
        </h1>
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
                {course?.students.length}
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {createGraphicIcon("/assets/graphics/language.png", "language")}
            <h2 className="text-gray-400">
              Language:{" "}
              <span className="font-bold text-black">{course?.language}</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {createGraphicIcon("/assets/graphics/play.png", "play")}
            <h2 className="text-gray-400">
              Duration:{" "}
              <span className="font-bold text-black">{course?.duration}</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {createGraphicIcon("/assets/graphics/list.png", "list")}
            <h2 className="text-gray-400">
              Category:{" "}
              <span className="font-bold text-black">{course?.category}</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {createGraphicIcon("/assets/graphics/news.png", "news")}
            <h2 className="text-gray-400">
              Articles:{" "}
              <span className="font-bold text-black">{course?.articles}</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {createGraphicIcon(
              "/assets/graphics/certificate.png",
              "certificate"
            )}
            <h2 className="text-gray-400">
              Certificate:{" "}
              <strong className="text-black">Upon completion of course</strong>
            </h2>
          </div>
        </div>
      </div>
      <div>
        {isLoading && <p>Loading..</p>}
        {message && <p>{message}</p>}
      </div>
      {!studentCoursesIds?.includes(course?._id) ? (
        <div className="flex gap-2">
          <Button
            onClick={addToCart}
            type="button"
            isLink={false}
            styleType="initial"
          >
            <span className="flex items-center justify-center gap-4">
              {createGraphicIcon(
                "/assets/graphics/agreement2.png",
                "agreement2"
              )}
              {studentCartIds?.includes(course?._id)
                ? "Remove from cart"
                : "Add to cart"}
            </span>
          </Button>
          <Button
            onClick={() => setisBuyingGift((prevState) => !prevState)}
            type="button"
            isLink={false}
            styleType="outlined"
          >
            <span className="text-black hover:text-white flex items-center justify-center gap-4">
              {createGraphicIcon("/assets/graphics/gift-box.png", "gift")}
              Buy as gift
            </span>
          </Button>
          <Button
            onClick={() => addToFavorites(course?._id)}
            type="button"
            isLink={false}
            styleType="outlined"
          >
            <span className="text-black hover:text-white flex items-center justify-center gap-4">
              Add to Favorites
            </span>
          </Button>
        </div>
      ) : (
        <div>
          <Button type="button" isLink={false} styleType="initial">
            <span className="flex items-center justify-center gap-4">
              Start Progress Course
            </span>
          </Button>
        </div>
      )}
      {isBuyingGift && <GiftForm courseId={course?._id} />}
    </div>
  );
};

export default CourseDetailsInfo;
