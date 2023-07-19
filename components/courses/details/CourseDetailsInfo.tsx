import Button from "@/components/shared/form/Button";
import { CourseDetailsProps } from "@/types/CourseCardTypes";
import { convertToDiscountPrice, createGraphicIcon } from "@/utility/helpers";
import React from "react";

const CourseDetailsInfo: React.FC<CourseDetailsProps> = ({ course }) => {
  let discountedPrice = convertToDiscountPrice(course?.price, 0.7);

  return (
    <div className="p-6 flex flex-col gap-7 flex-grow basis-1/3">
      <div className="flex items-center justify-between gap-7">
        <h1 className="flex items-center gap-4">
          <span className="font-bold text-4xl">${discountedPrice}</span>{" "}
          <span className="line-through text-gray-400 text-s">
            ${course?.price}
          </span>
        </h1>
        <Button
          type="button"
          isLink={false}
          additionalStyles="w-40"
          styleType="initial"
        >
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
              <span className="font-bold text-black">{course?.students}</span>
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
      <div className="flex gap-2">
        <Button type="button" isLink={false} styleType="initial">
          <span className="flex items-center justify-center gap-4">
            {createGraphicIcon("/assets/graphics/agreement2.png", "agreement2")}
            Buy now
          </span>
        </Button>
        <Button type="button" isLink={false} styleType="outlined">
          <span className="text-black hover:text-white flex items-center justify-center gap-4">
            {createGraphicIcon("/assets/graphics/gift-box.png", "gift")}
            Buy as gift
          </span>
        </Button>
      </div>
    </div>
  );
};

export default CourseDetailsInfo;
