import Image from "next/image";
import React from "react";

const CourseCheckout = () => {
  return (
    <div className="mt-6 flex items-center justify-between">
      <Image
        src="/assets/images/typescript-img.png"
        alt="typescript"
        width={100}
        height={100}
      />
      <h1 className="font-bold text-xl">Understanding Typescript</h1>
      <p className="font-bold">$12.99</p>
    </div>
  );
};

export default CourseCheckout;
