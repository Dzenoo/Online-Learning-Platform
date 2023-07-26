import React from "react";
import Card from "./ui/Card";
import { CourseCardProps } from "@/types/courses/CourseInfoTypes";
import Image from "next/image";
import Button from "./form/Button";
import Link from "next/link";
import { convertToDiscountPrice } from "@/utility/helpers";

const CourseCard: React.FC<CourseCardProps> = ({
  _id,
  title,
  price,
  image,
  instructor,
}) => {
  const discountedPrice = convertToDiscountPrice(price, 0.7) as number;

  return (
    <Card styles="max-w-sm flex flex-col gap-4 hover:shadow-xl transition">
      <Link href={`/courses/${_id}`}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
          }}
        />
      </Link>
      <div>
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="font-light text-lg text-gray-400">
          {instructor.first_name} {instructor.last_name}
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/assets/graphics/dollar.png"
            alt={title}
            width={40}
            height={20}
          />
          <p className="font-bold text-2xl">${discountedPrice}</p>
          <span className="line-through text-gray-400 text-s">${price}</span>
        </div>
      </div>
      <Link href={`/courses/${_id}`}>
        <Button styleType="initial" type="button">
          Details
        </Button>
      </Link>
    </Card>
  );
};

export default CourseCard;
