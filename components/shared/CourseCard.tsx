import React from "react";
import Card from "./ui/Card";
import { CourseCardLandingProps } from "@/types/CourseCardTypes";
import Image from "next/image";
import Button from "./form/Button";
import Link from "next/link";

const CourseCard: React.FC<CourseCardLandingProps> = ({
  id,
  title,
  price,
  image,
  instructor,
}) => {
  const discountPercentage = 0.7;
  const discountAmount = price * discountPercentage;
  const discountedPrice = price - discountAmount;

  return (
    <Card styles="w-[300px] flex flex-col gap-4 hover:shadow-xl transition">
      <Link href={`/courses/${id}`}>
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
        <p className="font-light text-lg text-gray-400">{instructor}</p>
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
      <Link href={`/courses/${id}`}>
        <Button styleType="initial" type="button">
          Details
        </Button>
      </Link>
    </Card>
  );
};

export default CourseCard;
